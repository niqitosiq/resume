<script>
  const links = [
    { label: 'Вконтакте', link: 'https://vk.com/niqitosiq' },
    { label: 'Телеграм', link: 'https://t.me/niqitosiq' },
  ];
</script>

<footer class="footer">
  <div class="social">
    {#each links as link}<a href="{link.link} "> {link.label} </a>{/each}
  </div>
  <div class="copyright">© 2020 Все права защищены.</div>
</footer>

<style lang="scss">
  .footer {
    border-top: 1px solid #333333;
    padding: var(--top-padding);
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 17px;
    @media screen and (max-width: 490px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  a {
    font-size: 14px;
    line-height: 130%;
    color: var(--text-gray);
    opacity: 0.55;
    transition: opacity ease 0.3s;
    &:hover {
      opacity: 1;
    }
    & + & {
      margin-left: 30px;
    }
  }
  .social {
    @media screen and (max-width: 490px) {
      margin-bottom: 10px;
    }
  }
</style>
