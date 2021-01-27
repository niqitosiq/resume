<script>
  import Button from '../../ui/Button.svelte';
  import Image from 'svelte-image';
</script>

<section class="summary">
  <div class="image"><Image src="/img/person-face.jpg" alt="" /></div>
  <div class="personal">
    <p class="info">Веб-разработчик</p>
    <h1>Никита Штанько</h1>
    <p class="description">
      Внимательный веб-разработчик с более чем 4-летним опытом работы, страстью
      к дизайну, пониманием важности Mobile First и Perfect Pixel. Знакомый с
      множеством современных и эффективных технологий.
    </p>
    <div class="buttons">
      <Button styling="accent">Резюме</Button>
      <Button>Связаться</Button>
    </div>
  </div>
</section>

<style lang="scss">
  .summary {
    display: flex;
    align-items: center;
    @media screen and (max-width: 930px) {
      align-items: flex-start;
    }
    @media screen and (max-width: 712px) {
      flex-wrap: wrap;
    }
  }
  .image {
    max-width: 353px;
    min-width: 250px;
    max-height: 300px;
    width: 100%;
  }
  .personal {
    margin-left: 56px;
    @media screen and (max-width: 712px) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
  .info {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #969696;
    margin: 0;
  }
  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 175%;
    color: var(--text-gray);
    margin-bottom: 30px;
    max-width: 620px;
  }
  .buttons {
    :global(button + button) {
      margin-left: 13px;
      @media screen and (max-width: 430px) {
        margin-left: 0;
      }
    }
    :global(button) {
      @media screen and (max-width: 430px) {
        display: block;
        margin-left: 0;
        margin-bottom: 15px;
        width: 100%;
      }
    }
  }
</style>
