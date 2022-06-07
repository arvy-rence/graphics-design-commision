<script lang="ts">
    import type {Item} from '$lib/types/Item';

    export let item: Item;
</script>


<div class="card shadow mx-3 my-3" style="width: 15rem;">
    <img src={item.itemImageURL} class="card-img-top" alt={item.itemName}>
    <div class="card-body">
        <h5 class="card-title francois-font text-center fs-5">{item.itemName}</h5>
        <div class="d-inline-flex">
            <span class="card-text acme-font fs-6">{item.itemDescription}</span>
        </div>
    </div>
</div>