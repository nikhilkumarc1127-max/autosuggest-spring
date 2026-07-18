//alert('Be aware that THE BATMAN: PART II is coming soon🦇🦇🦇!!');
const toggleCard = document.getElementById('toggle-card');
const toggleText = document.getElementById('toggle-text');
const randomUserToggle = document.getElementById('random-user-toggle');
const bgVideo = document.getElementById('bg-video');
const videoSource = bgVideo?.querySelector('source');

const titles = ['BRUCE WAYNE', 'THE BATMAN', 'THE BATMAN: PART II'];
const videoFiles = ['BruceWayne.mp4', 'TheBatman.mp4', 'video-background.mp4'];
let currentIndex = 0;
let isUserMode = false;

function showTitleCard() {
  isUserMode = false;
  toggleCard.classList.remove('user-card');
  toggleCard.style.backgroundImage = '';
  toggleCard.style.backgroundSize = '';
  toggleCard.style.backgroundPosition = '';
  toggleText.innerHTML = titles[currentIndex];
}

function showUserCard(user) {
  const fullName = `${user.name.first} ${user.name.last}`;
  const gender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
  isUserMode = true;
  toggleCard.classList.add('user-card');
  toggleCard.style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25)), url('${user.picture.large}')`;
  toggleCard.style.backgroundSize = 'cover';
  toggleCard.style.backgroundPosition = 'center';
  toggleText.innerHTML = `${fullName}<br><span class="user-detail">${gender}</span>`;
}

if (toggleCard && toggleText && videoSource && bgVideo) {
  showTitleCard();
  toggleCard.classList.add('fade-in');

  toggleCard.addEventListener('click', () => {
    if (isUserMode) {
      showTitleCard();
    } else {
      currentIndex = (currentIndex + 1) % titles.length;
      toggleText.innerHTML = titles[currentIndex];
      toggleCard.setAttribute('aria-pressed', String(currentIndex !== 0));
      videoSource.src = videoFiles[currentIndex];
      bgVideo.load();
    }
  });

  if (randomUserToggle) {
    randomUserToggle.addEventListener('click', async () => {
      randomUserToggle.setAttribute('aria-pressed', 'true');
      try {
        const response = await fetch('https://randomuser.me/api/?nat=us');
        const data = await response.json();
        const user = data.results?.[0];

        if (user) {
          showUserCard(user);
        }
      } catch (error) {
        console.error('Failed to load random user', error);
      }
    });
  }
}
