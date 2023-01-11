<img src={bikeInfo.mainImage} alt="">
<div>{JSON.stringify(bikeList)}</div>

<script lang="ts">
	import {bikeList} from '$lib/data'
	import type {PageData} from './$types'

	export let data: PageData;

	const bikeInfo = bikeList[data.make][data.model]
</script>