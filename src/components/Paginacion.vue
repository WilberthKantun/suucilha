<script>
</script>
<template>
    <v-toolbar app color="#657F64" height="70">
        <v-row style="justify-content: center;">
            <v-tool-bar-items>
                <v-btn text to="/principal" class="s-button">Inicio</v-btn>
                <v-btn text to="/acerca" class="s-button">Acerca de</v-btn>
                <v-btn text to="/galeria" class="s-button">Galería</v-btn>
                <v-btn text to="/cuenta" class="s-button">Cuenta</v-btn>
                <v-btn text to="/reservar" class="s-button">Reservar</v-btn>
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