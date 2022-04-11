<script>
  import RangeSlider from "svelte-range-slider-pips";
  export let title, sign, multiple, to

  let values = multiple ? [50, 125] : [7];
</script>

<div class="filter-container">
  <div class="description">
    <div class="title">{title}</div>
    <div class="range-description">{multiple ? `${sign}${values[0]}-${sign}${values[1]}`: `${values[0]}${sign}`}</div>
  </div>
  <div class="range">
    <RangeSlider
      id="slider"
      bind:values={values}
      min={0}
      max={to}
      range={multiple ? multiple : 'min'}
      pushy={multiple}
    />
  </div>
</div>

<style>
  :global(#slider.rangeSlider) {
    font-size: 5px;
  }

  :global(#slider.rangeSlider .rangeBar) {
    background-color: #4a40d4;
  }
  :global(#slider.rangeSlider .rangeHandle ) {
    font-size: 10px;
  }

  :global(#slider.rangeSlider .rangeHandle .rangeNub) {
    background-color: #4a40d4;
  }
  :global(#slider.rangeSlider.hoverable:not(.disabled) .rangeHandle:before) {
    box-shadow: 0 0 0 5px #4a40d4;
    opacity: 0.2;
  }
  :global(#slider.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before),
  :global(#slider.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before) {
    box-shadow: 0 0 0 8px #4a40d4;
    opacity: 0.4;
  }

  :global(#slider.rangeSlider.range:not(.min):not(.max) .rangeNub ) {
    border-radius: 10em;
  }
    :global(#slider.rangeSlider.range .rangeNub) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  :global(#slider.rangeSlider.range .rangeNub:before ) {
    /*position: absolute;*/
    content: '';
    width: 75%;
    height: 75%;
    background-color: #fff;
    border-radius: 10em;
    /*transform: translateX(50%) translateY(50%);*/
    /*top: -50%;*/
    /*left: -50%;*/
  }
.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.range {
  margin-bottom: 20px;
}

.title {
  font-weight: bold;
  font-size: larger;
}

.range-description {
  color: #ccc;
  font-size: 12px;
  font-weight: bold;
}



</style>