<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  export let skills;
  export let active;
  export let triggerOffset;
  export let triggerHeight;

  const skillsBlocks = {};
  let roll;

  function animate(selected) {
    if (!selected) return;
    const activeOffset =
      selected.offsetTop + (selected.offsetHeight - triggerHeight) / 2;
    const tl = gsap.timeline();
    let offset = -(triggerOffset + activeOffset);
    if (active === 0) offset = 0;
    Object.entries(skillsBlocks).forEach(([_, block], index) => {
      if (index === active) {
        gsap.to(block, {
          x: 0,
          opacity: 1,
        });
        return;
      }

      gsap.to(block, {
        x: 10 + 10 * Math.abs(active - index),
        opacity: 0.4 - 0.075 * Math.abs(active - index),
      });
    });

    tl.to(roll, {
      y: offset,
    });
  }

  $: {
    animate(skillsBlocks[active]);
  }
</script>

<div class="skill-roll" bind:this={roll}>
  {#each skills as { skill, description }, index}
    <div
      class="skill-description"
      class:active={active == index}
      bind:this={skillsBlocks[index]}
    >
      <h3>{skill}</h3>
      <p>{description}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  .skill-description {
    padding: 20px 30px;

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
      transform: scaleX(0);
      transition: transform ease 0.3s 0s;
      transform-origin: right center;
    }
    &.active {
      &:before {
        transform: scaleX(1);
        transition-delay: 290ms;
        transform-origin: left center;
      }
    }
  }
  .skill-roll {
    height: 1000%;
    width: 100%;
    position: absolute;
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
