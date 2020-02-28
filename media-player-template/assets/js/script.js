let video = document.querySelector('.video-container video');
let playPauseBtn = document.querySelector('.play-pause-btn');
let videoTimeContainerElem = document.querySelector('.video-time-container');
let displayTimeElem = document.querySelector('.display-time');
let volumeControlElem = document.querySelector('.volume-input');
let durationInputElem = document.querySelector('.duration-input');
let time;
let minutes;
let seconds;
let isHold = false;

videoTimeContainerElem.style.width = `${video.offsetWidth}px`;

playPauseBtn.classList.add('video-active');

video.addEventListener('click',()=>{
	handleVideoState();
})

video.addEventListener('mouseenter',()=>{
	if(!video.paused){
		playPauseBtn.classList.add('video-active');
	}
})

video.addEventListener('mouseleave',()=>{
	if(!video.paused){
		playPauseBtn.classList.remove('video-active');
	}
})

video.addEventListener('timeupdate',(e)=>{
	time = Math.floor(video.currentTime);
	minutes = Math.floor(time / 60);
	seconds = Math.floor(time - minutes * 60);

	if(seconds < 10){
		seconds = `0${seconds}`;
	}

	if(minutes < 10){
		minutes = `0${minutes}`;
	}

	displayTimeElem.innerHTML = `${minutes}:${seconds}`;
	
	if(!isHold){
		let currentDuration = (video.currentTime * 100) / video.duration;
		durationInputElem.value = Math.floor(currentDuration);
	}
})

volumeControlElem.addEventListener('input',()=>{
	video.volume = (volumeControlElem.value / 100);
});

durationInputElem.addEventListener('mousedown',(e)=>{
	isHold = true;
});

durationInputElem.addEventListener('mouseup',()=>{
	isHold = false;
})

durationInputElem.addEventListener('input',(e)=>{
	video.currentTime = (video.duration * e.target.value) / 100;
})


window.addEventListener('keydown', logkey);

function logkey(e){
	if(e.keyCode == 32){
		handleVideoState();
	}
}

function handleVideoState(){
		if(video.paused){
			video.play();
			playPauseBtn.innerHTML = "&#10074;&#10074;";
			videoTimeContainerElem.style.width = `${video.offsetWidth}px`;
		}
		else{
			video.pause();
			playPauseBtn.innerHTML = "&#9658;";
		}
}










