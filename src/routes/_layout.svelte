<script>
  import Header from '../components/blocks/header/Header.svelte';
  import Background from '../components/blocks/background/Background.svelte';
  import Footer from '../components/blocks/Footer.svelte';
  import { gsap } from 'gsap';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
</script>

<main class="main">
  <Background />
  <div class="wrapper">
    <Header />
    <slot />
    <Footer />
  </div>
</main>

<style lang="scss" global>
  @import '../styles/main';

  body {
    overflow-x: hidden;
  }

  .wrapper {
    background-color: var(--background-dark);
    max-width: var(--container-width);
    color: var(--text-gray);
    border-radius: 20px;
    margin: 60px auto;
    width: calc(100% - 20px);
    position: relative;
    z-index: 10;
  }
</style>
