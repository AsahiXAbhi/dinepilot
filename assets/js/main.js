/* DinePilot — interaction layer
   Sticky header state, mobile navigation, scroll reveals, demo form. */

(function () {
  'use strict';

  /* ---------- Sticky header ---------- */
  var header = document.querySelector('[data-header]');

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  if (toggle && mobileNav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      mobileNav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setNav(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });

    var desktop = window.matchMedia('(min-width: 881px)');
    var closeOnDesktop = function (event) {
      if (event.matches) setNav(false);
    };
    if (typeof desktop.addEventListener === 'function') {
      desktop.addEventListener('change', closeOnDesktop);
    } else if (typeof desktop.addListener === 'function') {
      desktop.addListener(closeOnDesktop);
    }
  }

  /* ---------- Demo enquiry form ---------- */
  document.querySelectorAll('[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var status = form.querySelector('[data-form-status]');
      if (!status) return;

      status.setAttribute('data-tone', 'info');
      status.textContent = 'Demo only — nothing was sent. This showcase site is not connected to an enquiry inbox yet. In a live build, your message would be delivered to DinePilot.';
      status.classList.add('is-visible');
    });
  });

  /* ---------- Footer year ---------- */
  var year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = String(year);
  });
})();
