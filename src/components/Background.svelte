<script>
</script>

<style lang="scss">
  .background {
    position: relative;
    margin: 0 auto;
    max-width: var(--container-width);
    width: 100%;
    height: 100%;
  }
  .circle-top,
  .circle-bottom {
    width: 100px;
    height: 100px;
    position: absolute;
    left: -50px;
    top: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 15;
  }
  .circle-bottom {
    top: 50px;
    z-index: 5;
  }
</style>

<div class="background">
  <div class="circle-top" />
  <div class="circle-bottom" />
</div>
