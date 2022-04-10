<script>
  import UserList from "./components/UserList.svelte";

</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</svelte:head>

<div class="main-container">
  <div class="columns">
    <UserList/>
  </div>
</div>

<style>

  :global(body) {
    font-family: 'Roboto', serif;
    overflow-x: hidden;
  }

  .main-container {
    background-color: #EFF2FA;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .columns {
    box-sizing: border-box;
    column-width: 350px;
    column-gap: 20px;
    width: 80%;
    padding: 50px 20px;
    margin: 0 auto;
  }
</style>