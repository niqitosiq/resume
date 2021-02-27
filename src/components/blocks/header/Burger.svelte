<script>
  import Link from '../../ui/Link.svelte';
  import { quadInOut } from 'svelte/easing';

  export let menus = [];
  export let langs = [];

  let lines = 5;
  let menuOpened = false;

  const toogleMenu = () => {
    menuOpened = !menuOpened;
  };

  const menuTransition = (node, { delay = 0, duration = 300 }) => {
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

<div class="burger" class:active={menuOpened} on:click={toogleMenu}>
  <div class="lines">
    {#each Array(lines) as _, line}
      <div class={`line line-${line + 1}`} />
    {/each}
  </div>
  {#if menuOpened}
    <div
      class="menu"
      in:menuTransition={{ delay: 200 }}
      out:menuTransition={{ delay: 0 }}
    >
      <ul class="links">
        {#each menus as { label, href }}
          <Link {href}>
            <li>{label}</li>
          </Link>
        {/each}
      </ul>
      <ul class="langs">
        {#each langs as { label, event }}
          <li class="lang" on:click={event}>{label}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .burger {
    display: none;
    position: relative;
    @media screen and (max-width: 900px) {
      display: block;
    }
    &:after {
      content: '';
      background-color: rgba(0, 0, 0, 0.7);
      width: 600px;
      height: 600px;
      border-radius: 600px;
      left: 0;
      top: 0;
      position: absolute;
      z-index: 100;
      pointer-events: none;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform ease 0.4s;
    }
    &.active {
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
      .line {
        /* burger */
        &-1 {
          transform: scaleX(0);
          transition-delay: 0s;
        }
        &-2 {
          transform: scaleX(0);
          transition-delay: 0.1s;
        }
        &-3 {
          transform: scaleX(0);
          transition-delay: 0.2s;
        }
        /* cross */
        &-4 {
          transform: rotate(45deg) scaleX(1);
          transition-delay: 0.4s;
        }
        &-5 {
          transform: rotate(-45deg) scaleX(1);
          transition-delay: 0.3s;
        }
      }
    }
  }

  .lines {
    position: relative;
    width: 30px;
    height: 30px;
    z-index: 101;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--white);
    position: absolute;
    /* burger */
    &-1 {
      top: 5px;
      transition: transform ease 0.3s;
      transform-origin: left center;
      transform: scaleX(1);
      transition-delay: 0.4s;
    }
    &-2 {
      top: 50%;
      transition: transform ease 0.3s;
      transform-origin: left center;
      transform: scaleX(1);
      transition-delay: 0.3s;
    }
    &-3 {
      bottom: 5px;
      transition: transform ease 0.3s;
      transform-origin: left center;
      transform: scaleX(1);
      transition-delay: 0.2s;
    }
    /* cross */
    &-4 {
      width: 120%;
      top: 3px;
      left: 4px;
      transition: transform ease 0.3s;
      transform-origin: left center;
      transform: rotate(45deg) scaleX(0);
      transition-delay: 0.1s;
    }
    &-5 {
      width: 120%;
      top: 3px;
      right: 1px;
      transition: transform ease 0.3s;
      transform-origin: right center;
      transform: rotate(-45deg) scaleX(0);
      transition-delay: 0s;
    }
  }

  .menu {
    position: absolute;
    z-index: 101;
    text-align: right;
    right: 0;
    width: 200px;
    margin-top: 20px;
  }
  li {
    font-size: 16px;
    line-height: 17px;
    color: #f5f5f5;
    margin-bottom: 20px;
    width: auto;
  }

  .langs {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    .lang {
      margin-left: 20px;
      font-weight: 700;
    }
  }
</style>
