<script>
  import Underline from '../../ui/Underline.svelte';
  import ExperienceBlock from './ExperienceBlock.svelte';

  export let history;
  export let title;
  export let id;
</script>

<div class="history" {id}>
  <Underline>
    <h2>{title}</h2>
  </Underline>
  <div class="history-blocks">
    {#each history as { label, text, company, timing }}
      <ExperienceBlock {label} {text} {company} {timing} />
    {/each}
  </div>
</div>

<style lang="scss">
  .history {
    max-width: calc(50% - 10px);
    margin-bottom: 20px;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
    &-blocks {
      margin-top: 30px;
    }
    @media screen and (max-width: 1000px) {
      max-width: 100%;
      padding-right: 30px;
    }
  }
</style>
