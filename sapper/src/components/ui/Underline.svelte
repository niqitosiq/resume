<style lang="scss">
  .underline {
    position: relative;
    padding-bottom: 2px;
    display: inline-block;
    &:after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 72px;
      height: 2px;
      background: var(--accent);
      transform: scaleX(0.3);
      transition: transform ease 0.3s;
      transform-origin: left center;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 72px;
      height: 2px;
      background: #353535;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
</style>

<div class="underline">
  <slot />
</div>
