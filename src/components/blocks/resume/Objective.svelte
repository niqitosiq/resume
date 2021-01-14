<script>
  import Underline from '../../ui/Underline.svelte';
  import { gsap } from 'gsap';

  const menu = [
    { label: 'Опыт', link: '#experience' },
    { label: 'Образование', link: '#education' },
    { label: 'Навыки', link: '#skills' },
    { label: 'Языки', link: '#langs' },
    { label: 'Хобби', link: '#hobbies' },
  ];

  const scrollTo = (e, to) => {
    e.preventDefault();
    if (!window || !document.querySelector(to)) return;
    gsap.to(window, { duration: 1, scrollTo: { x: 0, y: to } });
  };
</script>

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
        <li><a href={link} on:click={e => scrollTo(e, link)}> {label} </a></li>
      {/each}
    </ul>
  </div>
</div>

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
      @media screen and (max-width: 780px) {
        max-width: 100%;
      }
    }
    @media screen and (max-width: 780px) {
      flex-direction: column;
    }
  }
  ul {
    margin: 0px;
    margin-left: 220px;
    position: relative;
    @media screen and (max-width: 1250px) {
      margin-left: 100px;
    }
    @media screen and (max-width: 780px) {
      margin-left: 0;
      margin-top: 20px;
    }
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
    overflow: hidden;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      width: 100%;
      padding: 8px 10px;
      display: block;
      z-index: 3;
      position: relative;
      @media screen and (max-width: 780px) {
        padding: 8px 18px;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #747474;
      transform: scaleX(0);
      transform-origin: left center;
      opacity: 0;
      z-index: 2;
      transition: opacity ease 0.3s, transform ease 0.3s;
    }
    &:hover {
      &:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    @media screen and (max-width: 1050px) {
      width: 100%;
      min-width: 230px;
    }
    @media screen and (max-width: 780px) {
      width: auto;
      min-width: 0;
      margin-bottom: 0;
    }
  }
</style>
