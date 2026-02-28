#!/usr/bin/env bash
# =============================================================================
# check-template.sh — Vérification pré-déploiement du template Artisan
# Compatibilité : macOS (BSD grep) + Linux (GNU grep)
# Usage : bash scripts/check-template.sh [RACINE_DU_PROJET]
# =============================================================================

set -euo pipefail

ROOT="${1:-$(cd "$(dirname "$0")/.." && pwd)}"
ERRORS=0
WARNINGS=0

red()    { printf '\033[0;31m%s\033[0m\n' "$*"; }
yellow() { printf '\033[0;33m%s\033[0m\n' "$*"; }
green()  { printf '\033[0;32m%s\033[0m\n' "$*"; }
bold()   { printf '\033[1m%s\033[0m\n' "$*"; }

err()  { red    "  [ERREUR]  $*"; ERRORS=$((ERRORS+1)); }
warn() { yellow "  [AVERT.]  $*"; WARNINGS=$((WARNINGS+1)); }
ok()   { green  "  [OK]      $*"; }

bold "============================================================"
bold " Template Artisan — Vérification"
bold " Racine : $ROOT"
bold "============================================================"

# ------------------------------------------------------------
# 1. Fichiers obligatoires
# ------------------------------------------------------------
bold ""
bold "▶ 1. Fichiers obligatoires"

REQUIRED_FILES=(
  "robots.txt"
  "sitemap.xml"
  "config/site.js"
  "js/components.js"
  "js/script.js"
  "css/style.css"
)

for f in "${REQUIRED_FILES[@]}"; do
  if [ -f "$ROOT/$f" ]; then
    ok "$f"
  else
    err "$f manquant"
  fi
done

# ------------------------------------------------------------
# 2. Placeholders non remplacés dans config/site.js
# ------------------------------------------------------------
bold ""
bold "▶ 2. Placeholders dans config/site.js"

CONFIG="$ROOT/config/site.js"
PLACEHOLDER_PATTERNS=(
  "NOUVEAU_NOM"
  "RAISON_SOCIALE"
  "SIRET_14"
  "0X XX XX"
  "contact@domaine"
  "CDN/logo"
  "CDN/og"
  "CLIENT_cookie"
  "CLIENT_contacts"
)

if [ -f "$CONFIG" ]; then
  # Strip JS line-comments before searching to avoid false positives
  CONFIG_VALUES=$(sed 's|//.*||g' "$CONFIG")
  for pat in "${PLACEHOLDER_PATTERNS[@]}"; do
    if echo "$CONFIG_VALUES" | grep -qi "$pat" 2>/dev/null; then
      warn "Placeholder non remplacé dans config/site.js : '$pat'"
    fi
  done
  ok "Scan placeholders config/site.js terminé"
else
  err "config/site.js introuvable — skip"
fi

# Réseaux sociaux encore à '#'
if [ -f "$CONFIG" ]; then
  grep -E "facebook:" "$CONFIG" | grep -q "'#'" 2>/dev/null && warn "social.facebook encore à '#' dans config/site.js" || true
  grep -E "instagram:" "$CONFIG" | grep -q "'#'" 2>/dev/null && warn "social.instagram encore à '#' dans config/site.js" || true
  grep -E "linkedin:" "$CONFIG"  | grep -q "'#'" 2>/dev/null && warn "social.linkedin encore à '#' dans config/site.js" || true
fi

# ------------------------------------------------------------
# 3. Tel / email hardcodés sans data-tel-cta / data-email-cta
# ------------------------------------------------------------
bold ""
bold "▶ 3. Tel / email hardcodés dans le body (hors data-tel-cta / data-email-cta)"

