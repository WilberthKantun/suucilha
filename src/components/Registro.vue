<template>
    <v-app style="background-color: #657f64;">
        <v-row style="justify-content: center; align-items: center;">
            <v-col cols="3" sm="8" md="6" lg="3" class="text-center">
        <v-card class="elevation-12" style="background-color: #ded9c4;">
            <v-card-text class="ma-3">
                <div class="mb-4">
                    <v-row style="justify-content: center;">
                        <h1>Bienvenido a Suucilha</h1>
                    </v-row>
                    <v-row style="justify-content: center;">
                        <img src="../assets/logov.svg">
                    </v-row>
                    <v-row style="justify-content: center;">
                        <h2>Regístrate</h2>
                    </v-row>
                </div>
                <form>
                    <v-text-field
                        label="Nombre"
                        v-model="nombre"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        prepend-inner-icon="mdi-account"
                        class="custom-field">
                    </v-text-field>
                    <v-text-field
                        label="Apellido"
                        v-model="apellido"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        prepend-inner-icon="mdi-account"
                        class="custom-field">
                    </v-text-field>
                    <v-date-input
                        label="Fecha fin"
                        v-model="fecha_nacimiento"
                        prepend-inner-icon="mdi-calendar" 
                        variant="outlined"
                        density="comfortable"
                        rounded="lg"
                        style="color: #657F64;"
                        prepend-icon=""
                        ></v-date-input>
                    <v-text-field
                        label="Correo"
                        v-model="email"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        prepend-inner-icon="mdi-email"
                        class="custom-field"
                    ></v-text-field>
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
                        label="Repetir contraseña"
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
                        @click="$router.push('/login')"
                        >Registrarse</v-btn>
                    </v-card-actions>
                    <h3 class="text-center">
                    ¿Ya tienes una cuenta?
                </h3>
                <h3 class="text-center">
                    <router-link to="/login">
                        Inicia sesión
                    </router-link>
                </h3>
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
            password: '',
            repassword: '',
            nombre: '',
            fecha_nacimiento: null,
            apellido: '',

        }
    },
}
</script>

<style scoped>
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
