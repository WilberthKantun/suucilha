<script setup>
  import Paginacion from './Paginacion.vue'
</script>
<template>
    <v-app>
        <Paginacion :logged="$globalState.logged"/>
        <v-container>
            <v-card variant="tonal">
                <v-card-title>
                    <span class="headline">Detalles de la cuenta</span>
                </v-card-title>
                <v-card-text>
                    <v-col cols="12" sm="8" md="6" lg="4">
                        <v-text-field 
                        label="Nombre" 
                        v-model="nombre"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        prepend-inner-icon="mdi mdi-account"
                        class="custom-field"
                        ></v-text-field>
                        <v-text-field 
                        label="Apellido" 
                        v-model="apellido"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        prepend-inner-icon="mdi mdi-account"
                        class="custom-field"
                        ></v-text-field>
                        <v-text-field
                        disabled
                        label="Correo electrónico"
                        v-model="correo"
                        prepend-inner-icon="mdi mdi-at"
                        variant="outlined"
                        rounded="lg"
                        density="comfortable"
                        class="custom-field"
                        ></v-text-field>
                        <div v-if="cambiarContra==true">
                            <v-text-field
                            label="Contraseña actual" 
                            v-model="contrasena" 
                            type="password"
                            prepend-inner-icon="mdi mdi-lock"
                            variant="outlined"
                            rounded="lg"
                            density="comfortable"
                            class="custom-field"
                            ></v-text-field>
                            <v-text-field
                            label="Nueva contraseña" 
                            v-model="nuevaContrasena" 
                            type="password"
                            prepend-inner-icon="mdi mdi-lock"
                            variant="outlined"
                            rounded="lg"
                            density="comfortable"
                            class="custom-field"
                            ></v-text-field>
                            <v-text-field
                            label="Repite la nueva contraseña" 
                            v-model="rNuevaContrasena" 
                            type="password"
                            prepend-inner-icon="mdi mdi-lock"
                            variant="outlined"
                            rounded="lg"
                            density="comfortable"
                            class="custom-field"
                            ></v-text-field>
                        </div>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-btn 
                    color="white" 
                    variant="elevated" 
                    prepend-icon="mdi-lock" 
                    rounded="lg"
                    density="comfortable"
                    @click="cambiarContra=!cambiarContra"
                    >Cambiar contraseña</v-btn>
                    <v-btn 
                    color="#657F64" 
                    variant="elevated" 
                    prepend-icon="mdi-content-save" 
                    rounded="lg"
                    density="comfortable"
                    >Guardar</v-btn>
                    <v-btn 
                    color="error" 
                    variant="elevated" 
                    prepend-icon="mdi-logout" 
                    rounded="lg"
                    density="comfortable"
                    @click="logout"
                    >Cerrar sesión</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
        <v-container>
            <v-card variant="tonal">
                <v-card-title>
                    <span class="headline">Mis reservas</span>
                </v-card-title>
                <v-card v-for="reserva in reservas" :key="reserva.id" class="mb-4 mx-4" variant="elevated">
                    <v-layout row>
                        <div class="image-container">
                            <img :src="reserva.imagen">
                        </div>
                        <v-layout column justify-space-between>
                            <div>
                                <v-card-title>{{reserva.nombre}}</v-card-title>
                                <v-card-text color="primary">
                                    <span style="color: #657F64" v-if="reserva.estado === 'activa'">Activa del {{reserva.fechaInicio}} al {{reserva.fechaFin}}</span>
                                    <span v-else-if="reserva.estado ==='inactiva'">Vencida el {{ reserva.fechaFin }}</span>
                                    <span v-else style="color: gray">Cancelada</span>
                                    <div v-if="reserva.estado === 'activa'">
                                        <v-btn color="error" variant="tonal" class="mt-4">Cancelar</v-btn>
                                    </div>
                                </v-card-text> 
                            </div>
                        </v-layout>
                    </v-layout>
                </v-card>
            </v-card>
        </v-container>
    </v-app>

</template>
<script>
  export default {
  data() {
    return {
        nombre: 'Wilberth',
        apellido: 'Kantun',
        correo: 'kantunlizama.wilberth@gmail.com',
        contrasena: '***',
        nuevaContrasena: '',
        rNuevaContrasena: '',
        cambiarContra: false,
        reservas: [
            {
                nombre: 'Estudio estándar', 
                fechaInicio: '12 de mayo de 2024', 
                fechaFin: '13 de mayo de 2024', 
                costo: 2810, 
                estado: 'activa',
                imagen: 'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg'
            },
            {
                nombre: 'Individual', 
                fechaInicio: '20 de abril de 2024', 
                fechaFin: '22 de abril de 2024', 
                costo: 2560, 
                estado: 'inactiva',
                imagen: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg'
            },
            {
                nombre: 'Doble', 
                fechaInicio: '10 de marzo de 2024', 
                fechaFin: '12 de marzo de 2024', 
                costo: 3200, 
                estado: 'inactiva',
                imagen: 'https://financesonline.com/uploads/2022/08/hotel-booking.png'
            },
        ],
        };
  },
  methods: {
    logout(){
        this.$globalState.logged=false;
        this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.image-container {
    width: 300px;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.image-container img {
    max-width: auto;
    max-height: 100%;
}
</style>