HTML_FILES=("$ROOT"/*.html)

for f in "${HTML_FILES[@]}"; do
  fname=$(basename "$f")
  found_tel=0
  found_mail=0

  # Lignes avec href="tel:..." sans data-tel-cta
  while IFS= read -r line; do
    echo "$line" | grep -q 'data-tel-cta' || { found_tel=1; break; }
  done < <(grep -n 'href="tel:' "$f" 2>/dev/null || true)

  # Lignes avec href="mailto:..." sans data-email-cta
  while IFS= read -r line; do
    echo "$line" | grep -q 'data-email-cta' || { found_mail=1; break; }
  done < <(grep -n 'href="mailto:' "$f" 2>/dev/null || true)

  [ "$found_tel"  -eq 1 ] && warn "$fname : href tel: sans data-tel-cta"
  [ "$found_mail" -eq 1 ] && warn "$fname : href mailto: sans data-email-cta"
done
ok "Scan tel/email terminé"

# ------------------------------------------------------------
# 4. Balance des balises <section>
# ------------------------------------------------------------
bold ""
bold "▶ 4. Balance des balises <section>"

for f in "${HTML_FILES[@]}"; do
  fname=$(basename "$f")
  OPEN=$(grep -cE '<section[^>]*>' "$f" 2>/dev/null) || OPEN=0
  CLOSE=$(grep -cE '</section>' "$f" 2>/dev/null) || CLOSE=0
  if [ "$OPEN" != "$CLOSE" ]; then
    err "$fname : $OPEN <section> ouvertes / $CLOSE </section> fermées"
  else
    ok "$fname : $OPEN section(s) équilibrée(s)"
  fi
done

# ------------------------------------------------------------
# 5. Cohérence de domaine (canonical / sitemap)
# ------------------------------------------------------------
bold ""
bold "▶ 5. Cohérence de domaine (canonical / sitemap)"

DOMAIN=""
if [ -f "$CONFIG" ]; then
  # Extraire la valeur de site.url depuis config/site.js
  DOMAIN=$(grep "url:" "$CONFIG" | grep -E "https?://" | head -1 \
    | sed -E "s/.*'(https?:\/\/[^']*)'.*/\1/" 2>/dev/null || true)
fi

if [ -z "$DOMAIN" ]; then
  warn "Impossible d'extraire site.url depuis config/site.js — skip vérification domaine"
else
  ok "Domaine détecté : $DOMAIN"

  # Vérifier que les URLs <loc> du sitemap utilisent uniquement ce domaine
  if [ -f "$ROOT/sitemap.xml" ]; then
    SITEMAP_DOMAINS=$(grep '<loc>' "$ROOT/sitemap.xml" | grep -oE 'https?://[^/<]+' 2>/dev/null | sort -u || true)
    BAD=0
    while IFS= read -r d; do
      [ "$d" = "$DOMAIN" ] || { warn "sitemap.xml <loc> contient le domaine inattendu : $d"; BAD=1; }
    done <<< "$SITEMAP_DOMAINS"
    [ "$BAD" -eq 0 ] && ok "sitemap.xml cohérent avec $DOMAIN"
  fi

  # Vérifier les canonicals dans chaque HTML
  DOMAIN_CLEAN=$(echo "$DOMAIN" | sed 's|https\?://||')
  for f in "${HTML_FILES[@]}"; do
    fname=$(basename "$f")
    CANON=$(grep -i 'rel="canonical"' "$f" 2>/dev/null | grep -oE 'href="[^"]*"' | sed 's/href="//;s/"//' || true)
    if [ -n "$CANON" ]; then
      echo "$CANON" | grep -qF "$DOMAIN_CLEAN" || warn "$fname : canonical hors domaine ($CANON)"
    fi
  done
  ok "Scan canonicals terminé"
fi

# ------------------------------------------------------------
# 6. Title + meta description présents sur les pages indexables
# ------------------------------------------------------------
bold ""
bold "▶ 6. Title + meta description"

INDEXABLE_PAGES=("index.html" "plomberie.html" "chauffage.html" "recherche-de-fuite.html" "renovation.html" "about.html" "contact.html" "faq.html")

for page in "${INDEXABLE_PAGES[@]}"; do
  f="$ROOT/$page"
  [ -f "$f" ] || { warn "$page introuvable — skip"; continue; }
  grep -qi '<title>' "$f" || err "$page : balise <title> manquante"
  grep -qi 'name="description"' "$f" || err "$page : meta description manquante"
  grep -qi 'property="og:image:alt"' "$f" || warn "$page : og:image:alt manquant"
  grep -qi 'twitter:image:alt' "$f" || warn "$page : twitter:image:alt manquant"
done
ok "Scan title/meta description terminé"

# ------------------------------------------------------------
# 7. robots.txt — Sitemap déclaré
# ------------------------------------------------------------
bold ""
bold "▶ 7. robots.txt"

if [ -f "$ROOT/robots.txt" ]; then
  grep -qi "Sitemap:" "$ROOT/robots.txt" && ok "Sitemap déclaré dans robots.txt" || err "robots.txt : directive Sitemap manquante"
fi

# ------------------------------------------------------------
# 8. sitemap.xml — lastmod pas vide
# ------------------------------------------------------------
bold ""
bold "▶ 8. sitemap.xml"

if [ -f "$ROOT/sitemap.xml" ]; then
  COUNT=$(grep -c "<lastmod>" "$ROOT/sitemap.xml" 2>/dev/null || echo 0)
  ok "sitemap.xml : $COUNT entrée(s) avec lastmod"
  URLS=$(grep -c "<loc>" "$ROOT/sitemap.xml" 2>/dev/null || echo 0)
  ok "sitemap.xml : $URLS URL(s) déclarée(s)"
fi

# ------------------------------------------------------------
# RÉSUMÉ
# ------------------------------------------------------------
bold ""
bold "============================================================"
if [ "$ERRORS" -eq 0 ] && [ "$WARNINGS" -eq 0 ]; then
  green " Tout bon ! 0 erreur, 0 avertissement."
elif [ "$ERRORS" -eq 0 ]; then
  yellow " $WARNINGS avertissement(s), 0 erreur bloquante."
else
  red " $ERRORS erreur(s) bloquante(s), $WARNINGS avertissement(s)."
  exit 1
fi
bold "============================================================"
bold ""
