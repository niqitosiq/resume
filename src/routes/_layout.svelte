<script>
</script>

<style lang="scss">
  .main {
    background-color: var(--background-dark);
    max-width: var(--container-width);
    color: var(--text-gray);
    border-radius: 20px;
    margin: 60px auto;
    padding: 0px 50px;
    width: 100%;
    position: relative;
    z-index: 10;
  }
</style>

<main class="main">
  <slot />
</main>
