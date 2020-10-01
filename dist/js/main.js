// Slecctionar los items del DOM
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const brandMenu = document.querySelector('.menu-branding');
const navMenu = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Estado inicial del Menu
let showMenu = false;



menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        brandMenu.classList.add('show');
        navMenu.classList.add('show');
        navItems.forEach(navItem => {
            navItem.classList.add('show')
        });

        // set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        brandMenu.classList.remove('show');
        navMenu.classList.remove('show');
        navItems.forEach(navItem => {
            navItem.classList.remove ('show')
        });

        // set menu state
        showMenu = false;
    }
    
}