<script lang="ts">
  import IconButton from './icon-button.svelte';
  import MdClear from 'svelte-icons/md/MdClear.svelte';

  export let placeholder: string;
  export let value: string;
  export let clear: boolean = false;
  let inputNode: HTMLInputElement;
</script>

<div class={`relative ${$$props.class}`}>
  <input
    type="text"
    class="border border-neutral-400 p-2 m-1 outline-none h-fit font-signika text-lg focus:border-black hover:border-black"
    bind:value
    {placeholder}
    bind:this={inputNode}
  />
  {#if clear}
    <div class="absolute right-1 top-0 h-full flex flex-row items-center">
      <IconButton
        class="opacity-40 hover:opacity-100"
        on:click={() => {
          value = '';
          inputNode.focus();
        }}
      >
        <div class="h-10 w-10">
          <MdClear />
        </div>
      </IconButton>
    </div>
  {/if}
</div>
