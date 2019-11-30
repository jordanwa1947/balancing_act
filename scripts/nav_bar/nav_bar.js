import TransactionsPage from '../transactions/transactions_page.js';
import DashboardPage from '../dashboard/dashboard_page.js';

export default class NavBar {
  constructor (mainElement) {
    this.mainElement = mainElement;
    this.transIcon = document.getElementById('trans-icon');
    this.dashIcon = document.getElementById('dashboard-icon');
  }

  switchToDashboard () {
    this.dashIcon.addEventListener('click', function () {
      new DashboardPage(this.mainElement).insertDashHTML();
      this.dashIcon.classList.add('on-page');
      this.transIcon.classList.remove('on-page');
    });
  }

  switchToTransaction () {
    this.transIcon.addEventListener('click', function () {
      const transactions = new TransactionsPage(this.mainElement);
      transactions.insertTransHTML();
      this.transIcon.classList.add('on-page');
      this.dashIcon.classList.remove('on-page');
    });
  }
}
