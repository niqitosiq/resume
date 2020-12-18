<script>
  import Summary from '../components/blocks/index/Summary.svelte';
</script>

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

<div class="index">
  <Summary />
</div>
