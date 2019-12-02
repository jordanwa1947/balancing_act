export var profileHTML = `
<div id="center-profile-col" class="center-column">
  <h1 class="profile-title"> Your Profile </h1>
  <section id="account-info">
    <h3> Oscar Holt </h3>
    <p> Denver, CO </p>
    <p> Member Since: 2014 </p>
    <p> Birthday: December 19, 2011 </p>
    <button id="edit-acct-info" class="main-button"> EDIT MY INFO </button>
  </section>
</div>
<div id="profile-left-col" class="right-column">
  <h1 class="profile-title"> Your Accounts </h1>
  <section id="accounts-container">
    <ul id="profile-accts" class="accounts-list">
      <li class="acct-item acct-checking">
        <span>
          <h4 class="acct-title"> Wells Fargo </h4>
        </span>
        <h4 class="acct-type"> Checking </h4>
        <p id="acct-status"> Status:<span class="active-acct">Active</span></p>
        <button class="main-button edit-acct"> EDIT </button>
        <button class="main-button delete-acct"> DELETE </button>
      </li>
      <li class="acct-item acct-saving">
        <span>
          <h4 class="acct-title"> Wells Fargo </h4>
        </span>
        <h4 class="acct-type"> Savings </h4>
        <p id="acct-status"> Status:<span class="active-acct">Active</span></p>
        <button class="main-button edit-acct"> EDIT </button>
        <button class="main-button delete-acct"> DELETE </button>
      </li>
      <li class="acct-item acct-credit">
        <span>
          <h4 class="acct-title"> Amazon Credit </h4>
        </span>
        <h4 class="acct-type"> Credit Card </h4>
        <p id="acct-status"> Status:<span class="active-acct">Active</span></p>
        <button class="main-button edit-acct"> EDIT </button>
        <button class="main-button delete-acct"> DELETE </button>      </li>
      <li class="acct-item acct-credit">
        <span>
          <h4 class="acct-title"> Southwest Credit </h4>
        </span>
        <h4 class="acct-type"> Credit Card </h4>
        <p id="acct-status"> Status:<span class="active-acct">Active</span></p>
        <button class="main-button edit-acct"> EDIT </button>
        <button class="main-button delete-acct"> DELETE </button>
      </li>
    </ul>
  </section>
  <section id="add-account">
    <h3 id="add-acct-title"> Add an Account </h3>
    <fieldset>
      <form id="add-acct-form">
        <span>
          <label for="acct-type"> Type: </label>
          <input id="acct-type" class="add-acct-field">
        </span>
        <span>
          <label for="acct-nickname"> Nickname: </label>
          <input id="acct-nickname" class="add-acct-field">
        </span>
        <span>
          <label for="acct-status"> Status: </label>
          <select id="acct-status" class="add-acct-field">
            <option value="active"> Active </option>
            <option value="inactive"> Inactive </option>
          </select>
        </span>
        <input id="add-acct-button" class="main-button add-acct-field" type="submit" value="ADD ACCOUNT" onclick="return false;">
      </form>
    </fieldset>
  </section>
</div>
`
