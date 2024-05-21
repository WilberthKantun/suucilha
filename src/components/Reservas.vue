<template>
    <v-app>
        <PaginacionAdmin/>
        <v-container>
            <v-card variant="tonal">
                <v-card-title>
                    <span class="headline">Reservas</span>
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
                                    <div style="color: #657F64" v-if="reserva.estado==='activo'">Activa para {{ reserva.cliente.nombre }} hasta el {{ reserva.fechaFin }}</div>
                                    <div v-else>Vencida para {{ reserva.cliente.nombre }} el {{ reserva.fechaFin }}</div>
                                    <div style="color: #657F64; font-weight: 600">MXN${{ reserva.costo }}</div>
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
        // Datos de las habitaciones para mostrar en la vista de reservas
        reservas: [
            {
                nombre: 'Estudio estándar',
                fechaInicio: '12 de mayo de 2024',
                fechaFin: '13 de mayo de 2024',
                costo: 2810,
                imagen: 'https://5.imimg.com/data5/PC/BL/MY-33192851/hotel-reservation-services-500x500.jpg',
                estado: 'activo',
                cliente: {
                    nombre: 'Wilberth',
                }
            },
            {
                nombre: 'Individual',
                fechaInicio: '20 de abril de 2024',
                fechaFin: '22 de abril de 2024',
                costo: 2560,
                imagen: 'https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/05/iStock-1068158510-scaled-e1669046834676.jpg',
                estado: 'vencido',
                cliente: {
                    nombre: 'Wilberth',
                }
            },
            {
                nombre: 'Doble',
                fechaInicio: '20 de abril de 2024',
                fechaFin: '22 de abril de 2024',
                costo: 3200,
                imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353818219.jpg?k=63190dc1f6ba735c4b03b9d5383955dd549860251395f7d8e10ac27dbae2d14a&o=&hp=1',
                estado: 'vencido',
                cliente: {
                    nombre: 'Wilberth',
                }
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
