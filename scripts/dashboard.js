export { dashboard }
// modules only execute once
var dashboard = (function() {
  var welcomeBanner = document.getElementById('welcome-banner');
  var closeWelcomeX = document.getElementById('close-welcome-x');
  var accountDetails = document.getElementById('account-details-cont');
  var centerColumn = document.getElementById('center-column');

  var makeWelcomeDisappear = function () {
    welcomeBanner.style.display = 'none';
    accountDetails.style.margin = '0px';
    centerColumn.style.margin = '0px 34px 0px 0px';
  }

  function closeWelcomeOnClick () {
    closeWelcomeX.addEventListener('click', makeWelcomeDisappear);
  }

  var dashboardHTML = `<h1 id="balancing-act-title"> Balancing Act </h1>
  <div id="center-column">
    <header id="welcome-banner">
      <img id="close-welcome-x" src="assets/images/close.svg" />
      <h3 id="welcome-title"> Welcome, Oscar! </h3>
    </header>
    <section id="account-details-cont">
      <span id="acct-income" class="acct-detail">
        <h5 class="acct-detail-title"> INCOME </h5>
        <p class="acct-detail-val"> $2,119.12 </p>
      </span>
      <span id="acct-expenses" class="acct-detail">
        <h5 class="acct-detail-title"> EXPENSES </h5>
        <p class="acct-detail-val"> $420.54 </p>
      </span>
      <span id="credit-score" class="acct-detail">
        <h5 class="acct-detail-title"> CREDIT SCORE </h5>
        <p class="acct-detail-val"> 673 </p>
      </span>
    </section>
    <h2 id="accounts-title"> Accounts </h2>
    <button id="accounts-button" class="main-button"> MANAGE ACCOUNTS </button>
    <ul id="accounts-list">
      <li class="acct-item acct-checking">
        <img class="checking-icon account-icon" src="assets/images/checking.svg" />
        <h4 class="acct-title"> Wells Fargo </h4>
        <span class="float-right">
          <h4 class="acct-type"> Checking </h4>
        </span>
      </li>
      <li class="acct-item acct-saving">
        <img class="saving-icon account-icon" src="assets/images/savings.svg" />
        <h4 class="acct-title"> Wells Fargo </h4>
        <span class="float-right">
          <h4 class="acct-type"> Savings </h4>
        </span>
      </li>
      <li class="acct-item acct-credit">
        <img class="credit-icon account-icon" src="assets/images/credit-card.svg" />
        <h4 class="acct-title"> Amazon Credit </h4>
        <span class="float-right">
          <h4 class="acct-type"> Credit Card </h4>
        </span>
      </li>
      <li class="acct-item acct-credit">
        <img class="credit-icon account-icon" src="assets/images/credit-card.svg" />
        <h4 class="acct-title"> Southwest Credit </h4>
        <span class="float-right">
          <h4 class="acct-type"> Credit Card </h4>
        </span>
      </li>
    </ul>
  </div>
  <div id="right-column">
    <section id="trans-table-cont">
      <section>
        <h2 id="recent-trans-title"> Recent Transactions </h2>
        <button id="new-trans-button" class="main-button"> NEW TRANSACTION </button>
      </section>
      <table id="transactions-table">
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Inflow</th>
          <th>Outflow</th>
        </tr>
        <tr>
          <td class="trans-date">Oct 25, 2019</td>
          <td class="trans-payee">Target</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$82.35</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 24, 2019</td>
          <td class="trans-payee">Express</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$212.24</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 22, 2019</td>
          <td class="trans-payee">Paycheck</td>
          <td class="trans-inflow">$1,319.12</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 21, 2019</td>
          <td class="trans-payee">Trader Joe's</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$54.92</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 20, 2019</td>
          <td class="trans-payee">Shell</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$46.23</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 19, 2019</td>
          <td class="trans-payee">Rent</td>
          <td class="trans-inflow">$800.00</td>
          <td class="trans-outflow">-</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 19, 2019</td>
          <td class="trans-payee">Hapa Sushi</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$13.97</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 18, 2019</td>
          <td class="trans-payee">Pig Train</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$4.83</td>
        </tr>
        <tr>
          <td class="trans-date">Oct 18, 2019</td>
          <td class="trans-payee">RTD</td>
          <td class="trans-inflow">-</td>
          <td class="trans-outflow">$6.00</td>
        </tr>
      </table>
    </section>
  </div>`

  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  var toggleOnPageClass = function () {
    dashboardIcon.classList.add('on-page');
    transIcon.classList.remove('on-page');
    mainElement.innerHTML = dashboardHTML;
  }

  function switchToDashboardOnClick () {
    dashboardIcon.addEventListener('click', toggleOnPageClass);
  }

  return {
    closeWelcomeOnClick: closeWelcomeOnClick,
    switchToDashboardOnClick: switchToDashboardOnClick
  };

})();
