<script>
  import Underline from '../../ui/Underline.svelte';
  import ExperienceBlock from './ExperienceBlock.svelte';

  const experiences = [
    {
      company: 'GetmanPW',
      timing: 'Январь 2016 - Февраль 2017',
      label: 'Верстальщик',
      text: 'Занимался разработкой лендингов и корпоративных сайтов.',
    },
    {
      company: 'Conception Agency',
      timing: 'Февраль 2017 - Февраль 2019',
      label: 'Верстальщик-программист',
      text:
        'Разрабатывал сложные лендинги с упором в Perfect Pixel перенос дизайна и красивые анимации. Создавал сборщики для фронтенда, а так же занимался настройкой окружения для работы сайтов.',
    },
    {
      company: 'Фриланс',
      timing: 'Февраль 2019 - Апрель 2019',
      label: 'Веб-разработчик',
      text:
        'Делал простые приложения для множества компаний. Среди них сервис для общения персонала со зрителей прямых трансляций, а так же админ-панель для компании ProStream.',
    },
    {
      company: 'Инсайн',
      timing: 'Апрель 2019 - Настоящее время',
      label: 'Middle Frontend Разработчик',
      text:
        'Проектирую и создаю сложные SPA приложения для целей бизнеса на VueJS, среди них: трейдинг-платформа, CRM/CMS, интернет-магазин. Также занимаюсь разработкой лендингов и промостраниц.',
    },
  ];
</script>

<div class="experience" id="experience">
  <Underline>
    <h2>Опыт</h2>
  </Underline>
  <div class="experience-blocks">
    {#each experiences as { label, text, company, timing }}
      <ExperienceBlock {label} {text} {company} {timing} />
    {/each}
  </div>
</div>

<style lang="scss">
  .experience {
    max-width: 50%;
    margin-bottom: 20px;
    &-blocks {
      margin-top: 30px;
    }
    @media screen and (max-width: 1000px) {
      max-width: 100%;
      padding-right: 30px;
    }
  }
</style>
