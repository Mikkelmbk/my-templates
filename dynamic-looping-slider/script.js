let images = [ // This can be replaced by data from an API or elsewhere.
    'img/CropCena.png',
    'img/dwayne nicklas.PNG',
    'img/FeelsAmazingMan.jpg',
    'img/FeelsBadMan.jpg',
    'img/feelstastymannn.jpg',
    'img/profilBillede.jpg'
];
let sliderWrapperElem = document.querySelector('.slider-wrapper'); // wrapper with overflow:hidden.
let sliderContainerElem = document.querySelector('.slider-container'); // sliderContainer receiving it's width from sliderWrapperElem's width divided by number of displayed slides, timed by length of images array.
let displayedSlides = 3; // change this number to adjust how many slides are being displayed at one time, The slideshow will automatically adjust the slide length.
let slideshowInterval;

// sliderContainerElem.style.transform = `translateX(${-(sliderWrapperElem.offsetWidth / displayedSlides)}px)`

images.forEach((image) => {
    let imageContainerElem = document.createElement('div');

    imageContainerElem.style.backgroundImage = `url('${image}')`;
    imageContainerElem.style.width = `${sliderWrapperElem.offsetWidth / displayedSlides}px`;
    imageContainerElem.classList.add('image-container');

    sliderContainerElem.appendChild(imageContainerElem);
});

sliderContainerElem.style.width = `${(sliderWrapperElem.offsetWidth / displayedSlides) * images.length}px`; // sliderwrapper width, divided by number of images i want displayed at one time, timed with the amount of images in total.

initSlideshow();


sliderContainerElem.addEventListener('transitionend', () => {

        
        sliderContainerElem.style.transition = "unset"; // unsets the transition before reverting the Marginleft to 0 on the sliderContainerElem.
        
        if (sliderContainerElem.childNodes[0].nodeName == "#text") { // checks if the first child element is of type "#text" if so removes it entirely.
        sliderContainerElem.removeChild(sliderContainerElem.childNodes[0]);
        let firstChild = sliderContainerElem.removeChild(sliderContainerElem.childNodes[0]); // removes the first childNode and stores it in firstChild.
        sliderContainerElem.insertAdjacentElement('beforeend', firstChild); // insert the childNode stored in firstChild at the very end of the nodelist (sliderContainerElem).
        sliderContainerElem.style.marginLeft = `0px`;
        return;
    }
    
    let firstChild = sliderContainerElem.removeChild(sliderContainerElem.childNodes[0]);
    sliderContainerElem.insertAdjacentElement('beforeend', firstChild);
    sliderContainerElem.style.marginLeft = `0px`;
});

function initSlideshow() {
    slideshowInterval = setInterval(() => {
        sliderContainerElem.style.transition = "all .5s ease-in-out"; // adds transition to sliderContainerElem every interval because we are removing it in the transitionend eventlistener to not make the slideshow transition when we revert the marginLeft.
        sliderContainerElem.style.marginLeft = `${-(sliderWrapperElem.offsetWidth / displayedSlides)}px`;
    }, 2000)
}



