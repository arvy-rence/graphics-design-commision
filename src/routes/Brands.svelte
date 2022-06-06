<script lang="ts">
    import type {Item} from '$lib/types/Item';
    import ItemCard from "../lib/components/ItemCard.svelte";
    import VerticalSpacer from "../lib/components/VerticalSpacer.svelte";

    let item = {
        itemName: 'Hawo',
        itemImageURL: '/assets/devs/ace.png',
        itemDescription: 'Hawooooooo',
    }
</script>

<div class="container">
    <VerticalSpacer height="2" units={"rem"}/>
    <h1 class="text-center">Branded Items</h1>
    <div class="d-flex justify-content-center flex-wrap">
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
        <ItemCard item={item}/>
    </div>
</div>