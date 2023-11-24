<template>
    <div class="d-flex flex-row justify-content-evenly">
        <div class="card" v-for="(imagen, indice) in imagenes" :key="indice">
            <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img :src="imagen" class="img-fluid" alt="Imagen"/>
                <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
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
    data(){
        return{
            imagenes:[
            "../assets/IMG_0625.JPG",
            "../assets/IMG_0723.JPG",
            "../assets/IMG_0760.JPG",
            "../assets/IMG_0844.PNG"
        ]
        }
    },
    methods: {
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  
  