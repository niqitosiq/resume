<script>
  export let name;
</script>

<style global>
  .inline-svg-icon {
    font-size: 16px;
    display: inline-block;
    fill: currentColor;
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
</style>

<svg class="inline-svg-icon">
  <use xlink:href={`bundle.svg#${name}`} />
</svg>
