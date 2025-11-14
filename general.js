// --- Header Dropdown Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const phoneDropdown = document.querySelector('.phone-dropdown');
  if (phoneDropdown) {
    const phoneNumber = phoneDropdown.querySelector('.phone-number');
    const dropdownContent = phoneDropdown.querySelector('.dropdown-content');
    if (phoneNumber && dropdownContent) {
      phoneNumber.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
      });
    }
  }
  document.addEventListener('click', (event) => {
    const dropdownContent = document.querySelector('.dropdown-content.show');
    if (dropdownContent && !event.target.closest('.phone-dropdown')) {
      dropdownContent.classList.remove('show');
    }
  });

  const slides = document.querySelectorAll('.promo .slide');
  const prevBtn = document.querySelector('.promo .slider-arrow.prev');
  const nextBtn = document.querySelector('.promo .slider-arrow.next');
  const dots = document.querySelectorAll('.promo .dot');
  let current = 0;
  let interval = null;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      dots[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAuto() {
    stopAuto();
    interval = setInterval(nextSlide, 5000);
  }

  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  if (slides.length && prevBtn && nextBtn && dots.length) {
    showSlide(0);
    startAuto();
    nextBtn.addEventListener('click', function() {
      nextSlide();
      startAuto();
    });
    prevBtn.addEventListener('click', function() {
      prevSlide();
      startAuto();
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', function() {
        showSlide(i);
        startAuto();
      });
    });
  }

  document.querySelectorAll('.promo .promo-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      window.location.href = 'blog.html';
    });
  });
});
