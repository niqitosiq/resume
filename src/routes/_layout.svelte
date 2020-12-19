<script>
  import Header from '../components/blocks/Header.svelte';
  import Background from '../components/blocks/background/Background.svelte';
  import Footer from '../components/blocks/Footer.svelte';
</script>

<style lang="scss" global>
  @import '../styles/main';

  body {
    overflow-x: hidden;
  }

  .main {
    background-color: var(--background-dark);
    max-width: var(--container-width);
    color: var(--text-gray);
    border-radius: 20px;
    margin: 60px auto;
    width: calc(100% - 20px);
    position: relative;
  }

  .wrapper {
    z-index: 10;
  }
</style>

<main class="main">
  <Background />
  <div class="wrapper">
    <Header />
    <slot />
    <Footer />
  </div>
</main>
