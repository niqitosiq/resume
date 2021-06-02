<script>
  import Specialization from '../components/blocks/index/Specialization.svelte';
  import Summary from '../components/blocks/index/Summary.svelte';
  import { fadeIn, fadeOut } from '../components/utils/pageFade';
</script>

<svelte:head>
  <title>niqitosiq.ru | Главная страница</title>
</svelte:head>

<div class="index" in:fadeIn out:fadeOut>
  <Summary />
  <Specialization />
</div>

<style lang="scss">
  .index {
    padding: var(--top-padding);
    padding-top: 87px;
    padding-bottom: 45px;

    @media screen and (max-width: 930px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
</style>
