<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
    </script>
</svelte:head>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
            <img src="/assets/banner/mg.jpg" class="d-block w-100 h-75" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="heading-size">CHECK OUT OUR CAREFULLY CRAFTED LOGOS</h1>
                <button class="px-4 btn btn-light" href="/Logos">
                    Show Logos
                </button>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
            <img src="/assets/banner/labyrinth.png" class="d-block w-100 h-75" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="heading-size">APPAREL DESIGNS USED BY LOCAL BRANDS</h1>
                <button class="px-4 btn btn-light" href="/Apparel">
                    Show Apparel
                </button>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
            <img src="/assets/banner/hero.jpg" class="d-block w-100 h-75" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="heading-size">BRANDING COMMISSIONS WITH THE HIGHEST QUALITY</h1>
                <button class="px-4 btn btn-light" href="/Brands">
                    Show Branding
                </button>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<style>
    .carousel .carousel-item {
        height: 600px;
        background: rgba(0, 0, 0, 0.6);
    }

    .carousel-item img {
        position: relative;
        object-fit: cover;
        top: 0;
        left: 0;
        min-height: 600px;
        opacity: 0.7;
    }

    .heading-size {
        font-size: 64px;
    }
</style>