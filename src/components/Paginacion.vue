<script>
</script>
<template>
<v-toolbar app color="#657F64" height="50">
                <v-toolbar-items>
                    <v-btn text to="/principal" class="s-button">Inicio</v-btn>
                <v-btn text to="/acerca" class="s-button">Acerca de</v-btn>
                    <v-btn text to="/galeria" class="s-button">Galería</v-btn>
                <v-btn text @click="$router.push('/cuenta')" class="s-button">Cuenta</v-btn>
                </v-toolbar-items>
                <v-img
        src="@/assets/logon.svg"
      />
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