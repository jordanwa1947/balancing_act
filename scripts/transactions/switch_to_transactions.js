export { switchToTransactions }

var switchToTransactions = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  var transactionsHtml = `
  <h1 class="page-title"> Transactions </h1>
  <div class="center-column">
    <section class="trans-table-cont">
      <table id="transactions-table">
        <tr>
          <th>Date</th>
          <th>Account</th>
          <th>Payee</th>
          <th>Inflow</th>
          <th>Outflow</th>
        </tr>
        <tr>
          <td class="trans-date">Oct 25, 2019</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Target</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$82.35</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 22, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Paycheck</td>
          <td class="trans-inflow">$1,319.12</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 21, 2019</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Trader Joe's</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$54.92</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 20, 2019</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Shell</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$46.23</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 19, 2019</td>
          <td class="trans-acct">Savings</td>
          <td class="trans-payee">Rent</td>
          <td class="trans-inflow">$800.00</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 19, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Hapa Sushi</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$13.97</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 18, 2019</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Pig Train</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$4.83</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 18, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">RTD</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$6.00</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
      </table>
    <section>
  <div>`

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
  }
})();
