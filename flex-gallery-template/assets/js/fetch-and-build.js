let galleryContainerElem = document.querySelector('.gallery');


async function fetchAsset(id) {

	try {
		let res = await fetch(`http://localhost:4000/assets/${id}`)
		let asset = await res.json();
		return asset;
	} catch (error) {
		console.log('error: ', error);
	}
}

async function fetchGalleryPhotos() {
	try {
		let res = await fetch(`http://localhost:4000/gallery-photos`);
		let images = await res.json();
		images.forEach(extractImageInfo);
	} catch (error) {
		console.log('error: ', error);

	}
}


async function extractImageInfo(image){
	try {
		let asset = await fetchAsset(image.asset);
		buildImage(asset.url);
	} catch (error) {
		console.log('error: ', error);
		
	}
}


function buildImage(url) {

	let img = new Image();
	let div = document.createElement('div');

	img.onload = function(){
		img.setAttribute('width', img.width);
		img.setAttribute('height', img.height);
		div.style.height = img.height;
		div.style.width = img.width;


	}

	interSection(div);
	img.src = url;
	galleryContainerElem.appendChild(div);
	div.appendChild(img);
}


fetchGalleryPhotos();