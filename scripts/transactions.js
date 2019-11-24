export { transactions }

var transactions = (function () {
  var dashboardIcon = document.getElementById('dashboard-icon');
  var transIcon = document.getElementById('trans-icon');
  var mainElement = document.getElementById('main-page-content');

  var toggleToTransactions = function () {
    transIcon.classList.add('on-page');
    dashboardIcon.classList.remove('on-page');
    mainElement.innerHTML = `<h1> Hello World </h1>`
  }

  function switchToTransactionsOnClick () {
    transIcon.addEventListener('click', toggleToTransactions);
  }

  return {
    switchToTransactionsOnClick: switchToTransactionsOnClick
  }
})();
