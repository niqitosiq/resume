<script>
  export let label;
  export let text;
  export let company;
  export let timing;
</script>

<div class="experience-block">
  <div class="content">
    <div class="header">
      <div class="timing">{timing}</div>
      <div class="company">{@html company}</div>
    </div>
    <h3>{label}</h3>
    <p>{@html text}</p>
  </div>
</div>

<style lang="scss">
  .experience-block {
    padding-left: 40px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: var(--background-gray);
      top: 0;
      left: 10px;
      z-index: 1;
    }

    &:before {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: var(--background-gray);
      bottom: 0;
      left: 10px;
      z-index: 1;
    }

    &:hover {
      .content {
        &:after {
          transform: scaleY(1);
          transform-origin: top center;
          transition-delay: 0s;
        }
      }
      .company {
        opacity: 1;
        :global(a) {
          &:after {
            transform: scaleX(1);
          }
          &:hover:after {
            opacity: 1;
          }
        }
      }
    }

    &:last-child {
      &:before,
      .content:before {
        display: none;
      }
    }
  }
  .content {
    z-index: 2;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: var(--accent);
      top: 0;
      left: -30px;
      z-index: -1;
      transition: transform ease 0.2s 0.1s;
      transform: scaleY(0);
      transform-origin: bottom center;
    }
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 5px;
    }
  }
  .company {
    margin-left: 10px;
    opacity: 0.6;
    font-size: 12px;
    transition: opacity ease 0.3s;
    @media screen and (max-width: 500px) {
      margin-left: 0;
      margin-top: 20px;
    }

    :global(a) {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--accent);
        opacity: 0.3;
        transform: scaleX(0);
        transition: transform 0.3s ease, opacity 0.15s;
        transform-origin: left center;
      }
    }
  }
  .timing {
    display: inline-block;
    position: relative;
    font-size: 12px;
    font-weight: 500;
    margin-left: -40px;
    padding: 0 10px;
    line-height: 23px;
    border: 2px solid var(--accent);
    background: var(--background-dark);
    border-radius: 30px;
  }
  h3 {
    margin-bottom: 10px;
  }
</style>
