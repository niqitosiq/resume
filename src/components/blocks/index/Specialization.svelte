<script>
  import Icon from '../../ui/Icon.svelte';
  import Underline from '../../ui/Underline.svelte';

  const specs = [
    {
      icon: 'frontend',
      label: 'Фронтенд-разработка',
      text:
        'Проектирование и разработка масштабируемых интерфейсов, административных панелей, создание UI-китов, верстка, гибкая и сложная логика с современным стеком',
    },
    {
      icon: 'backend',
      label: 'Бекенд-разработка',
      text:
        'Создание и развертка бекенда, настройка CI/CD процессов, проектирование  архитектуры базы данных',
    },
    {
      icon: 'analitic',
      label: 'Аналитика',
      text:
        'Проектирование и разработка масштабируемых интерфейсов, административных панелей, создание UI-китов, верстка, гибкая и сложная логика с современным стеком',
    },
    {
      icon: 'design',
      label: 'Дизайн',
      text:
        'Проектирование и разработка масштабируемых интерфейсов, административных панелей, создание UI-китов, верстка, гибкая и сложная логика',
    },
  ];
</script>

<style lang="scss">
  .specalisation {
    margin-top: 77px;
    :global(svg) {
      font-size: 45px;
    }
  }
  h2 {
    padding-bottom: 10px;
  }
  .specs {
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    margin-left: -10px;
    @media screen and (max-width: 560px) {
      margin-left: 0;
      width: 100%;
    }
  }
  .spec {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    display: flex;
    max-width: 580px;
    margin-left: 10px;
    margin-right: 10px;
    @media screen and (max-width: 560px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .text {
    margin-left: 25px;
  }
  h3 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    color: var(--white);
  }
  p {
    margin: 0;
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    color: var(--text-gray);
  }
</style>

<section class="specalisation">
  <Underline>
    <h2>Чем я занимаюсь?</h2>
  </Underline>
  <div class="specs">
    {#each specs as spec}
      <div class="spec">
        <div class="icon">
          <Icon name={spec.icon} />
        </div>
        <div class="text">
          <h3>{spec.label}</h3>
          <p>{spec.text}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
