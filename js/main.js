// ===== LIVE CLOCK =====
function updateTime() {
  var el = document.getElementById('current-time');
  if (!el) return;
  var now = new Date();
  el.textContent = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

setInterval(updateTime, 1000);
updateTime();

// ===== LOAD ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function () {
  // Small delay to let the page render first
  requestAnimationFrame(function () {
    // Header
    var header = document.querySelector('.header');
    if (header) header.classList.add('loaded');

    // Hero text
    var heroH1 = document.querySelector('.hero h1');
    if (heroH1) heroH1.classList.add('loaded');

    // Profile photo
    var photo = document.querySelector('.profile-photo');
    if (photo) photo.classList.add('loaded');

    // Section headers with staggered delays
    var sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(function (el, i) {
      var delay = i === 0 ? 400 : 700;
      setTimeout(function () {
        el.classList.add('loaded');
      }, delay);
    });

    // List rows with staggered delays
    var projectRows = document.querySelectorAll('.projects-section .list-row');
    projectRows.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('loaded');
      }, 500 + i * 100);
    });

    var stuffRows = document.querySelectorAll('.stuff-section .list-row');
    stuffRows.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('loaded');
      }, 800 + i * 100);
    });

    // Footer CTA
    var footer = document.querySelector('.footer-cta');
    if (footer) footer.classList.add('loaded');
  });
});
