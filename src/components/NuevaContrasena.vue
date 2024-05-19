<template>
    <v-app style="background-color: #657f64;">
        <v-row style="justify-content: center; align-items: center;">
            <v-col cols="3" sm="8" md="6" lg="3" class="text-center">
        <v-card class="elevation-12" style="background-color: #ded9c4;">
            <v-card-text class="ma-3">
                <div class="mt-4 mb-8">
                    <v-row style="justify-content: center;">
                        <img src="../assets/logov.svg">
                    </v-row>
                    <v-row style="justify-content: center;">
                        <h2>Nueva contraseña</h2>
                        
                    </v-row>
                </div>
                <h3>Introduce tu nueva contraseña</h3>
                <form>
                    <v-text-field
                    label="Contraseña"
                    v-model="password"
                    variant="outlined"
                    type="password"
                    rounded="lg"
                    density="comfortable"
                    prepend-inner-icon="mdi-lock"
                    class="custom-field"
                    ></v-text-field>
                    <v-text-field
                    label="Confirmar contraseña"
                    v-model="repassword"
                    variant="outlined"
                    type="password"
                    rounded="lg"
                    density="comfortable"
                    prepend-inner-icon="mdi-lock"
                    class="custom-field"
                    ></v-text-field>
                </form>
                    <v-card-actions class="text-center">
                        <v-btn style="justify-content: center;"
                        block
                        color="#657F64" 
                        variant="elevated"
                        rounded="lg"
                        @click="$router.push('/')"
                        >Aceptar</v-btn>
                    </v-card-actions>
                    <v-row style="justify-content: end;" class="mt-4">
                        <v-btn
                        color="#657F64"
                        variant="elevated"
                        rounded="lg"
                        icon="mdi-arrow-left"
                        @click="$router.push('/confirmar_codigo')"
                        ></v-btn>
                    </v-row>
        </v-card-text>
    </v-card>
</v-col>
        </v-row>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
}
</script>

<style scoped>
.custom-field {
    color: #657F64;
}
.contenedor {
    display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #657f64;
  flex-direction: column;
}

h1,h2 {
    color: #657F64;
    font-family: Georgia, 'Times New Roman', Times, serif
}
h1 {
    font-size: 20px;
}
h2 {
    font-size: 16px;
}
h3 {
    color: #657F64;
    font-size: 12px;
    font-weight: 400;

}
img {
    height: 100px;
    width: auto;
    
}
</style>
