<script>
  import History from '../components/blocks/resume/History.svelte';
  import Objective from '../components/blocks/resume/Objective.svelte';
  import SkillsBlock from '../components/blocks/skills/SkillsBlock.svelte';

  import { fadeIn, fadeOut } from '../components/utils/pageFade';

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
  const education = [
    {
      company: 'ВолГУ',
      timing: '2019 - 2023',
      label: 'Математик-программист',
      text:
        'Учеба на факультете "Математическое обеспечение и администрирование информационных систем". Участие во множестве бизнес-конкурсов и хакатонов.',
    },
  ];

  const skills = [
    {
      skill: 'Чистый код',
      progress: 0.7,
      description:
        'Разработка чистого и поддерживаемого кода, виденье эстетики в причесанном коде, внимание к деталям.',
    },
    {
      skill: 'Javascript',
      progress: 0.8,
      description:
        'Понимание принципов работы движка JavaScript, умение не допустить утечек памяти, ES6+.',
    },
    {
      skill: 'VueJS',
      progress: 0.9,
      description:
        'Разработка высоконагруженных интерфейсов, знание AntDesign, Vuex, Apollo.',
    },
    {
      skill: 'NuxtJS',
      progress: 0.7,
      description:
        'Nuxt, Nuxt кэширование, отложенное гидрирование, оптимизация.',
    },
    {
      skill: 'Признавать ошибки',
      progress: 0.7,
      description:
        'Nuxt, Nuxt кэширование, отложенное гидрирование, оптимизация.',
    },
  ];
</script>

<div class="resume" in:fadeIn out:fadeOut>
  <div class="header">
    <h1>Резюме</h1>
  </div>
  <div class="resume-wrapper">
    <Objective />
    <div class="histories">
      <History id="experience" title="Опыт" history={experiences} />
      <History id="education" title="Образование" history={education} />
    </div>

    <div class="skills">
      <SkillsBlock {skills} />
    </div>
  </div>
</div>

<style lang="scss">
  .resume {
    &-wrapper {
      padding: var(--top-padding);
    }
  }
  .header {
    padding: var(--top-padding);
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: solid 1px #333333;
    margin-bottom: 40px;
  }
  .histories {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
      flex-wrap: wrap;
    }
  }
</style>
