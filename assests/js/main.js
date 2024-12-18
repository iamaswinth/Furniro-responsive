const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close');

/*=============== SHOW MENU ===============*/

if (navToggle) {
    navToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from triggering the outside click listener
        navMenu.classList.add('show-menu');
    });
}

/*=============== HIDE MENU WITH CLOSE BUTTON ===============*/
if (navClose) {
    navClose.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering the outside click listener
        navMenu.classList.remove('show-menu');
    });
}

/*=============== CLOSE MENU ON OUTSIDE CLICK ===============*/
document.addEventListener('click', (event) => {
    if (
        navMenu.classList.contains('show-menu') && // Check if the menu is open
        !navMenu.contains(event.target) && // Ensure the click is outside the menu
        event.target !== navToggle // Ensure the click is not on the toggle button
    ) {
        navMenu.classList.remove('show-menu');
    }
});