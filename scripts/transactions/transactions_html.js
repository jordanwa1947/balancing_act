export var transactionsHtml = `
<header id="transactions-title">
  <h1 id="transactions-title" class="page-title"> Transactions </h1>
  <section id="transaction-options">
    <button class="main-button trans-button sel-trans-type"> ALL </button>
    <button class="main-button trans-button"> INFLOW </button>
    <button class="main-button trans-button"> OUTFLOW </button>
  </section>
</header>
<div id="main-transactions" class="center-column">
  <section id="exp-trans-cont" class="trans-table-cont">
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
  </section>
</div>
<div class="right-column">
  <section class="new-trans-cont">
    <h2 id="new-trans-title" class="section-title"> New Transaction </h2>
    <fieldset>
      <form id="new-trans-form">
        <label for="type-of-trans"> Type of Transaction: </label>
        <select id="type-of-trans" class="new-trans-select">
          <option value="outflow"> Outflow </option>
          <option value="inflow"> Inflow </option>
        </select>

        <label for="category"> Category: </label>
        <select id="category" class="new-trans-select">
          <option value="bills"> Bills </option>
          <option value="grocery"> Grocery </option>
          <option value="fun"> Fun </option>
          <option value="paycheck"> Paycheck </option>
          <option value="gas"> Gas </option>
        </select>

        <label for="account"> Account from: </label>
        <select id="account" class="new-trans-select">
          <option value="checking"> Checking </option>
          <option value="savings"> Savings </option>
          <option value="amazon-credit"> Amazon Credit </option>
          <option value="southwest-credit"> Southwest Credit </option>
        </select>
        <div>
          <label for="payee"> Payee: </label>
          <input id="payee" class="new-trans-field" type="text">
        </div>
        <div>
          <label for="amount"> Amount: </label>
          <input id="amount" class="new-trans-field amount-field" type="text">
        </div>
        <div>
          <label for="memo"> Memo (optional): </label>
          <input id="memo" class="new-trans-field" type="text">
        </div>
        <input id="new-trans-button" class="main-button" type="submit" value="Log Expense" onclick="return false;">
      </form>
    </fieldset>
    <div id="msg-container">
    </div>
  </section>
</div>`
