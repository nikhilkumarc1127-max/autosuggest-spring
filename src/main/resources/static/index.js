alert('Be aware that THE BATMAN: PART II is coming soon🦇🦇🦇!!');
const toggleCard = document.getElementById('toggle-card');
const toggleText = document.getElementById('toggle-text');
const bgVideo = document.getElementById('bg-video');
const videoSource = bgVideo?.querySelector('source');

const titles = ['THE BATMAN', 'THE BATMAN: PART II'];
const videoFiles = ['TheBatman.mp4', 'video-background.mp4'];
let currentIndex = 0;

if (toggleCard && toggleText && videoSource && bgVideo) {
  toggleCard.classList.add('fade-in');
  toggleCard.addEventListener('click', () => {
    currentIndex = 1 - currentIndex;
    toggleText.textContent = titles[currentIndex];
    toggleCard.setAttribute('aria-pressed', String(currentIndex === 1));
    videoSource.src = videoFiles[currentIndex];
    bgVideo.load();
  });
}
