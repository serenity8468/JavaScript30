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
	// console.log(icon);
	toggle.textContent = icon;
}

function skip() {
	// console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value; // volume or playBackRate
	// console.log('value', this.value);
	// console.log('name', this.name);
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	console.log(e);
}

/* Hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress); // check when the video is updating it's time code

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range =>
	range.addEventListener('change', handleRangeUpdate)
);

ranges.forEach(range =>
	range.addEventListener('mousemove', handleRangeUpdate)
);

progress.addEventListener('click', scrub);
