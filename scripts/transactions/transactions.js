export { transactions };
import { transactionsHtml } from './transactions_html.js';

var transactions = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  var toggleToTransactions = function () {
    transIcon.classList.add('on-page');
    dashboardIcon.classList.remove('on-page');
    mainElement.innerHTML = transactionsHtml;
  }

  function switchToTransactionsOnClick () {
    transIcon.addEventListener('click', toggleToTransactions);
  }

  return {
    switchToTransactionsOnClick: switchToTransactionsOnClick
  };
})();
