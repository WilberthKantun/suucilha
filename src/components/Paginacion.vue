<script>
</script>
<template>
    <v-toolbar fixed app color="#657F64" height="70">
        <v-row justify="center">
            <v-tool-bar-items>
                <v-btn text to="/" class="s-button">Inicio</v-btn>
                <v-btn text to="/acerca" class="s-button">Acerca de</v-btn>
                <v-btn text to="/galeria" class="s-button">Galería</v-btn>
                <v-btn v-if="logged" text to="/cuenta" class="s-button">Cuenta</v-btn>
                <v-btn v-if="logged" text to="/reservar" class="s-button">Reservar</v-btn>
                <v-btn v-if="!logged" text to="/login" class="s-button">Iniciar sesión</v-btn>
            </v-tool-bar-items>
        </v-row>
    </v-toolbar>
</template>
<style scoped>
.s-button {
    color: #DED9C4;
    font-size: 24px;
    font-weight: 500;
}
.s-button:hover {
    color: white;
}
</style>
<script>
export default {
  props: {
    logged: {
      type: Boolean,
      required: true,
    }
  }
}
</script>