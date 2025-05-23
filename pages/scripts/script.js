document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


function toggleNavMenu () {
    const nav = document.querySelector('.menu__nav')
    const hamburgerMenu = document.querySelector('.menu__hamburger')

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
        hamburgerMenu.style.stroke = 'white'
    } else{
        nav.classList.add('active')
        hamburgerMenu.style.stroke = '#1E1E1E'
    }
}

const menuButton = document.querySelector('.menu__hamburger')
menuButton.addEventListener('click', toggleNavMenu)
