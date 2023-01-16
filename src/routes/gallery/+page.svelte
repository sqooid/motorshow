<script lang="ts">
  import { bikeList, getBikeImage } from '$lib/data';
  import Grid from './grid.svelte';
  import Tile from './tile.svelte';
</script>

<Grid>
  {#each bikeList as make}
    {#each make.models as model}
      <Tile
        imageUrl={getBikeImage(model)}
        make={make.name}
        model={model.name}
        link={`/detail/${make.id}/${model.id}`}
      />
    {/each}
  {/each}
</Grid>
