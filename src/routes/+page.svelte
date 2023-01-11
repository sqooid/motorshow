{#each Object.entries(bikeList) as [make,models]}
	{#each Object.entries(models) as [model,modelInfo]}
		<a href={`/${make}/${model}`}>{`${make} ${modelInfo.name}`}</a>	
	{/each}	
{/each}

<script lang="ts">
	import {bikeList} from '$lib/data'


</script>