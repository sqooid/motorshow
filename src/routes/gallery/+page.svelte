<script lang="ts">
  import { bikeList } from '$lib/data';
  import Grid from './grid.svelte';
  import Tile from './tile.svelte';
</script>

<Grid>
  {#each bikeList as make}
    {#each make.models as model}
      <Tile
        imageUrl={model.smallImage}
        make={make.name}
        model={model.name}
        link={`/detail/${make.id}/${model.id}`}
      />
    {/each}
  {/each}
</Grid>
