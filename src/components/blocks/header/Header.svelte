<script>
  import Link from '../../ui/Link.svelte';
  import Burger from './Burger.svelte';
  import InWork from './InWork.svelte';

  import { stores } from '@sapper/app';
  const { preloading } = stores();

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

<header class="header" class:loaded={!$preloading}>
  <div class="logo">
    <Link href="/">niqitosiq</Link>
  </div>

  <InWork />

  <div class="menus">
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

  <Burger {menus} {langs} />
</header>

<style lang="scss">
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    border-bottom: 1px solid #333333;
    padding: var(--top-padding);
    &:after {
      content: '';
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #fff;
      opacity: 1;
      animation: progressBar 4s 1;
      transform-origin: left center;
    }
    &.loaded {
      &:after {
        animation: none;
        transform: scaleX(1);
        opacity: 0;
        transition: opacity ease 0.3s 0.5s, transform ease 0.5s;
      }
    }
  }
  .logo {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
  .menus {
    display: flex;
  }
  .links {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  .langs {
    margin-left: 62px;
    @media screen and (max-width: 900px) {
      display: none;
    }
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

  @keyframes progressBar {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(0.8);
    }
    100% {
      transform: scaleX(1);
    }
  }
</style>
