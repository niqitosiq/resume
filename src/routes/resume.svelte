<script>
  import Experience from '../components/blocks/resume/Experience.svelte';
  import Objective from '../components/blocks/resume/Objective.svelte';

  import { fadeIn, fadeOut } from '../components/utils/pageFade';
</script>

<style lang="scss">
  .resume {
    &-wrapper {
      padding: var(--top-padding);
    }
  }
  .header {
    padding: var(--top-padding);
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: solid 1px #333333;
    margin-bottom: 40px;
  }
</style>

<div class="resume" in:fadeIn out:fadeOut>
  <div class="header">
    <h1>Резюме</h1>
  </div>
  <div class="resume-wrapper">
    <Objective />
    <Experience />
  </div>
</div>
