<script>
  import Underline from '../../ui/Underline.svelte';

  const menu = [
    { label: 'Опыт', link: '' },
    { label: 'Образование', link: '' },
    { label: 'Навыки', link: '' },
    { label: 'Языки', link: '' },
    { label: 'Хобби', link: '' },
  ];
</script>

<style lang="scss">
  .objective {
    margin-bottom: 40px;
  }
  .description {
    margin-top: 20px;
    display: flex;
    p {
      font-size: 16px;
      max-width: 480px;
      line-height: 140%;
    }
  }
  ul {
    margin: 0px;
    margin-left: 120px;
    position: relative;
  }
  li {
    display: inline-block;
    width: 200px;
    text-align: center;
    position: relative;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 10px;
    margin-right: 10px;
    z-index: 1;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      width: 100%;
      padding: 8px 10px;
      display: block;
      z-index: 1;
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 18px;
      background-color: rgba(255, 255, 255, 0.2);
      transform: scaleX(0);
      transform-origin: left center;
      opacity: 0;
      z-index: -1;
      transition: opacity ease 0.3s, transform ease 0.3s;
    }
    &:after {
      content: '';
      position: absolute;
      right: 10px;
      top: 50%;
      background-color: var(--accent);
      width: 15px;
      height: 15px;
      border-radius: 15px;
      transform: translateY(-50%) scale(0);
      opacity: 0;
      transition: transform ease 0.6s 0.32s, opacity ease 0.6s, 0.32s;
    }
    &:hover {
      &:before {
        transform: scaleX(1);
        opacity: 1;
      }
      &:after {
        transform: translateY(-50%) scale(1);
        opacity: 1;
      }
    }
  }
</style>

<div class="objective">
  <Underline>
    <h2>Кратко</h2>
  </Underline>
  <div class="description">
    <p>
      Ученик математического факультета с опытом работы в области веб-дизайна и
      веб-разработки. Более 2 лет работы верстальщиком, около 2 лет работы в
      сфере сложных веб-приложений. Повышение конверсии, Mobile-first,
      исполнение стандартов W3C, поддержка SEO, плавные, сложные и
      оптимизированные анимации, отличное знание Javascript ES6+, и VueJS.
    </p>
    <ul class="menu">
      {#each menu as { label, link }}
        <li><a href={link}> {label} </a></li>
      {/each}
    </ul>
  </div>
</div>
