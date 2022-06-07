<script>
    import VerticalSpacer from "./VerticalSpacer.svelte";

    const brands = [
        {
            name: "Logos",
            logo: "/assets/logo/drip.png",
            link: "/Logos"
        },
        {
            name: "Apparel",
            logo: "/assets/logo/mg.jpg",
            link: "/Apparel"
        },
        {
            name: "Posters",
            logo: "/assets/logo/travis.jpg",
            link: "/Posters"
        },
        {
            name: "Covers",
            logo: "/assets/logo/drip.jpg",
            link: "/Covers"
        },
        {
            name: "Branding",
            logo: "/assets/logo/caramel.gif",
            link: "/Brands"
        }
    ]
</script>

<div class="background-image">
    <VerticalSpacer height="6" units={"rem"}/>
    <div class="text-center">
        <h1 class="francois-font">Check out our different categories!</h1>
    </div>
    <VerticalSpacer height="2" units={"rem"}/>
    <div class="container d-flex justify-content-evenly">
        {#each brands as details}
            <div class="d-inline-flex flex-column">
                <a href={details.link}>
                    <img src={details.logo} class="" alt={details.name} style="width: 200px">
                </a>
                <VerticalSpacer height="10"/>
                <span class="text-center fs-4">{details.name}</span>
            </div>
        {/each}
    </div>
</div>


<style>
    .background-image {
        background-image: url("/assets/banner/banner2.jpg");
        background-size: cover;
        min-height: 500px;
        max-height: 500px;
    }

    img {
        border: 2px solid black;
        border-radius: 30%;
        background: white;
    }

    img:hover {
        opacity: 0.7
    }

    div {
        color: white;
    }
</style>