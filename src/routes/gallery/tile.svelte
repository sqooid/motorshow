<script lang="ts">
  export let imageUrl: string;
  export let link: string;
  export let make: string;
  export let model: string;
</script>

<a href={link} class="relative aspect-[4/3] overflow-hidden tile">
  <img class="object-cover w-full h-full transition-transform" src={imageUrl} alt="" />
  <div
    class="absolute inset-0 z-10 w-full h-full transition-colors flex flex-col gap-1 items-center pt-1"
  >
    <h5 class="bg-black text-white w-fit opacity-0 transition-opacity font-heading px-1">{make}</h5>
    <h5 class="bg-black text-white w-fit opacity-0 transition-opacity font-heading px-1">
      {model}
    </h5>
  </div>
</a>

<style>
  .tile:hover img {
    @apply scale-105;
  }
  .tile:hover div {
    @apply bg-black/10;
  }
  .tile:hover div h5 {
    @apply opacity-100;
  }
</style>
