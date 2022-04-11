<script>
  import FilterItem from "./FilterItem.svelte";
  import Button from "../Button.svelte";
</script>

<div class="main-container">
  <div class="header">
    <div class="title">
      Filters
    </div>
    <button class="close">X</button>

  </div>
  <div class="content">
    <FilterItem
      title="Price"
      to={250}
      multiple={true}
      sign="$"
    />
    <FilterItem
      title="Distance"
      to={25}
      sign="km"
    />
    <div class="title">
      Accomodation
    </div>
    <div class="group">
      <div>
        <input id="apartment" type="checkbox" class="toggle-button">
        <label for="apartment">
          Apartment
        </label>
      </div>
      <div>
        <input id="hotel" type="checkbox" class="toggle-button">
        <label for="hotel">
          Hotel
        </label>
      </div>
      <div>
        <input id="studio" type="checkbox" class="toggle-button">
        <label for="studio">
          Studio
        </label>
      </div>
    </div>
    <div class="apply-container">
      <Button style="flex: 1;">Apply</Button>
    </div>
  </div>

</div>

<style>
  .main-container {
    position: relative;
    width: 310px;
    margin-bottom: 50px;
    display: inline-block;
    border-radius: 20px;
    background-color: #fff;
    height: 350px;
    padding: 20px;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .title {
    font-size: x-large;
    font-weight: bold;
  }

  .close {
    font-size: x-small;
    border-radius: 10em;
    border: none;
    color: #888;
    font-family: "Cantarell Thin", serif;
    padding: 5px 8px;
  }

  .close:hover {
    opacity: .7;
  }

  .close:active {
    opacity: 1;
  }

  .content .title {
    font-size: large;
    margin: 40px 0 10px;
  }

  .group {
    display: flex;
    justify-content: space-between;
  }

  .group input {
    display: none;
  }

  .group label {
    display: inline-block;
    padding: 8px 20px;
    border: 1px solid #eee;
    border-radius: 10em;
    cursor: pointer;
  }

  .group input:checked ~ label {
    border: 2px solid #4a40d4;
    padding: 7px 19px;
  }

  .apply-container {
    margin-top: 15px;
    display: flex;
  }
</style>