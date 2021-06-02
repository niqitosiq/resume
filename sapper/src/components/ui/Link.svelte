<script>
  import { goto } from '@sapper/app';

  export let href;
  export let label;

  const redirect = event => {
    event.preventDefault();

    goto(href);
  };
</script>

<a {href} on:click={redirect}>
  <slot>{label}</slot>
</a>

<style lang="scss">
  a {
    @media screen and (max-width: 480px) {
      cursor: none;
    }
  }
</style>
