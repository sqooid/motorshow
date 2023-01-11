{#each bikeList as make}
	{#each make.models as model}
		<a href={`/${make.id}/${model.id}`}>{`${make.name} ${model.name}`}</a>	
	{/each}	
{/each}

<script lang="ts">
	import {bikeList} from '$lib/data'
</script>