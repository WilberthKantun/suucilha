<script>
</script>
<template>
    <v-toolbar fixed app color="#657F64" height="70">
        <v-row justify="center">
            <v-tool-bar-items>
                <v-btn text to="/reservas" class="s-button">Reservas</v-btn>
                <v-btn text to="/habitaciones" class="s-button">Habitaciones</v-btn>
                <v-btn icon to="/"><v-icon>mdi-logout</v-icon></v-btn>
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
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>