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
                            <img :src="habitacion.imagen">
                        </div>
                        <v-layout column justify-space-between>
                            <div>
                                <v-card-title>{{habitacion.nombre}}</v-card-title>
                                <v-card-text color="primary">
                                    <span>{{ habitacion.descripcion }}</span>
                                </v-card-text> 
                                <v-btn
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

</template>
<script>
  export default {
  data() {
    return {
        habitaciones: [
            {
                nombre: 'Estudio estándar', 
                descripcion: 'Habitación con cama matrimonial, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2810, 
                imagen: 'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg'
            },
            {
                nombre: 'Individual',
                descripcion: 'Habitación con cama individual, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2560, 
                imagen: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg'
            },
            {
                nombre: 'Doble',
                descripcion: 'Habitación con dos camas individuales, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 3200, 
                imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1'
            }
        ],
        };
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
.image-container img {
    max-width: auto;
    max-height: 100%;
}
</style>
