export { profile };
import { profileHTML } from './profile_html.js';

var profile = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var profileIcon = document.getElementById('profile-icon');
  var mainElement = document.getElementById('main-page-content');

  function insertProfile () {
    mainElement.innerHTML = profileHTML;
  }

  function switchToProfileOnClick () {
    profileIcon.addEventListener('click', function () {
      profileIcon.classList.add('on-page');
      transIcon.classList.remove('on-page');
      dashboardIcon.classList.remove('on-page');
      insertProfile();
    })
  }

  return {
    switchToProfileOnClick: switchToProfileOnClick
  }
})();
