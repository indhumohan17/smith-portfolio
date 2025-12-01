'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


/* ----------------------------------
   Background icons: spawn & animate
----------------------------------- */

(function () {
  const ICONS = [
    'bxl-html5',
    'bxl-css3',
    'bxl-javascript',
    'bxl-react',
    'bxl-nodejs',
    'bxs-star'
  ];

  const container = document.getElementById('bg-icons');
  if (!container) return;

  function createIcon() {
    const el = document.createElement('i');
    const ic = ICONS[Math.floor(Math.random() * ICONS.length)];
    el.className = `bx ${ic} bg-icon`;

    const size = Math.floor(Math.random() * 46) + 18; // 18 - 64px
    el.style.fontSize = `${size}px`;

    el.style.left = `${Math.random() * 100}%`;

    const duration = (Math.random() * 12 + 8).toFixed(2); // 8 - 20s
    el.style.setProperty('--duration', `${duration}s`);

    // subtle opacity for variety
    el.style.opacity = (0.06 + Math.random() * 0.25).toString();

    container.appendChild(el);

    // remove after animation end to avoid DOM buildup
    el.addEventListener('animationend', () => el.remove());
  }

  // initial spawn
  for (let i = 0; i < 10; i++) {
    setTimeout(createIcon, Math.random() * 1200);
  }

  // continuous spawn
  const interval = Math.max(450, 1200 - Math.floor(window.innerWidth / 6));
  setInterval(createIcon, interval);
})();

