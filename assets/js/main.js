/* Forever 13 Foundation behavior
   Progressive enhancement: the site is fully readable with JS disabled.
   All settings live in assets/js/config.js (window.F13).
   ------------------------------------------------------------------------ */
(function () {
  "use strict";

  var CFG = window.F13 || {};

  /* ------------------------------------------------------ Donate buttons */
  var DONATE_URL = CFG.DONATE_URL || "";
  var donateButtons = document.querySelectorAll("[data-donate]");
  donateButtons.forEach(function (btn) {
    if (DONATE_URL) {
      btn.setAttribute("href", DONATE_URL);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener");
      btn.removeAttribute("aria-disabled");
      btn.removeAttribute("title");
    } else {
      // Not wired yet: keep it visible and reassuring, but send to the give
      // section so the QR/instructions are in view.
      btn.setAttribute("href", "#give");
      btn.setAttribute(
        "title",
        "Donation link coming soon. The button will be wired up shortly."
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

  /* Scroll-entrance effects are pure CSS (scroll-driven animations), so
     nothing here can ever leave content hidden. */
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* --------------------------------------------------------- Lightbox */
  /* Uses event delegation + a live item list so photos added later by the
     Cloudinary gallery loader work without rebinding. */
  var gallery = document.querySelector("[data-gallery]");
  var lightbox = document.querySelector("[data-lightbox]");
  if (gallery && lightbox) {
    var lbImg = lightbox.querySelector("[data-lightbox-img]");
    var btnClose = lightbox.querySelector("[data-lightbox-close]");
    var btnPrev = lightbox.querySelector("[data-lightbox-prev]");
    var btnNext = lightbox.querySelector("[data-lightbox-next]");
    var current = -1;
    var lastFocused = null;

    var itemsNow = function () {
      return Array.prototype.slice.call(gallery.querySelectorAll("[data-full]"));
    };

    var show = function (index) {
      var items = itemsNow();
      if (!items.length) return;
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      current = index;
      var el = items[index];
      lbImg.setAttribute("src", el.getAttribute("data-full"));
      lbImg.setAttribute("alt", el.getAttribute("data-alt") || "");
    };
    var openAt = function (index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    };
    var close = function () {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      lbImg.removeAttribute("src");
      if (lastFocused) lastFocused.focus();
    };

    gallery.addEventListener("click", function (e) {
      var el = e.target.closest("[data-full]");
      if (!el || !gallery.contains(el)) return;
      openAt(itemsNow().indexOf(el));
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

  /* ----------------------------------- Cloudinary gallery auto-populate */
  /* Lists every image tagged GALLERY_TAG in the foundation's Cloudinary
     account and appends it to the gallery grid, newest first. Fails silently
     (placeholders stay) until Cloudinary is configured in config.js. */
  if (gallery && CFG.CLOUDINARY_CLOUD_NAME) {
    var cloud = CFG.CLOUDINARY_CLOUD_NAME;
    var tag = CFG.GALLERY_TAG || "forever13-gallery";
    var base = "https://res.cloudinary.com/" + cloud + "/image/upload/";
    fetch("https://res.cloudinary.com/" + cloud + "/image/list/" + tag + ".json")
      .then(function (r) {
        if (!r.ok) throw new Error("list unavailable");
        return r.json();
      })
      .then(function (data) {
        var resources = (data.resources || []).sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        if (!resources.length) return;
        // Real photos have arrived: retire the placeholder tiles and note.
        gallery
          .querySelectorAll('.gallery__item[aria-hidden="true"]')
          .forEach(function (el) {
            el.remove();
          });
        var note = document.querySelector(".gallery__note");
        if (note) note.textContent = "Tap any photo to see it full screen.";
        resources.forEach(function (rc) {
          var id = rc.public_id + "." + (rc.format || "jpg");
          var btn = document.createElement("button");
          btn.className = "gallery__item";
          btn.setAttribute("data-full", base + "f_auto,q_auto,w_1600/" + id);
          btn.setAttribute("data-alt", "Forever 13 Foundation event photo");
          var img = document.createElement("img");
          img.src = base + "f_auto,q_auto,w_700/" + id;
          img.alt = "Forever 13 Foundation event photo";
          img.loading = "lazy";
          btn.appendChild(img);
          gallery.appendChild(btn);
        });
      })
      .catch(function () {
        /* Not configured or resource list disabled; placeholders remain. */
      });
  }

  /* ------------------------------------------- Hero watermark parallax */
  var parallax = document.querySelectorAll("[data-parallax]");
  if (parallax.length && !prefersReduced) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY || 0;
        parallax.forEach(function (el) {
          el.style.transform = "translate3d(0," + y * 0.12 + "px,0)";
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------- Current year */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
