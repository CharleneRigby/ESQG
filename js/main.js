(function () {
  var d = document;
  d.documentElement.classList.add('js');

  var y = d.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();

  // mobile menu
  var btn = d.querySelector('.nav-mobile'), menu = d.querySelector('.bottomnav-menu');
  if (btn && menu) {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Menu');
    btn.tabIndex = 0;
    var toggle = function () { menu.classList.toggle('open'); };
    btn.addEventListener('click', toggle);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.classList.remove('open');
    });
  }

  // scroll-in effects
  var items = [];
  function add(sel, cls) {
    d.querySelectorAll(sel).forEach(function (el) {
      el.classList.add('rv', cls);
      items.push(el);
    });
  }
  add('.section-subheading', 'rv-l');
  add('.section-heading', 'rv-r');
  add('.services-content,.services-content-end,.services-content-pricing,.funding-content-end,.industries-content,.funding-paragraph,.funding-content,.contact-grid,.contact-form', 'rv-s');
  add('.hero-subheading,.hero-heading,.hero-cta a', 'rv-h');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (e) { io.observe(e); });
})();
