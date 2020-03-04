let navUlElement = document.querySelector('.nav__ul');
let hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click',(e)=>{
	hamburger.classList.toggle('is-active');
	let ulHeight = navUlElement.scrollHeight;
	if(!navUlElement.classList.contains('active-menu')){
		navUlElement.classList.add('active-menu');
		navUlElement.style.height = `${ulHeight}px`;
	}
	else{
		navUlElement.classList.remove('active-menu');
		navUlElement.style.height = `0`;
	}
})








