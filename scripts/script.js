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
const imageSets = {
    standard: [
        {
        src: './media/bilder/01.untitled-2024 (4).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 01'
    },
    {
        src: './media/bilder/02.untitled-2024 (3).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 02'
    },
    {
        src: './media/bilder/03.untitled-2024 (8).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 03'
    },
    {
        src: './media/bilder/04.identitätsfrage-2024.jpg',
        title: 'identitätsfrage',
        year: '2024',
        alt: 'identitätsfrage 2024 image 04'
    },
    {
        src: './media/bilder/05.späher-2024.jpg',
        title: 'späher',
        year: '2024',
        alt: 'späher 2024 image 05'
    },
    {
        src: './media/bilder/06.untitled-2024 (2).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 06'
    },
    {
        src: './media/bilder/07.inferno-2024.jpg',
        title: 'inferno',
        year: '2024',
        alt: 'inferno 2024 image 07'
    },
    {
        src: './media/bilder/08.untitled-2025.jpg',
        title: 'untitled',
        year: '2025',
        alt: 'untitled 2025 image 08'
    },
    {
        src: './media/bilder/09.untitled-2024 (7).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 09'
    },
    {
        src: './media/bilder/10.untitled-2024 (6).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 10'
    },
    {
        src: './media/bilder/11.20-2023.jpg',
        title: '20',
        year: '2023',
        alt: '20 2023 image 11'
    },
    {
        src: './media/bilder/12.untitled-2024 (5).jpg',
        title: 'untitled',
        year: '2024',
        alt: 'untitled 2024 image 12'
    }
    ],
    MFIRITS: [
    {
        src: './pages/media/MFIRITS/01.jpg',
        title: '01',
        year: '/42',
        alt: 'MFIRITS image 01'
    },
    {
        src: './pages/media/MFIRITS/02.jpg',
        title: '02',
        year: '/42',
        alt: 'MFIRITS image 02'
    },
    {
        src: './pages/media/MFIRITS/03.jpg',
        title: '03',
        year: '/42',
        alt: 'MFIRITS image 03'
    },
    {
        src: './pages/media/MFIRITS/04.jpg',
        title: '04',
        year: '/42',
        alt: 'MFIRITS image 04'
    },
    {
        src: './pages/media/MFIRITS/05.jpg',
        title: '05',
        year: '/42',
        alt: 'MFIRITS image 05'
    },
    {
        src: './pages/media/MFIRITS/06.jpg',
        title: '06',
        year: '/42',
        alt: 'MFIRITS image 06'
    },
    {
        src: './pages/media/MFIRITS/07.jpg',
        title: '07',
        year: '/42',
        alt: 'MFIRITS image 07'
    },
    {
        src: './pages/media/MFIRITS/08.jpg',
        title: '08',
        year: '/42',
        alt: 'MFIRITS image 08'
    },
    {
        src: './pages/media/MFIRITS/09.jpg',
        title: '09',
        year: '/42',
        alt: 'MFIRITS image 09'
    },
    {
        src: './pages/media/MFIRITS/10.jpg',
        title: '10',
        year: '/42',
        alt: 'MFIRITS image 10'
    },
    {
        src: './pages/media/MFIRITS/11.jpg',
        title: '11',
        year: '/42',
        alt: 'MFIRITS image 11'
    },
    {
        src: './pages/media/MFIRITS/12.jpg',
        title: '12',
        year: '/42',
        alt: 'MFIRITS image 12'
    },
    {
        src: './pages/media/MFIRITS/13.jpg',
        title: '13',
        year: '/42',
        alt: 'MFIRITS image 13'
    },
    {
        src: './pages/media/MFIRITS/14.jpg',
        title: '14',
        year: '/42',
        alt: 'MFIRITS image 14'
    },
    {
        src: './pages/media/MFIRITS/15.jpg',
        title: '15',
        year: '/42',
        alt: 'MFIRITS image 15'
    },
    {
        src: './pages/media/MFIRITS/16.jpg',
        title: '16',
        year: '/42',
        alt: 'MFIRITS image 16'
    },
    {
        src: './pages/media/MFIRITS/17.jpg',
        title: '17',
        year: '/42',
        alt: 'MFIRITS image 17'
    },
    {
        src: './pages/media/MFIRITS/18.jpg',
        title: '18',
        year: '/42',
        alt: 'MFIRITS image 18'
    },
    {
        src: './pages/media/MFIRITS/19.jpg',
        title: '19',
        year: '/42',
        alt: 'MFIRITS image 19'
    },
    {
        src: './pages/media/MFIRITS/20.jpg',
        title: '20',
        year: '/42',
        alt: 'MFIRITS image 20'
    },
    {
        src: './pages/media/MFIRITS/21.jpg',
        title: '21',
        year: '/42',
        alt: 'MFIRITS image 21'
    },
    {
        src: './pages/media/MFIRITS/22.jpg',
        title: '22',
        year: '/42',
        alt: 'MFIRITS image 22'
    },
    {
        src: './pages/media/MFIRITS/23.jpg',
        title: '23',
        year: '/42',
        alt: 'MFIRITS image 23'
    },
    {
        src: './pages/media/MFIRITS/24.jpg',
        title: '24',
        year: '/42',
        alt: 'MFIRITS image 24'
    },
    {
        src: './pages/media/MFIRITS/25.jpg',
        title: '25',
        year: '/42',
        alt: 'MFIRITS image 25'
    },
    {
        src: './pages/media/MFIRITS/26.jpg',
        title: '26',
        year: '/42',
        alt: 'MFIRITS image 26'
    },
    {
        src: './pages/media/MFIRITS/27.jpg',
        title: '27',
        year: '/42',
        alt: 'MFIRITS image 27'
    },
    {
        src: './pages/media/MFIRITS/28.jpg',
        title: '28',
        year: '/42',
        alt: 'MFIRITS image 28'
    },
    {
        src: './pages/media/MFIRITS/29.jpg',
        title: '29',
        year: '/42',
        alt: 'MFIRITS image 29'
    },
    {
        src: './pages/media/MFIRITS/30.jpg',
        title: '30',
        year: '/42',
        alt: 'MFIRITS image 30'
    },
    {
        src: './pages/media/MFIRITS/31.jpg',
        title: '31',
        year: '/42',
        alt: 'MFIRITS image 31'
    },
    {
        src: './pages/media/MFIRITS/32.jpg',
        title: '32',
        year: '/42',
        alt: 'MFIRITS image 32'
    },
    {
        src: './pages/media/MFIRITS/33.jpg',
        title: '33',
        year: '/42',
        alt: 'MFIRITS image 33'
    },
    {
        src: './pages/media/MFIRITS/34.jpg',
        title: '34',
        year: '/42',
        alt: 'MFIRITS image 34'
    },
    {
        src: './pages/media/MFIRITS/35.jpg',
        title: '35',
        year: '/42',
        alt: 'MFIRITS image 35'
    },
    {
        src: './pages/media/MFIRITS/36.jpg',
        title: '36',
        year: '/42',
        alt: 'MFIRITS image 36'
    },
    {
        src: './pages/media/MFIRITS/37.jpg',
        title: '37',
        year: '/42',
        alt: 'MFIRITS image 37'
    },
    {
        src: './pages/media/MFIRITS/38.jpg',
        title: '38',
        year: '/42',
        alt: 'MFIRITS image 38'
    },
    {
        src: './pages/media/MFIRITS/39.jpg',
        title: '39',
        year: '/42',
        alt: 'MFIRITS image 39'
    },
    {
        src: './pages/media/MFIRITS/40.jpg',
        title: '40',
        year: '/42',
        alt: 'MFIRITS image 40'
    },
    {
        src: './pages/media/MFIRITS/41.jpg',
        title: '41',
        year: '/42',
        alt: 'MFIRITS image 41'
    },
    {
        src: './pages/media/MFIRITS/42.jpg',
        title: '42',
        year: '/42',
        alt: 'MFIRITS image 42'
    }
    ]
};

