let liCloneNode = document.querySelector('.clonenode');
let containerElem = document.querySelector('.container__ul');

let array = ["Simple","Clonenode","Template","Example"];

array.forEach((item)=>{
	let clone = liCloneNode.cloneNode(true);
	clone.classList.remove('hidden');
	let ptag = clone.querySelector('p');
	ptag.textContent = item;
	containerElem.appendChild(clone);
})