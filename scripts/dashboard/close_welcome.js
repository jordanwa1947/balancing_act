export { closeWelcome }

var closeWelcome = (function() {
  // creates a style element, appends it to the head element
  // and inserts rules to the stylesheet so the styles persist
  var makeWelcomeDisappear = function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule( `#welcome-banner { display: none; }`);
    style.sheet.insertRule( `section#account-details-cont { margin: 0px; }`);
    style.sheet.insertRule( `.center-column { margin: 0px 34px 0px 0px; }`);
  }

  function closeWelcomeOnClick () {
    var closeWelcomeX = document.getElementById('close-welcome-x');
    closeWelcomeX.addEventListener('click', makeWelcomeDisappear);
  }

  return {
    closeWelcomeOnClick: closeWelcomeOnClick,
  };
})();
