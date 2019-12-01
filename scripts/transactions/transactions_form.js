export { transactionsForm }

var transactionsForm = (function () {

  function transactionFormMsg () {
    var transButton = document.getElementById('new-trans-button');
    var msgContainer = document.getElementById('msg-container');
    addNewTransactionListeners(msgContainer, transButton)
  }

  function addNewTransactionListeners (msgContainer, transButton) {
    transButton.addEventListener('click', function () {
      const amountField = document.querySelector('.amount-field');
      checkIfFilledOut (amountField, msgContainer);
    });
  }

  function insertMessage (amountField, msgContainer) {
    msgContainer.innerHTML = `
    <p class="transaction-msg">
      <img id="close-trans-msg" src="assets/images/close.svg"/>
      Your expense of $${amountField.value} has been logged.
    </p>`;
    closeTransMsgOnClick(msgContainer);
  }

  function closeTransMsgOnClick (msgContainer) {
    var closeMessageX = document.getElementById('close-trans-msg');
    closeMessageX.addEventListener('click', function () {
      msgContainer.innerHTML = '';
    })
  }

  function checkIfFilledOut (amountField, msgContainer) {
    var fields = document.querySelectorAll('.new-trans-field');
    var emptyFieldCount = 0
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].value) {
        fields[i].parentElement.classList.remove('required');
      } else {
        fields[i].parentElement.classList.add('required');
        emptyFieldCount++;
      }
    }
    if (emptyFieldCount == 0) insertMessage(amountField, msgContainer);
  }

  return {
    transactionFormMsg: transactionFormMsg,
  }
})();
