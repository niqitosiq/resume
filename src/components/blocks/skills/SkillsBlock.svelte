<script>
  import Underline from '../../ui/Underline.svelte';

  import Skill from './Skill.svelte';
  import SkillDescription from './SkillDescription.svelte';

  export let skills;

  let skillsInstance;
  let descriptionInstance;
  let wrapperInstance;
  let active = 0;

  const openSkill = skill => {
    active = skill;
  };
</script>

<div class="skills-block" id="skills">
  <Underline>
    <h2>Навыки</h2>
  </Underline>
  <div class="skills-wrapper" bind:this={wrapperInstance}>
    <div class="skills" bind:this={skillsInstance}>
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

    <div class="skill-description" bind:this={descriptionInstance}>
      <SkillDescription {active} {skills} />
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
    margin-top: 20px;
  }
  .skills,
  .skill-description {
    width: 50%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .skill-description {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
</style>
