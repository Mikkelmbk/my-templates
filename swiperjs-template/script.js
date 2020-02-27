
let sliderWrapperElem = document.querySelector('.swiper-wrapper');

let images = [ // This can be replaced by data from an API or elsewhere.
	'img/CropCena.png',
	'img/dwayne nicklas.PNG',
	'img/FeelsAmazingMan.jpg',
	'img/FeelsBadMan.jpg',
	'img/feelstastymannn.jpg',
	'img/profilBillede.jpg'
];

images.forEach((image)=>{
	let imageContainerElem = document.createElement('div');

	imageContainerElem.style.backgroundImage = `url('${image}')`;
	imageContainerElem.classList.add('image-container');
	imageContainerElem.classList.add('swiper-slide');

	sliderWrapperElem.appendChild(imageContainerElem);
})



// sliderWrapperElem.addEventListener('')

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  slidesPerView:2,

  // If we need pagination
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
  },
  autoplay: {
	delay:3000,
	disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  }
})

// https://swiperjs.com/api/#autoplay

