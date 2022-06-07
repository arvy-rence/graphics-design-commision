<script>
    import VerticalSpacer from "./VerticalSpacer.svelte";
</script>

<div id="background-image">
    <div class="d-flex justify-content-evenly">
        <div class="text-white">
            <VerticalSpacer height="6" units={"rem"}/>
            <h1 class="larger-font">UP TO 35% OFF BEAUTY PRODUCTS </h1>
            <div class="fs-5">Don't wait! This exclusive deal won't last forever. <br>Visit the our Shop and Grab
                your Favorite Products
            </div>
            <VerticalSpacer height="20"/>
            <a href="/AllProducts">
                <button class="btn btn-outline-light rounded-pill fs-5" style="width: 12rem">SHOP NOW</button>
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