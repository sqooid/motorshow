<script lang="ts">
  import Input from '$lib/components/input.svelte';

  let filterString: string = '';
</script>

<div class="flex flex-row items-center">
  <Input placeholder="Search" bind:value={filterString} clear />
</div>
