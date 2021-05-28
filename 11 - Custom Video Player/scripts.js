/* Get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build functions */
function togglePlay() {
	// no playing property. only pause prop on video
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}

	// another way to write
	// const method = video.paused ? 'play' : 'pause'
	// video[method]()
}

function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	console.log(icon);
	toggle.textContent = icon;
}

/* Hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
