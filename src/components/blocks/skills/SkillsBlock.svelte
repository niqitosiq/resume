<script>
  import Underline from '../../ui/Underline.svelte';

  import Skill from './Skill.svelte';
  import SkillDescription from './SkillDescription.svelte';

  export let skills;

  let skillsInstance;
  let descriptionInstance;
  let wrapperInstance;
  let active = 0;
  let activeTopOffset = 0;

  const openSkill = (skill, { componentInstance }) => {
    active = skill;
    activeTopOffset = componentInstance.offsetTop - skillsInstance.offsetTop;
  };
</script>

<div class="skills-block">
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
      <SkillDescription {active} {skills} {activeTopOffset} />
    </div>
  </div>
</div>

<style>
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
  }
</style>
