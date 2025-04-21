document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let imageSet = [
    '../media/1.jpg',
    '../media/2.jpg',
    '../media/3.jpg',
    '../media/4.jpg',
    '../media/5.jpg',
    '../media/6.jpg',  
    '../media/7.jpg',  
];

let currIndex = 0;

function showImage(){
    let imageDisplay = document.querySelector('.image__display img')

    imageDisplay.src = imageSet[currIndex]
}

function nextImage(){
    if(currIndex === imageSet.length - 1){
        currIndex = 0
    } else{
        currIndex++
    }

    showImage()
    console.log(currIndex)
}

function previousImage(){
    if(currIndex === 0){
        currIndex = imageSet.length - 1
    } else{
        currIndex--
    }

    showImage()
    console.log(currIndex)
}

document.addEventListener('click', (event) =>{
    const wrapper = document.querySelector('.image__wrapper');
    if(wrapper.contains(event.target)){
        const clickX = event.clientX
        const viewportWidth = window.innerWidth

        if(clickX > viewportWidth / 2){
            nextImage()
        } else{
            previousImage()
        }
    }
    
})

function changeCursor(event) {
    const wrapper = document.querySelector('.image__wrapper');
    const cursor = document.getElementById('custom-cursor');
    const cursorX = event.clientX;
    const viewportWidth = window.innerWidth;

    if (wrapper.contains(event.target)) {      
        if (cursorX > viewportWidth / 2) {
            cursor.style.background = "url(../media/cursors/cursor_right.png)";
            cursor.style.backgroundSize = "contain";
        } else {
            cursor.style.background = "url(../media/cursors/cursor_left.png)";
            cursor.style.backgroundSize = "contain";
        }
    } else {
        cursor.style.background = "url(../media/cursors/cursor.png)";
        cursor.style.backgroundSize = "contain";
    }
}

function toggleNavMenu () {
    const nav = document.querySelector('.menu__nav')
    const hamburgerMenu = document.querySelector('.menu__hamburger')

    if(nav.classList.contains('active')){
        nav.classList.remove('active')
        hamburgerMenu.style.stroke = '#1E1E1E'
    } else{
        nav.classList.add('active')
        hamburgerMenu.style.stroke = 'white'
    }
}

const menuButton = document.querySelector('.menu__hamburger')
menuButton.addEventListener('click', toggleNavMenu)


showImage()
document.addEventListener('mousemove', changeCursor);

