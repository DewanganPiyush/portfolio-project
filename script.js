// script.js
// Adds smooth scrolling, resume download, EmailJS initialization, and form submission

document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS SDK (make sure SDK <script> is included in HTML head)
  emailjs.init('gTL_G8CfsQYZa1x7p');  // ← Your EmailJS User ID

  // Smooth scrolling for navbar links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // "Let's Talk" button scroll (if present)
  document.querySelector('.btn-primary')?.addEventListener('click', () => {
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Resume download button
  document.querySelector('.btn-secondary')?.addEventListener('click', () => {
    window.open('resume.pdf', '_blank');
  });

  // Contact form using EmailJS
  const form = document.getElementById('contact');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      emailjs.sendForm(
        'service_fmy5wuc',   // Your Service ID
        'template_0twcbn2',  // Your Template ID
        '#contact'
      )
      .then(() => {
        alert('🎉 Your message was sent successfully!');
        form.reset();
      })
      .catch(error => {
        console.error('EmailJS Error:', error);
        alert('Oops… something went wrong. Please try again later.');
      });
    });
  }
});