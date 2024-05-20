<template>
    <v-app>
        <Paginacion/>
        <v-container>
            <v-card variant="tonal">
                <v-card-title>
                    <span class="headline">Habitaciones</span>
                </v-card-title>
                <v-card v-for="habitacion in habitaciones" :key="habitacion.id" class="mb-4 mx-4" variant="elevated">
                    <v-layout row>
                        <div class="image-container">
                            <img :src="habitacion.imagen1">
                        </div>
                        <v-layout column justify-space-between>
                            <div>
                                <v-card-title>{{habitacion.nombre}}</v-card-title>
                                <v-card-text color="primary">
                                    <span>{{ habitacion.descripcion }}</span>
                                </v-card-text> 
                                <v-btn
                                    @click="abrirvVerMas(habitacion)"
                                    variant="text"
                                    color="#657F64" 
                                    rounded="lg"
                                    density="comfortable"
                                    >Ver más
                                </v-btn>
                            </div>
                        </v-layout>
                    </v-layout>
                </v-card>
            </v-card>
        </v-container>
    </v-app>
    <v-dialog
        v-model="verMasDialog"
        max-width="1000"
        >
        <v-card
        >
            <v-layout row>
                <v-layout column justify-space-between>
                    <div>
                        <div class="image-container">
                            <img 
                                :src="imagen"
                                class="image">
                        </div>
                        <div>
                            <v-layout row>
                                <div class="image-container2">
                                    <img 
                                        :src="imagen1"
                                        class="image"
                                        @click="imagen = imagen1"
                                        >
                                </div>
                                <div class="image-container2">
                                    <img 
                                        :src="imagen2"
                                        class="image"
                                        @click="imagen = imagen2"
                                        >
                                </div>
                                <div class="image-container2">
                                    <img 
                                        :src="imagen3"
                                        class="image"
                                        @click="imagen = imagen3"
                                        >
                                </div>
                                <div class="image-container2">
                                    <img 
                                        :src="imagen4"
                                        class="image"
                                        @click="imagen = imagen4"
                                        >
                                </div>
                            </v-layout>
                        </div>
                    </div>
                </v-layout>
                <v-layout column justify-space-between>
                    <div>
                        <v-card-title>{{nombre}}</v-card-title>
                        <v-card-text>
                            <div class="space-between-container">
                                <div>
                                    <span>{{ descripcion }}</span>
                                </div>
                                <div>
                                    <ul>
                                        <li v-for="caracteristica in caracteristicas"><h4>{{ caracteristica }}</h4></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style="color: #657F64; font-weight: 400;">Personas: {{ personas }}</h4>
                                    <h4 style="color: #657F64;">MXN{{ costo }}</h4>
                                </div>
                            </div>
                        </v-card-text>
                    </div>
                </v-layout>
            
            </v-layout>
            
                <template v-slot:actions>
                    <div>
                        <v-btn
                            color="#657F64"
                            class="ms-auto"
                            text="Reservar"
                            to="/paypal"
                        ></v-btn>
                        <v-btn
                            color="error"
                            class="ms-auto"
                            text="Cerrar"
                            @click="verMasDialog = false"
                        ></v-btn>
                    </div>
                </template>
        </v-card>
    </v-dialog>
</template>
<script>
  export default {
  data() {
    return {
        verMasDialog: false,
        nombre: '',
        descripcion: '',
        costo: 0,
        imagen1: '',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen: '',
        personas: 0,
        caracteristicas: [],
        habitaciones: [
            {
                nombre: 'Estudio estándar', 
                descripcion: 'Habitación con cama matrimonial, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2810,
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: 'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg',
                imagen2: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg',
                imagen3: 'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg',
                imagen4: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg'
            },
            {
                nombre: 'Individual',
                descripcion: 'Habitación con cama individual, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2560, 
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg',
                imagen2: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg',
                imagen3: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg',
                imagen4: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg'
            },
            {
                nombre: 'Doble',
                descripcion: 'Habitación con dos camas individuales, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 3200, 
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1',
                imagen2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1',
                imagen3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1',
                imagen4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1'
            }
        ],
        };
  },
  methods: {
    abrirvVerMas(habitacion) {
        this.nombre = habitacion.nombre;
        this.descripcion = habitacion.descripcion;
        this.costo = habitacion.costo;
        this.imagen1 = habitacion.imagen1;
        this.imagen2 = habitacion.imagen2;
        this.imagen3 = habitacion.imagen3;
        this.imagen4 = habitacion.imagen4;
        this.imagen = this.imagen1;
        this.personas = habitacion.personas;
        this.caracteristicas = habitacion.caracteristicas;
        console.log(habitacion);
        this.verMasDialog = true;
    },
},
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
.image-container2{
    width: 75px;
    height: 75px;
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
