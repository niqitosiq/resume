<script>
  import Underline from '../../ui/Underline.svelte';

  import Skill from './Skill.svelte';
  import SkillDescription from './SkillDescription.svelte';

  export let skills;

  let descriptionInstance;
  let wrapperInstance;
  let active = 0;
  let triggerOffset = 0;
  let triggerHeight = 0;

  const openSkill = (skill, { componentInstance }) => {
    active = skill;
    triggerOffset = wrapperInstance.offsetTop - componentInstance.offsetTop;
    triggerHeight = componentInstance.offsetHeight;
  };
</script>

<div class="skills-block" id="skills">
  <Underline>
    <h2>Навыки</h2>
  </Underline>
  <div class="skills-wrapper" bind:this={wrapperInstance}>
    <div class="skills">
      {#each skills as { skill, progress }, index}
        <Skill
          {skill}
          {progress}
          active={index === active}
          on:skillClicked={({ detail }) => {
            openSkill(index, detail);
          }}
        />
      {/each}
    </div>

    <div class="skill-descriptions" bind:this={descriptionInstance}>
      <SkillDescription {active} {skills} {triggerOffset} {triggerHeight} />
    </div>
  </div>
</div>

<style lang="scss">
  .skills-block {
    width: 100%;
  }
  .skills-wrapper {
    width: 100%;
    display: flex;
    align-items: stretch;
    margin-top: 20px;
    padding-bottom: 50px;
  }
  .skills,
  .skill-descriptions {
    width: 50%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .skill-descriptions {
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
</style>
