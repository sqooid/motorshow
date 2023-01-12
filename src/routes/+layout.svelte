<script>
  import Button from '$lib/components/button.svelte';
  import '../app.css';
</script>

<div class="bg-black p-3 flex flex-col items-center md:flex-row">
  <h1 class="font-heading text-white text-5xl">LAMSHOW</h1>
  <div class="flex flex-row justify-center gap-5 w-full">
    <Button text="Gallery" />
    <Button text="Table" />
  </div>
</div>
<div>
  <slot />
</div>
