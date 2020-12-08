<script>
  import { onMount } from 'svelte';

  import Background from '../components/Background.svelte';
  import Lines from '../components/Lines.svelte';
  import Resume from '../components/Resume.svelte';

  let loaded = false;

  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, 1500);
  });
</script>

<style>
</style>

<Background />

<Lines {loaded} />

<Resume />
