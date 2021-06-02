<script context="module">
  import SummaryApi from '@api/summary';

  export async function preload(page, session) {
    const summary = await new SummaryApi(this.fetch, session).get();

    return {
      summary,
    };
  }
</script>

<script>
  import Specialization from '../components/blocks/index/Specialization.svelte';
  import Summary from '../components/blocks/index/Summary.svelte';
  import { fadeIn, fadeOut } from '../components/utils/pageFade';

  export let summary;
</script>

<svelte:head>
  <title>niqitosiq.ru | Главная страница</title>
</svelte:head>

<div class="index" in:fadeIn out:fadeOut>
  {summary}
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
