<template>
    <div class="mt-5 pt-5">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <h1 style="color: #7b2052; font-family:'norwester';"> commission prices </h1>
            <h4 style="color: #7b2052; padding-top: 5%; font-family:'norwester';">✦ Color Bust -$40 USD - $600 MXN ✦</h4>
        </div>

        <div class="d-flex flex-wrap align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-center"
                style="margin: 2em; max-height: 60rem; max-width: 24rem;" v-for="(descrip, indice) in colorBust"
                :key="indice">
                <img :src="descrip.ejemplos" class="img-thumbnail" alt="Img"
                    style="max-width: 30rem; max-height: 22rem; cursor: pointer;"
                    @click="openLightbox(descrip.ejemplos, 'colorBust')" />
            </div>
        </div>

        <div class="d-flex flex-column align-items-start justify-content-start" v-for="(descrip, indice) in colorBust"
            :key="indice" style="padding-left: 8%; padding-right: 25%;">
            <p class="card-text text-center text-wrap mt-2 " style="font-size: 25px; color: #7b2052;">{{
                descrip.restricciones }}</p>
        </div>

        <!-- Magic food -->
        <div class="d-flex flex-column align-items-center justify-content-center">
            <h4 style="color: #7b2052; padding-top: 5%; font-family:'norwester';">✦ Magic Food -$45 USD - $750 MXN ✦</h4>
        </div>

        <div class="d-flex flex-wrap align-items-center justify-content-center">

            <div class="d-flex flex-column align-items-center justify-content-center"
                style="margin: 2em; max-height: 60rem; max-width: 24rem;" v-for="(descrip, indice) in magicFood"
                :key="indice">
                <img :src="descrip.ejemplos" class="img-thumbnail" alt="Img"
                    style="max-width: 30rem; max-height: 22rem; cursor: pointer;"
                    @click="openLightbox(descrip.ejemplos, 'magicFood')" />
            </div>
        </div>
        <div class="d-flex flex-column align-items-start justify-content-start" v-for="(descrip, indice) in magicFood"
            :key="indice" style="padding-left: 8%; padding-right: 25%;">
            <p class="card-text text-center text-wrap mt-2" style="font-size: 25px; color: #7b2052;">{{
                descrip.restricciones }}</p>
        </div>

        <!-- Illustration -->
        <div class="d-flex flex-column align-items-center justify-content-center">
            <h4 style="color: #7b2052; padding-top: 5%; font-family:'norwester';">✦ Illustration ✦</h4>
            <h4 style="color: #7b2052; padding-top: 5%; font-family:'norwester';"> Flat Color - $55 USD - $800MXN </h4>
            <h4 style="color: #7b2052; padding-top: 2%; font-family:'norwester';"> Full Illustration - $ 80USD - $1200MXN</h4>
        </div>
        <div class="d-flex flex-wrap align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-center"
                style="margin: 2em; max-height: 60rem; max-width: 24rem;" v-for="(descrip, indice) in illustration"
                :key="indice">
                <img v-lazy="descrip.ejemplos" class="img-thumbnail" alt="Img"
                    style="max-width: 30rem; max-height: 22rem; cursor: pointer;"
                    @click="openLightbox(descrip.ejemplos, 'illustration')" />
            </div>
        </div>
        <div class="d-flex flex-column align-items-start justify-content-start" v-for="(descrip, indice) in illustration"
            :key="indice" style="padding-left: 8%; padding-right: 25%;">
            <p class="card-text text-center text-wrap mt-2" style="font-size: 25px; color: #7b2052;">{{
                descrip.restricciones }}</p>
        </div>

        <vue-image-lightbox v-if="lightboxOpen" :media="lightboxImages" :start-position="lightboxIndex"
            @onClosed="lightboxClosed" />
    </div>
</template>
  
<script>
import VueImageLightbox from 'vue-image-lightbox'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        VueImageLightbox,

    },
    data() {
        return {
            lightboxOpen: false,
            lightboxImages: [],
            lightboxIndex: 0,
            // Bustos
            colorBust: [{
                ejemplos: '../assets/ColorBust/IMG_1129.JPG',
                restricciones: "- portrait (flat color) of your character, may include clothing and accessories or just nothing.",
            },
            {
                ejemplos: '../assets/ColorBust/IMG_1134.JPG',
                restricciones: "- simple background (blurred) or a flat color",
            },
            {
                ejemplos: '../assets/ColorBust/IMG_1135.JPG',
                restricciones: "- comes in a large square format (1500 x 1500 jpg)",
            },
            {
                ejemplos: '../assets/ColorBust/IMG_1136.JPG',
                restricciones: "",
            },
            {
                ejemplos: '../assets/ColorBust/IMG_1137.JPG',
                restricciones: "",
            },

            ],
            // Comida
            magicFood: [{
                ejemplos: '../assets/MagicFood/IMG_0855.JPG',
                restricciones: "- Detailed, shaded illustration of your character on any food of your choice.",
            },
            {
                ejemplos: '../assets/MagicFood/IMG_0871.JPG',
                restricciones: "- The background would be a simple color of your choice.",
            },
            {
                ejemplos: '../assets/MagicFood/IMG_0995.JPG',
                restricciones: "- I work with any type of size depending on your preference and need.",
            },
            ],
            // Ilustracines
            illustration: [{
                ejemplos: '../assets/Illustration/DanoiverCommission.jpeg',
                restricciones: "- Completely rendered illustration, with one or more characters (maximum 4).",
            },
            {
                ejemplos: '../assets/Illustration/HenryDoeCommission.jpeg',
                restricciones: "- Completely free background of your choice, I can work on any type of idea you have.",
            },
            {
                ejemplos: '../assets/Illustration/IMG_1006.jpg',
                restricciones: "- I can work in any format you ask me for, whether for printing or any other need.",
            },
            {
                ejemplos: '../assets/Illustration/Krow_Commission_Illustration.jpg',
                restricciones: "- The more detailed jobs may take my time, but I know I can meet your expectations.",
            },
            {
                ejemplos: '../assets/Illustration/Krow_Commission_Illustration_flat.jpeg',
                restricciones: "",
            },
            {
                ejemplos: '../assets/Illustration/market_shop.png',
                restricciones: "",
            },
            {
                ejemplos: '../assets/Illustration/otoño.png',
                restricciones: "",
            },
            ]
        }
    },

    methods: {
        openLightbox(image, section) {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                this.lightboxImages = this[section].map(item => ({ src: item.ejemplos }));
                this.lightboxIndex = this[section].findIndex(item => item.ejemplos === image);
                this.lightboxOpen = true;
            };

        },
        lightboxClosed() {
            this.lightboxOpen = false;
        },

    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  
  