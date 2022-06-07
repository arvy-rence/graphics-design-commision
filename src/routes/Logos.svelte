<script lang="ts">
    import ItemCard from "../lib/components/ItemCard.svelte";
    import VerticalSpacer from "../lib/components/VerticalSpacer.svelte";
    import {logoStore} from "../lib/stores/itemStore";
</script>

<div class="container">
    <VerticalSpacer height="2" units={"rem"}/>
    <h1 class="text-center">Logo Items</h1>
    <div class="d-flex justify-content-center flex-wrap">
        {#await $logoStore}
            Waiting for data
        {:then items}
            {#each items as item}
                <ItemCard item={item}/>
            {/each}
        {/await}
    </div>
</div>