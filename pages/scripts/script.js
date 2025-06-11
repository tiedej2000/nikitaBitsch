function isMobileDevice() {
    return window.innerWidth <= 1024;
}

function initializeCursor() {
    if (!isMobileDevice()) {
        document.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('custom-cursor');
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }
}

initializeCursor();

function toggleNavMenu () {
    const nav = document.querySelector('.menu__nav')

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    } else{
        nav.classList.add('active')
    }
}

const menuButton = document.querySelector('.hamburger-icon')
menuButton.addEventListener('click', () =>{
    toggleNavMenu()

    menuButton.classList.toggle('clicked')
})




document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.querySelector('.main__wrapper');

    if (loaderWrapper) {
        loaderWrapper.classList.add('active');

        setTimeout(() => {
        loaderWrapper.classList.remove('active');
        }, 1000); 
    }
});