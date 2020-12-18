<script>
  import Header from '../components/blocks/Header.svelte';
</script>

<style lang="scss">
  .main {
    background-color: var(--background-dark);
    max-width: var(--container-width);
    color: var(--text-gray);
    border-radius: 20px;
    margin: 60px auto;
    width: 100%;
    position: relative;
    z-index: 10;
  }
</style>

<main class="main">
  <div class="container">
    <Header />
    <slot />
  </div>
</main>
