<script>
  import Link from '../ui/Link.svelte';

  const menus = [
    { label: 'Обо мне', href: '/' },
    { label: 'Резюме', href: '/resume' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Блог', href: 'https://portfolio.jaex.ru' },
  ];

  const langs = [
    { label: 'EN', event: () => {} },
    {
      label: 'RU',
      event: () => {
        console.log('hi');
      },
    },
  ];
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    border-bottom: 1px solid #333333;
    padding: var(--top-padding);
  }
  .logo {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
  .menus {
    display: flex;
  }
  .langs {
    margin-left: 62px;
  }
  .lang {
    margin-right: 10px;
  }
  ul {
    display: flex;
  }
  ul :global(a) {
    margin-right: 40px;
  }
  li {
    font-size: 14px;
    line-height: 17px;
    color: #f5f5f5;
    opacity: 0.55;
    transition: opacity ease 0.3s;
    cursor: pointer;
  }
  li:hover {
    opacity: 1;
  }
</style>

<header class="header">
  <div class="logo">
    <Link href="/">niqitosiq</Link>
  </div>

  <div class="menus">
    <ul>
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
</header>
