<script>
  import gsap from 'gsap';
  import { quadInOut } from 'svelte/easing';

  export let skills;
  export let active;
  export let activeTopOffset;

  let activeSkill = {};
  $: {
    if (typeof document !== 'undefined') {
      gsap.to('#skill', {
        y: activeTopOffset,
      });
    }
  }
  $: activeSkill = skills[active];

  const skillTransition = (node, { delay = 0, duration = 300 }) => {
    return {
      duration,
      delay,
      css: t => {
        const eased = quadInOut(t);
        return `
          opacity: ${eased};
        `;
      },
    };
  };
</script>

<div id="skill">
  {#key active}
    <div
      class="skill"
      in:skillTransition={{ delay: 300 }}
      out:skillTransition={{ delay: 0 }}
    >
      <h3>{activeSkill.skill}</h3>
      <p>{activeSkill.description}</p>
    </div>
  {/key}
</div>

<style lang="scss">
  .skill {
    padding: 20px 30px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: var(--background-gray-light);
      z-index: -1;
      border-radius: 3px;
      opacity: 0.2;
      border-top-left-radius: 0;
    }
  }
  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
  p {
    font-size: 16px;
    line-height: 18px;
  }
</style>
