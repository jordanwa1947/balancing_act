export { switchToTransactions }

var switchToTransactions = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  var transactionsHtml = `
  <header>
    <h1 class="page-title"> Transactions </h1>
    <button class="main-button"> ALL </button>
    <button class="main-button"> INFLOW </button>
    <button class="main-button"> OUTFLOW </button>
  </header>
  <div class="center-column">
    <section class="trans-table-cont">
      <table class="expanded-transactions-table">
        <tr>
          <th>Date</th>
          <th>Account</th>
          <th>Payee</th>
          <th>Inflow</th>
          <th>Outflow</th>
        </tr>
        <tr>
          <td class="trans-date">10-25-19</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Target</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$82.35</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">10-22-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Paycheck</td>
          <td class="trans-inflow">$1,319.12</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">10-21-19</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Trader Joe's</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$54.92</td>
        </tr>
        <tr>
          <td class="trans-date">10-20-19</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Shell</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$46.23</td>
        </tr>
        <tr>
          <td class="trans-date">10-19-19</td>
          <td class="trans-acct">Savings</td>
          <td class="trans-payee">Rent</td>
          <td class="trans-inflow">$800.00</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">10-19-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Hapa Sushi</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$13.97</td>
        </tr>
        <tr>
          <td class="trans-date">10-18-19</td>
          <td class="trans-acct">Credit Card</td>
          <td class="trans-payee">Pig Train</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$4.83</td>
        </tr>
        <tr>
          <td class="trans-date">10-18-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">RTD</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$6.00</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
          <td class="trans-acct">Checking</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">10-24-19</td>
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
