// ============================================================
// COOKIE BANNER
// (affichage géré dans components.js après renderCookieBanner)
// ============================================================
const cookieKey = 'bp2c_cookie_consent';

function acceptCookies() {
  localStorage.setItem(cookieKey, 'accepted');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('visible');
}
function rejectCookies() {
  localStorage.setItem(cookieKey, 'rejected');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.remove('visible');
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(title, desc) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-desc').textContent = desc;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}

// ============================================================
// CONTACT FORMS
// ============================================================
document.querySelectorAll('form[data-contact-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    data.date = new Date().toISOString();
    const contacts = JSON.parse(localStorage.getItem('bp2c_contacts') || '[]');
    contacts.push(data);
    localStorage.setItem('bp2c_contacts', JSON.stringify(contacts));
    showToast('Message envoyé !', 'Nous vous contacterons dans les plus brefs délais.');
    form.reset();
  });
});

// ============================================================
// FAQ ACCORDION
// ============================================================
document.querySelectorAll('.faq-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const question = btn.querySelector('.faq-question');
    const isOpen = answer.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('text-blue-600');
      q.classList.add('text-slate-900');
    });
    document.querySelectorAll('.faq-icon').forEach(ic => {
      ic.classList.remove('bg-blue-100', 'text-blue-600');
      ic.classList.add('bg-slate-100', 'text-slate-500');
      ic.querySelector('.icon-minus').style.display = 'none';
      ic.querySelector('.icon-plus').style.display = 'block';
    });

    // Toggle clicked
    if (!isOpen) {
      answer.classList.add('open');
      question.classList.add('text-blue-600');
      question.classList.remove('text-slate-900');
      icon.classList.add('bg-blue-100', 'text-blue-600');
      icon.classList.remove('bg-slate-100', 'text-slate-500');
      icon.querySelector('.icon-minus').style.display = 'block';
      icon.querySelector('.icon-plus').style.display = 'none';
    }
  });

  // Open first by default
  if (i === 0) btn.click();
});

// ============================================================
// SMOOTH SCROLL for anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden-reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add('hidden-reveal');
  revealObserver.observe(el);
});

