
function interSection(div){
	
	let observer = new IntersectionObserver((entries)=>{
		entries.forEach((entry)=>{
			if(entry.isIntersecting){
	
				entry.target.classList.add('show');
				
			}
	
		})
	}, {threshold:.3});
	
	observer.observe(div);
}