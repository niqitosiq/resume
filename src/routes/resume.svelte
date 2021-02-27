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
        'Учусь на факультете "Математическое обеспечение и администрирование информационных систем". Участвовал во многих бизнес-конкурсах и хакатонах.',
    },
    {
      company: 'КРОК',
      timing: '2020 - 2021',
      label: 'Менеджер-фасилитатор',
      text:
        'Прохождение "Школы менеджеров" от IT-компании КРОК, изучение концепций дизайн-мышления, ведение команды разработчиков.',
    },
  ];

  const skills = [
    {
      skill: 'JavaScript',
      progress: 0.8,
      description:
        'Понимаю принципы работы движка JavsScript, умею не допускать утечек памяти, быстро и качественно пишу код.',
    },
    {
      skill: 'Чистый код',
      progress: 0.7,
      description:
        'Разрабатываю чистый, поддерживаемый и понятный другим, код, внимателен к деталям.',
    },
    {
      skill: 'Поиск готовых решений',
      progress: 0.9,
      description:
        'Отлично владею навыком "гуглинга", легко нахожу готовые решения, даже если для этого приходится покапаться в гитхабе.',
    },
    {
      skill: 'VueJS',
      progress: 0.9,
      description:
        'Разрабатываю высоконагруженные (и не очень), расширяемые интерфейсы. Хороший опыт использования внешних решений (AntDesign, Vuex, Apollo, итд.)',
    },
    {
      skill: 'NuxtJS',
      progress: 0.7,
      description:
        'Навык построения оптимизированных приложений, разработка архитектуры, отложенное гидрирование.',
    },
    {
      skill: 'SvelteJS',
      progress: 0.3,
      description:
        'Эта страница сделана с использованием Svelte. Разработка несложных, красиво анимированных страниц, веб-интерфейсов.',
    },
    {
      skill: 'Docker',
      progress: 0.5,
      description:
        'Умею обращаться с докером, настриваю сложные процессы с помощью docker-compose.',
    },
    {
      skill: 'CI/CD',
      progress: 0.4,
      description: 'Опыт в настройке автодеплоя',
    },
    {
      skill: 'Фасилитация и менеджерство',
      progress: 0.4,
      description:
        'Опыт в разработке концепции IT-продуктов, CJM, глубинные интервью, создание понятных задач.',
    },
    {
      skill: 'Дизайн',
      progress: 0.6,
      description:
        'У меня есть вкус в дизайне, я знаю что такое UX и как сделать его хорошо. Иногда получается делать красивые макеты.',
    },
    {
      skill: 'Признавать ошибки и развиваться',
      progress: 0.7,
      description:
        'Умею признать свою неправоту, найти правильное решение и развиться за этот счёт.',
    },
  ];
</script>

<svelte:head>
  <title>niqitosiq.ru | Резюме</title>
</svelte:head>

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
