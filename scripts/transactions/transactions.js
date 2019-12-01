export { transactions };
import { transactionsHtml } from './transactions_html.js';
import { transactionsForm } from './transactions_form.js';

var transactions = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');
  var profileIcon = document.getElementById('profile-icon');

  function initializeTransactions () {
    mainElement.innerHTML = transactionsHtml;
    transactionsForm.transactionFormMsg();
  }

  var toggleToTransactions = function () {
    transIcon.classList.add('on-page');
    dashboardIcon.classList.remove('on-page');
    profileIcon.classList.remove('on-page');
    initializeTransactions();
  }

  function switchToTransactionsOnClick () {
    transIcon.addEventListener('click', toggleToTransactions);
  }

  return {
    switchToTransactionsOnClick: switchToTransactionsOnClick
  };
})();
