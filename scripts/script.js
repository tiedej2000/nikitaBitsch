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
    const wrapper = document.querySelector('.image__wrapper')

    if(wrapper.contains(event.target)){
        const cursorX = event.clientX
        const viewportWidth = window.innerWidth
        const html = document.documentElement

        if (cursorX > viewportWidth / 2) {
            html.style.cursor = "url('../media/cursor_right.png') 12 12, auto";
        } else {
            html.style.cursor = "url('../media/cursor_left.png') 12 12, auto";
        }
    } else{
        document.documentElement.style.cursor = "url('../media/cursor.png') 12 12, auto";
    } 
}


showImage()
document.addEventListener('mousemove', changeCursor, changeCursorNav);


