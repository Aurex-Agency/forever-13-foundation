/* Forever 13 Foundation — behavior
   Progressive enhancement: the site is fully readable with JS disabled.
   ------------------------------------------------------------------------ */
(function () {
  "use strict";

  /* --------------------------------------------------------------------
     Donate configuration — SINGLE SOURCE OF TRUTH.
     When the foundation's real handle is ready, set the values below.
     Every Donate button on the site reads from here, so wiring it up is
     a one-line change. To move to Zeffy later, just swap DONATE_URL.
     -------------------------------------------------------------------- */
  var DONATE_URL = ""; // e.g. "https://cash.app/$Forever13" or Venmo/Zeffy link
  var DONATE_LABEL = "Donate in Connor's Memory";

  var donateButtons = document.querySelectorAll("[data-donate]");
  donateButtons.forEach(function (btn) {
    if (DONATE_URL) {
      btn.setAttribute("href", DONATE_URL);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener");
      btn.removeAttribute("aria-disabled");
      btn.removeAttribute("title");
    } else {
      // Not wired yet: keep it visible and reassuring, but inert.
      btn.setAttribute("href", "#donate");
      btn.setAttribute(
        "title",
        "Donation link coming soon — the button will be wired up shortly."
      );
    }
  });

  /* ------------------------------------------------- Mobile nav toggle */
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------- Floating donate (show after hero) */
  var floatBar = document.querySelector("[data-donate-float]");
  var heroSentinel = document.querySelector("[data-hero-end]");
  if (floatBar && heroSentinel && "IntersectionObserver" in window) {
    var floatObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          // Show the bar once the hero has scrolled out of view.
          floatBar.classList.toggle("is-visible", !entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -100% 0px" }
    );
    floatObs.observe(heroSentinel);
  } else if (floatBar) {
    floatBar.classList.add("is-visible");
  }

  /* ---------------------------------------------- Scroll reveal (subtle) */
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reveals.length && "IntersectionObserver" in window && !prefersReduced) {
    var revealObs = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el, i) {
      // Gentle stagger for elements revealed together.
      el.style.transitionDelay = (i % 4) * 80 + "ms";
      revealObs.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* --------------------------------------------------------- Lightbox */
  var gallery = document.querySelector("[data-gallery]");
  var lightbox = document.querySelector("[data-lightbox]");
  if (gallery && lightbox) {
    var lbImg = lightbox.querySelector("[data-lightbox-img]");
    var btnClose = lightbox.querySelector("[data-lightbox-close]");
    var btnPrev = lightbox.querySelector("[data-lightbox-prev]");
    var btnNext = lightbox.querySelector("[data-lightbox-next]");
    var items = Array.prototype.slice.call(
      gallery.querySelectorAll("[data-full]")
    );
    var current = -1;
    var lastFocused = null;

    function show(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      current = index;
      var el = items[index];
      lbImg.setAttribute("src", el.getAttribute("data-full"));
      lbImg.setAttribute("alt", el.getAttribute("data-alt") || "");
    }
    function open(index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      lbImg.removeAttribute("src");
      if (lastFocused) lastFocused.focus();
    }

    items.forEach(function (el, i) {
      el.addEventListener("click", function () {
        open(i);
      });
    });
    if (btnClose) btnClose.addEventListener("click", close);
    if (btnPrev)
      btnPrev.addEventListener("click", function () {
        show(current - 1);
      });
    if (btnNext)
      btnNext.addEventListener("click", function () {
        show(current + 1);
      });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ------------------------------------------------------- Current year */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
