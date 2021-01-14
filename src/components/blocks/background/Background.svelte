<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  import Svg1 from './circles/1.svelte';
  import Svg2 from './circles/2.svelte';
  import Svg3 from './circles/3.svelte';
  import Svg4 from './circles/4.svelte';
  import Svg5 from './circles/5.svelte';

  let backgroundVisible = false;

  const initParallax = () => {
    const rect = document.body;
    let mouse = [0, 0, false];
    rect.addEventListener('mousemove', event => {
      mouse = [event.x, event.y, true];
    });

    const parallax = (target, movement) => {
      var centerX = rect.clientWidth / 2;
      var centerY = rect.clientHeight / 2;

      var dx = mouse[0] - centerX;
      var dy = mouse[1] - centerY;

      var angle = Math.atan2(dy, dx) / 10;

      gsap.to(target, {
        x: ((mouse[0] - rect.clientWidth / 2) / rect.clientWidth) * movement,
        y: ((mouse[1] - rect.clientHeight / 2) / rect.clientHeight) * movement,
        rotation: angle + '_rad_short',
        duration: 0.5,
      });
    };

    const step = () => {
      if (mouse[2]) {
        parallax('.decor-1 svg', -80);
        parallax('.decor-2 svg', -35);
        parallax('.decor-3 svg', -20);
        parallax('.decor-4 svg', -60);
        parallax('.decor-5 svg', -35);
      }

      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const initAnimations = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#wrapper',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=500px',
      },
    });

    tl.to(
      '.decor-1',
      {
        y: -100,
        duration: 6,
      },
      '0',
    )
      .to(
        '.decor-2',
        {
          y: -170,
          duration: 6,
        },
        '-=6',
      )
      .to(
        '.decor-3',
        {
          y: -230,
          duration: 6,
        },
        '-=6',
      )
      .to(
        '.decor-4',
        {
          y: -180,
          duration: 6,
        },
        '-=6',
      )
      .to(
        '.decor-5',
        {
          y: -150,
          duration: 6,
        },
        '-=6',
      );
  };

  onMount(() => {
    if (!document) return;
    if (window.outerWidth < 1280) return;
    initAnimations();
    initParallax();

    backgroundVisible = true;
  });
</script>

<div class="background" class:visible={backgroundVisible}>
  <div class="decors">
    <div class="decor decor-1">
      <Svg1 />
    </div>
    <div class="decor decor-3">
      <Svg3 />
    </div>
    <div class="decor decor-4">
      <Svg4 />
    </div>
  </div>
  <div class="decors-back">
    <div class="decor decor-2">
      <Svg2 />
    </div>
    <div class="decor decor-5">
      <Svg5 />
    </div>
  </div>
</div>

<style lang="scss">
  .background {
    position: relative;
    pointer-events: none;
    @media screen and (max-width: 1280px) {
      display: none;
    }
    &.visible {
      .decors,
      .decors-back {
        opacity: 1;
      }
    }
  }
  .decors,
  .decors-back {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: var(--container-width);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity ease 0.3s;
  }
  .decors {
    z-index: 15;
  }
  .decors-back {
    z-index: -1;
  }
  .decor {
    position: absolute;
  }
  .decor-1 {
    right: calc(100% + 32.33px);
    top: 120px;
    z-index: 15;
  }
  .decor-2 {
    top: 380px;
    right: calc(100% - 72px);
    z-index: -1;
  }
  .decor-3 {
    top: 134px;
    left: calc(100% - 64px);
    z-index: 15;
  }

  .decor-4 {
    top: 281px;
    left: calc(100% - 87px);
    z-index: 15;
  }

  .decor-5 {
    width: 171px;
    top: 313px;
    left: calc(100% - 206px);
    z-index: -1;
  }
</style>
