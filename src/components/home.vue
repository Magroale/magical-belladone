<template>
    <div>
        <div class="bg-image d-flex justify-content-center align-items-center"
            style="background-image: url('../assets/IMG_1141.JPG'); max-height: 100vh; min-height: 100vh;">
            <h1 class="text-white text-center" style="font-size: 5rem; width: 25rem; font-family:'norwester';">MAGICAL
                BELLADONE</h1>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 pt-1" style="">
            <div class="d-flex justify-content-center mb-3 mb-md-0">
                <img :src='imagen' class="img-fluid" alt="img" style="max-width:50vh; " />
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center text-center" style="max-width:50vh;">
                <h2 style="font-family: 'Franklin Gothic', sans-serif; color: #7b2052;" class="mb-3">
                    About Me
                </h2>
                <p class="fs-5" style="font-family: 'Franklin Gothic', sans-serif; color: #7b2052;">
                    {{ this.aboutme }}
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            imagen: '../assets/IMG_1121.PNG',
            aboutme: "Hello! My name is Belladone but you can refer to me as Bella, I am a freelance magical illustrator who loves to create illustration filled with Magic Here you can get information about me and my art. Enjoy your stay in this beautiful hell ~"
        }
    },
    methods: {}
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-image {
    position: relative;
}

.bg-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets_statics/image.png');
    /* Reemplaza con la ruta de tu textura de ruido */
    opacity: 0.2;
    /* Ajusta la opacidad según tus preferencias */
    pointer-events: none;
    /* Evita que el elemento de ruido interfiera con los eventos */
}
</style>
  
  