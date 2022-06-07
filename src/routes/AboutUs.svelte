<script lang="ts">
    import {developerStore} from "../lib/stores/developerStore";
    import ContactUsCard from "../lib/components/ContactUsCard.svelte";
    import VerticalSpacer from "../lib/components/VerticalSpacer.svelte";
</script>

<div class="container">
    <VerticalSpacer height="10"/>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center">About the Developers</h1>
        <span class="fs-6">We are the developers of this website. Get to know us!</span>
    </div>
    <VerticalSpacer height="5"/>
    <div class="d-flex justify-content-center">
        {#await $developerStore}
            Waiting data
        {:then devs}
            {#each devs as dev}
                <ContactUsCard developer={dev}/>
            {/each}
        {:catch e}
            console.log(e);
        {/await}
    </div>
</div>