<script>
  import Icon from '../../ui/Icon.svelte';
</script>

<div class="in-work">
  <div class="label">
    <Icon name="warning" />
    <span>В разработке</span>
  </div>

  <div class="description">
    Сайт ещё не готов :( <br /> Тут многое не работает, но когда-нибудь точно
    заработает! <br /> Если есть предложения, то можете отправить их мне в любой
    соц.сети
    <a href="https://t.me/niqitosiq" target="_blank">@niqitosiq</a>!
  </div>
</div>

<style lang="scss">
  .in-work {
    margin-left: auto;
    margin-right: 30px;
    position: relative;
    z-index: 30;
    &:hover {
      .description {
        opacity: 1;
        transform: scaleY(1);
        pointer-events: auto;
      }
    }
    @media screen and (max-width: 380px) {
      display: none;
    }
  }
  .label {
    position: relative;
    color: #ff9800;
    background-color: rgba(57, 51, 35, 0.8);
    border-radius: 30px;
    padding: 7px 10px;
    position: relative;
    z-index: 2;
  }
  span {
    display: inline-block;
    margin-left: 10px;
  }
  .description {
    font-size: 12px;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    top: 0px;
    padding: 37px 10px 10px;
    left: 0;
    background-color: #312e24;
    z-index: 1;
    opacity: 0;
    transform: scaleY(0.95);
    transition: opacity ease 0.3s, transform ease 0.3s;
    pointer-events: none;
    transform-origin: top center;
  }
</style>
