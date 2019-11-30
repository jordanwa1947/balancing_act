import { transactionsHTML } from './transactions_html.js';

export default class TransactionsPage {

// goal: use inheritance to add mainElement method
  get mainElement () {
    return document.getElementById('main-page-content')
  }

  get transButton () {
    return document.getElementById('new-trans-button');
  }


  insertTransHTML () {
    console.log(mainElement())
    mainElement().innerHTML = transactionsHTML;
    this.transactionForm();
  }

  transactionForm () {
    this.transButton().addEventListener('click', function () {
      const amountField = document.querySelector('.amount-field')
      const msgContainer = document.getElementById('transaction-msg');
      msgContainer.innerHTML = `<p> Your expense of $${amountField.value} has been logged.</p>`
    })
  }
};
