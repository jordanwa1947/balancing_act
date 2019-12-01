export var profileHTML = `
<div id="center-column">
  <h1> Your Profile </h1>
  <section id="account-info">
    <h3> Oscar Holt </h3>
    <p> Denver, CO </p>
    <p> Member Since: 2014 </p>
    <p> Birthday: December 19, 2011 </p>
    <button> EDIT MY INFO </button>
  </section>
</div>
<div id="right-column">
  <h1> Your Accounts </h1>
  <section id="accounts-container">
    <table id="accounts">
      <tr>
        <td> Wells Fargo </td>
        <td> Savings </td>
        <td> Status:<span class="active-acct">Active</span></td>
        <td> <button class="main-button edit-acct"> Edit </button> </td>
        <td> <button class="main-button delete-acct"> Delete </button> </td>
      </tr>
      <tr>
        <td> Wells Fargo </td>
        <td> Checking </td>
        <td> Status:<span class="active-acct">Active</span></td>
        <td> <button class="main-button edit-acct"> Edit </button> </td>
        <td> <button class="main-button delete-acct"> Delete </button> </td>
      </tr>
      <tr>
        <td> Amazon Credit </td>
        <td> Credit Card </td>
        <td> Status:<span class="active-acct">Active</span></td>
        <td> <button class="main-button edit-acct"> Edit </button> </td>
        <td> <button class="main-button delete-acct"> Delete </button> </td>
      </tr>
      <tr>
        <td> Southwest Credit </td>
        <td> Credit Card </td>
        <td> Status:<span class="active-acct">Active</span></td>
        <td> <button class="main-button edit-acct"> Edit </button> </td>
        <td> <button class="main-button delete-acct"> Delete </button> </td>
      </tr>
    </table>
  </section>
  <section id="add-account">
    <h2> Add an Acount </h2>
    <fieldset>
      <form>
        <label for="acct-type"> Type: </label>
        <input id="acct-type"> </input>

        <label for="acct-nickname"> Nickname: </label>
        <input id="acct-nickname"> </input>

        <label for="acct-status"> Status: </label>
        <select id="acct-status">
          <option value="active"> Active </option>
          <option value="inactive"> Inactive </option>
        </select>
      </form>
    </fieldset>
  </section>
</div>
`
