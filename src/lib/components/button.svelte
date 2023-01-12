<script lang="ts">
  import { goto } from '$app/navigation';

  export let text: string;
  //   export let classes: string = '';
  export let href: string = '';
  export let onClick: () => void = () => {};
</script>

<button
  class="bg-black border-white border text-white px-4 py-2 text-xl font-heading hover:"
  on:click={() => {
    if (href) {
      goto(href);
    } else {
      onClick();
    }
  }}>{text}</button
>

<style>
  button {
    background-position: 0 100%;
    background-size: 100% 200%;
    background-image: linear-gradient(to top, black 50%, white 50%);
    transition: all 200ms cubic-bezier(0, 1, 0.65, 1);
  }
  button:hover,
  button:focus {
    background-position: 0 0%;
    color: black;
  }
</style>
