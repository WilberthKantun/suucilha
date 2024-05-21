<template>
  <v-app class="inicio">
    <Paginacion :logged="$globalState.logged"/>
          <v-container class="contenedor">
              <div class="ma-16">
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
              </div>
            </v-container>
    </v-app>
</template>
<script></script>
<style scoped>
.inicio{
  height: 100vh;
  background: url(@/assets/Principal.png) no-repeat center center fixed;
  background-size: cover;
}
.contenedor {
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
}
h1, h2 {
  font-family: 'Times New Roman', Times, serif;
  text-shadow: black 2px 2px 2px;
}
h1 {
  color: #DED9C4;
  font-size: 30px;
  font-weight: 400;
}
h2 {
  font-size: 24px;
  font-weight: 100;
}
</style>



