import { dashboardHTML } from './dashboard_html.js';

export default class DashboardPage {

  get findMainElement () {
    return document.getElementById('main-page-content')
  }

  insertDashHTML () {
    this.findMainElement().innerHTML = dashboardHTML;
    this.closeWelcome();
  }

  closeWelcome () {
    const closeWelcomeX = document.getElementById('close-welcome-x');
    closeWelcomeX.addEventListener('click', function () {
      const style = document.createElement('style');
      document.head.appendChild(style);
      style.sheet.insertRule( `#welcome-banner { display: none; }`);
      style.sheet.insertRule( `section#account-details-cont { margin: 0px; }`);
      style.sheet.insertRule( `.center-column { margin: 0px 34px 0px 0px; }`);
    });
  }
};
