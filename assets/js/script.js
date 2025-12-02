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

function createBackgroundIcons() {
    const container = document.getElementById('backgroundIcons');
    if (!container) return;

    // Icon shapes and symbols
    const iconShapes = [
        '●', '◆', '▲', '■', '★', '✦', '◉', '◈',
        '▣', '◐', '◑', '◒', '◓', '◔', '◕',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',


         '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',



        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '⚡', '✨',  '✱', '✲', '✳', '✴', '✵',
         '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',
        



        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '⚡', '✨',  '✱', '✲', '✳', '✴', '✵',
        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
         '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',
    ];
    // Design-related icons (using Unicode symbols)
    const designIcons = [
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',
       


        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '⚡', '✨',  '✱', '✲', '✳', '✴', '✵',
        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',


        
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',
        '✶', '✷', '✸', '✹', '✺', '✻', '✼',
        '✎', '✏', '✐', '✑', '✒', '✓', '✔',
        '◉', '◈', '◎', '◯', '◌', '◍', '◐',
        '◮', '◯', '◰', '◱', '◲', '◳', '◴',
        '⚡', '✨', '✱', '✲', '✳', '✴', '✵',

    ];

    const allIcons = [...iconShapes, ...designIcons];
    const iconCount = 30; // Number of animated icons

    // Create icons
    for (let i = 0; i < iconCount; i++) {
        const icon = document.createElement('div');
        icon.className = 'bg-icon';
        
        // Random icon from the array
        const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
        icon.textContent = randomIcon;
        
        // Random initial properties
        const size = Math.random() * 30 + 15; // 15-45px
        const startX = Math.random() * 100; // Percentage
        const startY = Math.random() * 100; // Percentage
        const animationDuration = Math.random() * 20 + 15; // 15-35 seconds
        const animationDelay = Math.random() * 5; // 0-5 seconds
        const rotationSpeed = Math.random() * 360 + 180; // 180-540 degrees
        const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4 opacity
        
        icon.style.left = startX + '%';
        icon.style.top = startY + '%';
        icon.style.fontSize = size + 'px';
        icon.style.opacity = opacity;
        icon.setAttribute('data-opacity', opacity);
        icon.style.animationDuration = animationDuration + 's';
        icon.style.animationDelay = animationDelay + 's';
        icon.style.color = i % 3 === 0 ? '#ff5100ff' : '#ff3c00ff'; // Theme colors
        
        // Random animation type
        const animationType = Math.floor(Math.random() * 3);
        switch(animationType) {
            case 0:
                icon.classList.add('float-rotate');
                break;
            case 1:
                icon.classList.add('float-diagonal');
                break;
            case 2:
                icon.classList.add('float-circular');
                break;
        }
        
        container.appendChild(icon);
    }
}

createBackgroundIcons();
