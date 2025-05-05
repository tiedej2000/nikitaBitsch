document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let imageSet = [
    {
      src: './media/1.jpg',
      title: 'untitled1',
      year: '2010'
    },
    {
      src: './media/2.jpg',
      title: 'untitled2',
      year: '2011'
    },
    {
      src: './media/3.jpg',
      title: 'untitled3',
      year: '2012'
    },
    {
      src: './media/4.jpg',
      title: 'untitled4',
      year: '2013'
    },
    {
      src: './media/5.jpg',
      title: 'untitled5',
      year: '2014'
    },
    {
      src: './media/6.jpg',
      title: 'untitled6',
      year: '2015'
    },
    {
      src: './media/7.jpg',
      title: 'untitled7',
      year: '2017'
    }
  ];

let currIndex = 0;

function showImage(){
    const imageDisplay = document.querySelector('.image__display img')
    const imageTitle = document.getElementById('title')
    const imageYear = document.getElementById('year')

    const currentImage = imageSet[currIndex]

    imageDisplay.src = currentImage.src
    imageTitle.textContent = currentImage.title
    imageYear.textContent = currentImage.year
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

