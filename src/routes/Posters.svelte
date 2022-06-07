<script lang="ts">
    import ItemCard from "../lib/components/ItemCard.svelte";
    import VerticalSpacer from "../lib/components/VerticalSpacer.svelte";
    import {posterStore} from "../lib/stores/itemStore";
</script>

<div class="container">
    <VerticalSpacer height="2" units={"rem"}/>
    <h1 class="text-center">Poster Items</h1>
    <div class="d-flex justify-content-center flex-wrap">
        {#await $posterStore}
            Waiting for data
        {:then items}
            {#each items as item}
                <ItemCard item={item}/>
            {/each}
        {/await}
    </div>
</div>