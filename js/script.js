/* ============================================
   Evelyn The Sitter — Main Script
   ============================================ */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  // Handle all forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
});

// Form Submission Handler (Mock)
function handleFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Log to console for demo
  console.log('Form Submitted:', data);

  // Show success message
  showSuccessMessage(this);

  // Reset form
  this.reset();
}

// Show Success Message
function showSuccessMessage(formElement) {
  // Find or create success message container
  let successMsg = formElement.querySelector('.success-message');

  if (!successMsg) {
    successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = '✓ Thank you! Your message has been sent. We\'ll be in touch soon.';
    formElement.insertBefore(successMsg, formElement.firstChild);
  }

  successMsg.classList.add('show');

  // Auto-hide after 5 seconds
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 5000);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Accessibility: Close menu on Escape key
document.addEventListener('keydown', function(event) {
  const navMenu = document.getElementById('navMenu');
  if (event.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Form Validation (optional)
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// Email pattern validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Console welcome message
console.log('%cEvelyn The Sitter', 'font-size: 24px; font-weight: bold; color: #8b6f47;');
console.log('Loving Cats and Dogs since 1976');
console.log('Form submissions are logged to console for demo purposes.');
