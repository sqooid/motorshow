<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { modelInfo } = data;
</script>

<img src={modelInfo.smallImage} alt="" />
<div>{JSON.stringify(modelInfo)}</div>
