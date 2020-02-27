let images = [
	`/assets/img/CropCena.png`,
	`/assets/img/download.jpeg`,
	`/assets/img/dwayne eyes.PNG`,
	`/assets/img/FeelsAmazingMan.jpg`,
	`/assets/img/monkaS.jpg`
];

let modalImage = document.querySelector('.overlay-image');
let galleryElem = document.querySelector('.gallery');
let overlayImageIndex = 0;

images.forEach((image, index)=>{
	let img = document.createElement('img');

	img.src = image;
	img.classList.add('modal-images');
	img.dataset.slideId = index;

	galleryElem.appendChild(img);

	img.addEventListener('click',(e)=>{
		document.querySelector('#myModal').style.display = "flex";
		overlayImageIndex = img.dataset.slideId;
		handleOverlayImage()
	
	})
});

let closeOverlayElem = document.querySelector('.close');
closeOverlayElem.addEventListener('click',()=>{
	document.querySelector('#myModal').style.display = "none";
});


let prev = document.querySelector('.prev');
prev.addEventListener('click',()=>{
	overlayImageIndex--;
	if(overlayImageIndex < 0){
		overlayImageIndex = images.length -1;
	}
	handleOverlayImage()
});

let next = document.querySelector('.next');
next.addEventListener('click',()=>{
	overlayImageIndex++;
	if(overlayImageIndex > images.length -1){
		overlayImageIndex = 0;
	}
	handleOverlayImage();
});


function handleOverlayImage(){
	modalImage.src = images[overlayImageIndex];
}

