// checks device
function isMobileDevice() {
    return window.innerWidth <= 1024;
}

// custom cursor function that checks device
function initializeCursor() {
    if (!isMobileDevice()) {
        document.addEventListener('mousemove', (e) => {
            const cursor = document.getElementById('custom-cursor');
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
        document.addEventListener('mousemove', changeCursor);
    }
}

initializeCursor();

// gallery for images
let imageSet = [
    {
      src: './media/bilder/02.untitled-2024 (3).jpg',
      title: 'untitled',
      year: '2024'
    },
    {
        src: './media/bilder/01.untitled-2024 (4).jpg',
        title: 'untitled',
        year: '2024'
      },
    {
      src: './media/bilder/03.untitled-2024 (8).jpg',
      title: 'untitled',
      year: '2024'
    },
    {
      src: './media/bilder/04.identitätsfrage-2024.jpg',
      title: 'identitätsfrage',
      year: '2024'
    },
    {
      src: './media/bilder/05.späher-2024.jpg',
      title: 'späher',
      year: '2024'
    },
    {
      src: './media/bilder/06.untitled-2024 (2).jpg',
      title: 'untitled',
      year: '2024'
    },
    {
      src: './media/bilder/07.inferno-2024.jpg',
      title: 'inferno',
      year: '2024'
    },
    {
      src: './media/bilder/08.untitled-2025.jpg',
      title: 'untitled',
      year: '2025'
    },
    {
      src: './media/bilder/09.untitled-2024 (7).jpg',
      title: 'untitled',
      year: '2024'
    },
    {
      src: './media/bilder/10.untitled-2024 (6).jpg',
      title: 'untitled',
      year: '2024'
    },
    {
      src: './media/bilder/11.20-2023.jpg',
      title: '20',
      year: '2023'
    },
    {
      src: './media/bilder/12.untitled-2024 (5).jpg',
      title: 'untitled',
      year: '2024'
    }
  ];

let currIndex = 0;
let isMovingForward = true; 

//title and year animation

function animateTextChange(element, newText){
    // checks if text is different, only then changes
    if (element.textContent !== newText) {
        if (isMovingForward) {
            element.classList.remove('animated-in-up', 'animated-in-down')
            element.classList.add('animated-out-down')

            setTimeout(()=>{
                element.textContent = newText
                element.classList.remove('animated-out-down')
                element.classList.add('animated-in-down')
            },300)
        } else {
            element.classList.remove('animated-in-up', 'animated-in-down')
            element.classList.add('animated-out-up')

            setTimeout(()=>{
                element.textContent = newText
                element.classList.remove('animated-out-up')
                element.classList.add('animated-in-up')
            },300)
        }
    }
}

// sets current image, title and year - initalizes info width 
function showImage(){
    const currImageEL = document.getElementById('currImage')
    const imageTitle = document.getElementById('title')
    const imageYear = document.getElementById('year')

    const newImage = imageSet[currIndex];
    currImageEL.src = newImage.src

    currImageEL.onload = () => {
        syncInfoWidth();
    };

    animateTextChange(imageTitle, newImage.title)
    animateTextChange(imageYear, newImage.year)
}


// sets new image to next Image and plays forward animation for the text
function nextImage(){
    if(currIndex === imageSet.length - 1){
        currIndex = 0
    } else{
        currIndex++
    }
    isMovingForward = true
    showImage()
}

// sets new image to previous Image and plays forward animation for the text
function previousImage(){
    if(currIndex === 0){
        currIndex = imageSet.length - 1
    } else{
        currIndex--
    }
    isMovingForward = false
    showImage()
}

// triggers functions for next and previous image based on where the cursor is(left side window/right side window)
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


// change Cursor based on which half of the screen the cursor is
function changeCursor(event) {
    const wrapper = document.querySelector('.image__wrapper');
    const cursor = document.getElementById('custom-cursor');
    const cursorX = event.clientX;
    const viewportWidth = window.innerWidth;

    if (wrapper.contains(event.target)) {      
        if (cursorX > viewportWidth / 2) {
            cursor.style.background = "url(./media/cursors/cursor_right_alt.png)";
            cursor.style.backgroundSize = "contain";
        } else {
            cursor.style.background = "url(./media/cursors/cursor_left_alt.png)";
            cursor.style.backgroundSize = "contain";
        }
    } else {
        cursor.style.background = "url(./media/cursors/cursor.png)";
        cursor.style.backgroundSize = "contain";
    }
}

// opens the menu bar
function toggleNavMenu () {
    const nav = document.querySelector('.menu__nav')
    console.log('clicked the button')

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

// info width dynamically changes based on width of Image
function syncInfoWidth() {
    const img = document.getElementById("currImage");
    const info = document.getElementById("imageInfo");

    if (img && info) {
        const imgWidth = img.clientWidth;
        info.style.width = imgWidth + "px";
    }
}

//adjusts info when user resizes the window
window.addEventListener("resize", syncInfoWidth);


document.addEventListener('DOMContentLoaded', () => {
    //loads first image
    const currImageEL = document.getElementById('currImage');
    
    currImageEL.src = imageSet[0].src;
    currImageEL.style.opacity = 1;
    
    document.getElementById('title').textContent = imageSet[0].title;
    document.getElementById('year').textContent = imageSet[0].year;
    
    currImageEL.onload = () => {
        syncInfoWidth();
    };

    // plays loading animation
    const loaderWrapper = document.querySelector('.main__wrapper');

    if (loaderWrapper) {
        loaderWrapper.classList.add('active');

        setTimeout(() => {
        loaderWrapper.classList.remove('active');
        }, 1000);
    }
});

