<script>
    import VerticalSpacer from "./VerticalSpacer.svelte";
</script>

<div id="background-image">
    <div class="d-flex justify-content-evenly">
        <div class="text-white">
            <VerticalSpacer height="6" units={"rem"}/>
            <h1 class="larger-font">Check out our graphic designs</h1>
            <div class="fs-5">
                If you are interested, reach out to our socials and let us <br>
                talk about your next product!
            </div>
            <VerticalSpacer height="20"/>
            <a href="/Posters">
                <button class="btn btn-outline-light rounded-pill fs-5" style="width: 12rem">Check Posters</button>
            </a>
        </div>
        <div></div>
    </div>
</div>


<style>
    #background-image {
        background-image: url("/assets/banner/banner1.jpg");
        background-size: cover;
        min-height: 400px;
        max-height: 400px;
    }

    .larger-font {
        font-size: 64px
    }
</style>