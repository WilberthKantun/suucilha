<template>
  <v-app class="inicio">
      <Paginacion :logged="$globalState.logged"/>
    </v-app>
</template>
<style scoped>
.inicio{
  height: 100vh;
  background: url(@/assets/Principal.png) no-repeat center center fixed;
  background-size: cover;
}

</style>
<script>
import Paginacion from './Paginacion.vue'

export default {
  components: {
    Paginacion
  }
}
</script>



