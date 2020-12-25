<script>
  import { text } from 'svelte/internal';
  import ExperienceBlock from '../components/blocks/resume/ExperienceBlock.svelte';
  import Underline from '../components/ui/Underline.svelte';

  const experiences = [
    {
      label: 'Супернова',
      text:
        'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
      company: 'Инсайн',
      timing: '2010 - 2020',
    },
    {
      label: 'Супернова',
      text:
        'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
      company: 'Инсайн',
      timing: '2010 - 2020',
    },
  ];
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
  .experience {
    max-width: 50%;
    &-blocks {
      margin-top: 30px;
    }
  }
</style>

<div class="resume">
  <div class="header">
    <h1>Резюме</h1>
  </div>
  <div class="resume-wrapper">
    <div class="experience">
      <Underline>
        <h2>Опыт</h2>
      </Underline>
      <div class="experience-blocks">
        {#each experiences as { label, text, company, timing }}
          <ExperienceBlock {label} {text} {company} {timing} />
        {/each}
      </div>
    </div>
  </div>
</div>
