let video = document.querySelector('.video-container video');

let playPauseBtn = document.querySelector('.play-pause-btn');

playPauseBtn.addEventListener('click',()=>{
	if(video.paused){
		video.play();
		playPauseBtn.innerHTML = "&#10074;&#10074;";
		playPauseBtn.style.opacity = 0;
	}
	else{
		video.pause();
		playPauseBtn.innerHTML = "&#9658;";
		playPauseBtn.style.opacity = 1;
	}

})

video.addEventListener('mouseenter',()=>{
	if(!video.paused){
		playPauseBtn.style.opacity = 1;
	}
})
video.addEventListener('mouseleave',()=>{
	if(!video.paused){
		playPauseBtn.style.opacity = 0;
	}
})