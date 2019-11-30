export { dashboard };
import { closeWelcome } from './close_welcome.js';
import { dashboardHTML } from './dash_html.js';
// modules only execute once
var dashboard = (function() {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  function initializeDashboard () {
    mainElement.innerHTML = dashboardHTML;
    closeWelcome.closeWelcomeOnClick();
    switchToDashboardOnClick();
  }

  function switchToDashboardOnClick () {
    dashboardIcon.addEventListener('click', function () {
      dashboardIcon.classList.add('on-page');
      transIcon.classList.remove('on-page');
      initializeDashboard();
    });
  }

  return {
    switchToDashboardOnClick: switchToDashboardOnClick,
    initializeDashboard: initializeDashboard
  };
})();
