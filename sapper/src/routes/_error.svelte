<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div>
  <h1>Извините, но кажется это "{status}" ошибка!</h1>

  <p>
    И пусть проблема в том, что "{error.message}", не волнуйтесь, в ближайшем будущем это
    обязательно исправится!
  </p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

<style>
  div {
    padding: var(--top-padding);
    padding-top: 87px;
    padding-bottom: 45px;

    @media screen and (max-width: 930px) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
