var welcomeBanner = document.getElementById('welcome-banner');
var closeWelcomeX = document.getElementById('close-welcome-x');
closeWelcomeX.addEventListener('click', closeWelcome);

function closeWelcome () {
  welcomeBanner.style.display = 'none';
}
