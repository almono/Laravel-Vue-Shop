<template>
    <div class="container">
        <b-jumbotron header="Vue Shopping" lead="Simple vue application for shopping">
            <hr class="my-4">
            <b-btn variant="primary" href="https://bootstrap-vue.js.org/">Products</b-btn>
        </b-jumbotron>
        <b-card-group deck >
            <b-card title="Title" img-src="https://www.t-systems.com/image/756224/large1x1/fc/200/200/c5da96a98d100550569846a93c4756c2/vB/im-mc-bg-smart-sd-wan-png.jpg" img-alt="Image" img-top>
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
            </b-card>

            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
            </b-card>

            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
            </b-card>
            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>
