<script lang="ts">
  import { bikeList } from '$lib/data';
  import Grid from './grid.svelte';
  import Tile from './tile.svelte';
</script>

<Grid>
  {#each bikeList as make}
    {#each make.models as model}
      <a href={`/${make.id}/${model.id}`}>
        <Tile imageUrl={model.smallImage} make={make.name} model={model.name} />
      </a>
    {/each}
  {/each}
</Grid>
