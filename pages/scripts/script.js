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

const menuButton = document.querySelector('.menu__hamburger')
menuButton.addEventListener('click', toggleNavMenu)

console.log('script-loaded')