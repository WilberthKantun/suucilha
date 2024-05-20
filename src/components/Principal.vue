<template>
  <v-app>
      <paginacion/>
        <section id="inicio" class="inicio">
        </section>
        <section id="acerca" style="background-color: transparent;">
          <v-container>
              <h1>Tu refugio en el Corazón de Valladolid, Yucatán</h1>
              <v-row>
                <v-col><h2>Sumérgete en una experiencia de hospedaje inigualable en Suucilha, un refugio paradisíaco ubicado en el corazón de Valladolid, Yucatán. Este exclusivo complejo departamental te ofrece mucho más que solo un lugar donde descansar; es un oasis de confort y lujo, diseñado para satisfacer hasta los más exigentes de los viajeros. Nuestro complejo, totalmente amueblado y equipado, te brinda la oportunidad de vivir la verdadera esencia de este encantador pueblo mágico. Cada detalle ha sido cuidadosamente seleccionado para asegurarnos de que tu estancia sea absolutamente placentera y memorable.</h2></v-col>
                <v-col>
                  Mapa
                </v-col>
              </v-row>
              <h1>Contacto</h1>
              <h2><v-icon icon="mdi-phone"/> 985 115 4225</h2>
              <h2><v-icon icon="mdi-email"/> suucilha.mx@gmail.com</h2>
            </v-container>
        </section>
        <section id="galeria">
          <v-container>
            <h1>Galería</h1>
            <v-row>
              <v-col cols="4" v-for="imagen in imagenes">
                <div class="image-container2">
                  <img 
                      :src="imagen.url"
                      class="image"
                      @click="abrirImagen(imagen)"
                      >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
        <v-dialog
        max-width="800"
        v-model="abrirImagenDialog">
        
        <v-card>
          <v-img
          :src="imagen.url"
          ></v-img>
          <v-btn icon @click="abrirImagenDialog=false" style="position: absolute; align-self: self-end;"><v-icon>mdi-close</v-icon></v-btn>
        </v-card>
        </v-dialog>
    </v-app>
</template>
<script>
export default {
  data() {
    return {
      imagen: '',
      abrirImagenDialog: false,
      imagenes: [
        {
          orden: 1,
          url:'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg'
        }, 
        {
          orden: 2,
          url:'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg'
        }, 
        {
          orden: 3,
          url:'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg'
        },
        {
          orden: 4,
          url:'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg'}
      ]
    }
  },
  methods: {
    abrirImagen(imagen) {
      this.imagen = imagen;
      this.abrirImagenDialog = true;
    }
  }
}
</script>
<style scoped>
.inicio{
  height: 100vh;
  background: url(@/assets/Principal.png) no-repeat center center fixed;
  background-size: cover;
}
h1, h2 {
  font-family: 'Times New Roman', Times, serif;
}
h1 {
  font-size: 30px;
  font-weight: 400;
}
h2 {
  font-size: 20px;
  font-weight: 100;
}
.image-container2{
    width: 300;
    height: 200px;
    display: flex;
}
.image-container img {
    max-width: auto;
    max-height: 100%;
}
.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>



