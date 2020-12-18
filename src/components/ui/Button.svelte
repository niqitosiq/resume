<script>
  import { createEventDispatcher } from 'svelte';

  export let type = 'button';
  export let styling = '';

  const dispatch = createEventDispatcher();

  const emitEvent = (type, event) => {
    dispatch(type, event);
  };
  dispatch('click');
</script>

<style lang="scss" global>
  button {
    position: relative;
    border: none;
    padding: 11px 34px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    border-radius: 30px;
    color: var(--white);
    background: var(--background-gray);
    border: 1px solid var(--white);
    span {
      position: relative;
      z-index: 5;
    }
    &:focus {
      outline: 0;
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 30px;
      transition: opacity ease 0.3s;
      opacity: 0;
      z-index: 1;
      background-color: var(--background-gray-light);
    }
    &.accent {
      background: var(--accent);
      border: 1px solid var(--accent);
      &:before {
        background-color: var(--accent-light);
      }
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 30px;
        transition: opacity ease 0.3s;
        opacity: 1;
        box-shadow: 0px 0px 20px rgba(0, 124, 237, 0.3);
        z-index: 1;
      }
    }

    &:hover {
      &:after {
        opacity: 0;
      }
      &:before {
        opacity: 1;
      }
    }
  }
</style>

<button {type} class={styling} on:click={emitEvent}>
  <span>
    <slot />
  </span>
</button>
