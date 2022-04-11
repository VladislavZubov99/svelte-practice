<script>
  export let style
</script>

<button style={style}>
  <slot />
</button>

<style>
   button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 35px;
    cursor: pointer;

     border: none;
     width: 120px;
     background-color: #5458F6;
     color: #fff;
  }

  button:hover {
    opacity: .9;
  }

  button:active {
    opacity: 1;
  }
</style>