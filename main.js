import { dashboard } from './scripts/dashboard.js';

var dashboardIcon = document.getElementById('dashboard-icon');
var transIcon = document.getElementById('trans-icon');
transIcon.addEventListener('click', toggleTransactions);

dashboard.closeWelcomeOnClick();

function toggleTransactions () {
  transIcon.classList.add('on-page');
  dashboardIcon.classList.remove('on-page');
}
