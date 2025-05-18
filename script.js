// script.js
// Adds smooth scrolling, resume download, and EmailJS form submission

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navbar links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // "Let's Talk" button scroll
  document.querySelector('.btn-primary')?.addEventListener('click', () => {
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Resume download
  document.querySelector('.btn-secondary')?.addEventListener('click', () => {
    window.open('resume.pdf', '_blank');
  });

  // Contact form using EmailJS
  const form = document.getElementById('contact');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      emailjs.sendForm(
        'service_fmy5wuc',   // ← Replace with your Service ID
        'template_0twcbn2',  // ← Replace with your Template ID
        '#contact'
      )
      .then(() => {
        alert('🎉 Your message was sent successfully!');
        form.reset();
      })
      .catch(error => {
        console.error(error);
        alert('Oops… something went wrong. Please try again later.');
      });
    });
  }
});