// Function to get the current image set name from localStorage, default to 'standard'
function getCurrentImageSetName() {
    let setName = localStorage.getItem('imageSet');
    if (!setName || !imageSets[setName]) {
        setName = 'standard';
        localStorage.setItem('imageSet', setName);
    }
    return setName;
}

// Function to get the current image set array
function getCurrentImageSet() {
    return imageSets[getCurrentImageSetName()];
}

// Function to change the image set and reload
function checkProject(setName) {
    if (imageSets[setName]) {
        localStorage.setItem('imageSet', setName);
    } else {
        console.warn('Image set not found:', setName);
    }
}

let currIndex = 0;
let isMovingForward = true;
let imageSet = getCurrentImageSet();

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

// Helper to update 'projects' class on #imageInfo
function updateImageInfoClass() {
    const imageInfo = document.getElementById('imageInfo');
    if (!imageInfo) return;
    const setName = getCurrentImageSetName();
    if (setName !== 'standard') {
        imageInfo.classList.add('projects');
    } else {
        imageInfo.classList.remove('projects');
    }
}

// sets current image, title and year - initalizes info width 
function showImage(){
    const currImageEL = document.getElementById('currImage')
    const imageTitle = document.getElementById('title')
    const imageYear = document.getElementById('year')
    const imageInfo = document.getElementById('imageInfo');

    const newImage = imageSet[currIndex];
    currImageEL.src = newImage.src
    currImageEL.alt = newImage.alt

    // Update 'projects' class
    updateImageInfoClass();

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
    const image = document.querySelector('.image__display img')
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




// change Cursor based on which half of the screen the cursor is // test
function changeCursor(event) {
    const wrapper = document.querySelector('.image__wrapper');
    const cursor = document.getElementById('custom-cursor');
    const cursorX = event.clientX;
    const viewportWidth = window.innerWidth;

    if (wrapper.contains(event.target)) {      
        if (cursorX > viewportWidth / 2) {
            cursor.style.background = "url(./media/cursors/cursor_right.svg)";
            cursor.style.backgroundSize = "contain";
        } else {
            cursor.style.background = "url(./media/cursors/cursor_left.svg)";
            cursor.style.backgroundSize = "contain";
        }
    } else {
        cursor.style.background = "url(./media/cursors/cursor.svg)";
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
    imageSet = getCurrentImageSet(); // Ensure imageSet is up to date
    const currImageEL = document.getElementById('currImage');
    currImageEL.src = imageSet[0].src;
    currImageEL.style.opacity = 1;
    document.getElementById('title').textContent = imageSet[0].title;
    document.getElementById('year').textContent = imageSet[0].year;
    currImageEL.onload = () => {
        syncInfoWidth();
    };

    // Set 'projects' class before showing image
    updateImageInfoClass();

    // plays loading animation
    const loaderWrapper = document.querySelector('.main__wrapper');
    const image = document.querySelector('.image__display img')

    if (loaderWrapper) {
        loaderWrapper.classList.add('active');
        setTimeout(()=>{
            image.classList.add('active')
        },200)

        setTimeout(() => {
            loaderWrapper.classList.remove('active');
        }, 1000);

        setTimeout(()=>{
             image.classList.remove('active')
        },1150)
    }

    // info card for mobile

    const infoCard = document.querySelector('.info__mobile')

    setTimeout(()=>{
        infoCard.classList.add('active')
    },1500)

    setTimeout(()=>{
        infoCard.classList.remove('active')
    },5000)

});
