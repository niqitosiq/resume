<script>
  import { createEventDispatcher } from 'svelte';

  export let skill;
  export let progress = 0.5;
  export let active = false;

  let componentInstance;

  const progressStyle = `
    transform: scaleX(${progress});
  `;

  const dispatch = createEventDispatcher('');

  const openSkill = () => {
    dispatch('skillClicked', { componentInstance });
  };
</script>

<div
  class="skill"
  class:active
  on:click={openSkill}
  bind:this={componentInstance}
>
  <div class="header">
    <h3>{skill}</h3>
    <span class="procent"> {progress * 100}% </span>
  </div>
  <div class="progress">
    <div class="progress-bar" style={progressStyle} />
    <div class="progress-wrapper" />
  </div>
</div>

<style lang="scss">
  .skill {
    width: 100%;
    margin-bottom: 15px;
    position: relative;
    padding: 15px 10px;
    cursor: pointer;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: var(--background-gray-light);
      z-index: -1;
      border-radius: 3px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:before {
      opacity: 0.2;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform ease 0.3s;
    }
    &:after {
      opacity: 0;
      transition: opacity ease 0.3s;
    }
    &.active {
      &:before {
        transform: scaleX(1);
      }
    }
    &:hover {
      &:after {
        opacity: 0.1;
      }
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 13px;
    line-height: 1.1em;
    position: relative;
    float: left;
    margin: 0 0 4px;
  }
  .procent {
    font-size: 11px;
    line-height: 1.1em;
    position: relative;
    float: right;
    margin: 0 0 4px;
    color: #888;
  }
  .progress {
    margin-top: 5px;
    width: 100%;
    height: 7px;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    &-bar,
    &-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    &-bar {
      background-color: var(--accent);
      transform-origin: left center;
    }
    &-wrapper {
      background-color: var(--background-gray);
      z-index: -1;
    }
  }
</style>
