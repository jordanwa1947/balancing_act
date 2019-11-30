import NavBar from './scripts/nav_bar/nav_bar.js';
import DashboardPage from './scripts/dashboard/dashboard_page.js';

const mainElement = document.getElementById('main-page-content');
const navBar = new NavBar(mainElement);
const dash = new DashboardPage(mainElement);

document.onload = dash.insertDashHTML();
document.onload = navBar.switchToDashboard();
document.onload = navBar.switchToTransaction();
