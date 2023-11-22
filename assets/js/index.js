document.addEventListener('DOMContentLoaded', () => {
    // Menu bar toggle button
    const menu = document.querySelector('.menu');
    const hiddenNav = document.querySelector('.hidden-nav');
    const exitButton = hiddenNav.querySelector('.exit-button');
    const newNavLinks = hiddenNav.querySelectorAll('a');
    let isOpen = false;

    menu.addEventListener('click', () => {
        toggleHiddenNav();
    });

    exitButton.addEventListener('click', () => {
        slideOutHiddenNav();
    });

    newNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleHiddenNav();
        });
    });

    function toggleHiddenNav() {
        isOpen = !isOpen;
        if (isOpen) {
            hiddenNav.style.display = 'block';
            hiddenNav.classList.add('slide-in');
        } else {
            slideOutHiddenNav();
        }
    };

    function slideOutHiddenNav() {
        hiddenNav.classList.add('slide-out');
        hiddenNav.addEventListener('animationend', () => {
            hiddenNav.style.display = 'none';
            hiddenNav.classList.remove('slide-out');
        }, { once: true });
        isOpen = false;
    };
});