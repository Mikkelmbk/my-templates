let anchorElems = document.querySelectorAll('.container__a');
anchorElems.forEach((anchorElem) => {
	if (anchorElem.href == window.location.href) {
		anchorElem.classList.add('active-menu');
	}
})
