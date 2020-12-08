<script>
  export let loaded;
  let lines = [0, 0, 0, 0, 0, 0, 0];
</script>

<style lang="scss">
  .lines {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 5;
  }
  .line {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: transform ease 1s;
    transform: scaleY(0);
    transform-origin: center bottom;
  }
  .lines__container {
    position: relative;
    width: 1090px;
    height: 100%;
    margin: 0 auto;
  }
  :global(.lines__container.active .line) {
    transform: scaleY(1);
  }
  :global(.line:nth-child(1)) {
    left: 0%;
    transition-delay: 0.3s;
  }
  :global(.line:nth-child(2)) {
    left: 10%;
    transition-delay: 0.6s;
  }
  :global(.line:nth-child(3)) {
    left: 25%;
    transition-delay: 0.7s;
  }
  :global(.line:nth-child(4)) {
    left: 50%;
    transition-delay: 0.8s;
  }
  :global(.line:nth-child(5)) {
    left: 75%;
    transition-delay: 0.7s;
  }
  :global(.line:nth-child(6)) {
    left: 90%;
    transition-delay: 0.6s;
  }
  :global(.line:nth-child(7)) {
    left: calc(100% - 1px);
    transition-delay: 0.3s;
  }
</style>

<div class="lines">
  <div class="lines__container" class:active={loaded}>
    {#each lines as line}
      <div class={`line`} />
    {/each}
  </div>
</div>
