var welcomeBanner = document.getElementById('welcome-banner');
var closeWelcomeX = document.getElementById('close-welcome-x');
var accountDetails = document.getElementById('account-details-cont');
var centerColumn = document.getElementById('center-column');
closeWelcomeX.addEventListener('click', closeWelcome);

function closeWelcome () {
  welcomeBanner.style.display = 'none';
  accountDetails.style.margin = '0px';
  centerColumn.style.margin = '0px 34px 0px 0px';
}
