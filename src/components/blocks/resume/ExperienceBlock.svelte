<script>
  export let label;
  export let text;
  export let company;
  export let timing;
</script>

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
        &:before {
          transform: scale(1);
          transform-origin: top center;
        }
        &:after {
          transform: scale(1);
        }
      }
      .company {
        opacity: 1;
      }
    }
  }
  .content {
    z-index: 2;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    &:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: var(--accent);
      top: 0;
      left: -30px;
      z-index: -1;
      transition: transform ease 0.3s;
      transform: scale(0);
      transform-origin: bottom center;
    }
    &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: calc(100% + 40px);
      background-color: var(--accent);
      bottom: 0;
      left: -30px;
      z-index: 1;
      transition: transform ease 0.3s 0.2s;
      transform: scale(0);
      transform-origin: left center;
    }
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .company {
    margin-left: 10px;
    opacity: 0.6;
    font-size: 12px;
    transition: opacity ease 0.3s;
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

<div class="experience-block">
  <div class="content">
    <div class="header">
      <div class="timing">{timing}</div>
      <div class="company">{company}</div>
    </div>
    <h3>{label}</h3>
    <p>{text}</p>
  </div>
</div>
