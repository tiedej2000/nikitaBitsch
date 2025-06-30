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

    // animation for when page loads
    const loaderWrapper = document.querySelector('.main__wrapper');

    if (loaderWrapper) {
        loaderWrapper.classList.add('active');

        setTimeout(() => {
        loaderWrapper.classList.remove('active');
        }, 1000); 
    }
});



const projectWrapper = document.querySelector('.project__wrapper');

projectWrapper.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault() 
    projectWrapper.scrollLeft += e.deltaY
  }
})


// projects

function checkProject(setName) {
    localStorage.setItem('imageSet', setName);
    window.location.href = '../index.html';
}