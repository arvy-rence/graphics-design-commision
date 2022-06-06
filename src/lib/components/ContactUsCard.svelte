<script lang="ts">
    import type {IDeveloper} from "../types/Developer";

    export let developer: IDeveloper;
</script>


<div class="card border-info mx-3" style="width: 18rem;">
    <img src={developer.developerImageURL} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{developer.developerName}</h5>
        <p class="card-text">{developer.developerDescription}</p>
    </div>
    <div class="card-footer border-info">
        <div class="d-flex justify-content-center">
            <div class="row">
                <div class="col-4">
                    <a target="_blank" href="{developer.developerSocialLinks.twitter}" class="btn btn-outline-info">
                        <img src="/assets/logo/twitter-logo.png" width="30" alt="Twitter Logo">
                    </a>
                </div>
                <div class="col-4">
                    <a target="_blank" href="{developer.developerSocialLinks.facebook}" class="btn btn-outline-info">
                        <img src="/assets/logo/facebook-logo.png" width="30" alt="Facebook Logo">
                    </a>
                </div>
                <div class="col-4">
                    <a target="_blank"  href="{developer.developerSocialLinks.instagram}" class="btn btn-outline-info">
                        <img src="/assets/logo/instagram-logo.png" width="30" alt="Instagram Logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>