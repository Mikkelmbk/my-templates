let images = [
	`/assets/img/CropCena.png`,
	`/assets/img/download.jpeg`,
	`/assets/img/dwayne eyes.PNG`,
	`/assets/img/FeelsAmazingMan.jpg`,
	`/assets/img/monkaS.jpg`
];

let galleryElem = document.querySelector('.gallery');
let overlayImageIndex = 0; // This is the number that will be used as "index" of the images array, Example: images[overlayImageIndex];

images.forEach((image, index)=>{
	let img = document.createElement('img');
	
	img.src = image;
	img.classList.add('modal-images');
	img.dataset.slideId = index;
	
	galleryElem.appendChild(img);
	
	img.addEventListener('click',(e)=>{
		document.querySelector('#myModal').style.display = "flex";
		overlayImageIndex = img.dataset.slideId; // Set overlayImageIndex to be the dataset that the image you clicked has.
		handleOverlayImage()
		
	})
});

let closeOverlayElem = document.querySelector('.close');
closeOverlayElem.addEventListener('click',()=>{
	document.querySelector('#myModal').style.display = "none";
});


let prev = document.querySelector('.prev');
prev.addEventListener('click',()=>{
	overlayImageIndex--; // subtract 1 from overlayImageIndex
	if(overlayImageIndex < 0){ // If overlayImageIndex is less than 0
		overlayImageIndex = images.length -1; // set overlayImageIndex to be the length of the images Array, minus 1.
	}
	handleOverlayImage()
});

let next = document.querySelector('.next');
next.addEventListener('click',()=>{
	overlayImageIndex++; // add 1 to overlayImageIndex
	if(overlayImageIndex > images.length -1){ // If overlayImageIndex is greater than the length of the images array minus 1
		overlayImageIndex = 0; // set overlayImageIndex to 0.
	}
	handleOverlayImage();
});


let modalImage = document.querySelector('.overlay-image');
function handleOverlayImage(){
	modalImage.src = images[overlayImageIndex]; // Set the modalImage's src to be images[overlayImageIndex];
}

