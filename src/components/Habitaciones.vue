<template>
    <v-app>
        <PaginacionAdmin/>
        <v-container>
            <v-card variant="tonal">
                <v-card-title>
                    <span class="headline">Habitaciones</span>
                </v-card-title>
                <v-card v-for="habitacion in habitaciones" :key="habitacion.id" class="mb-4 mx-4" variant="elevated">
                    <v-layout row>
                        <div class="image-container">
                            <img :src="'data:image/jpeg;base64,'+habitacion.imagen1">
                        </div>
                        <v-layout column justify-space-between>
                            <div>
                                <v-card-title>{{ habitacion.nombre }}</v-card-title>
                                <v-card-text color="primary">
                                    <span>{{ habitacion.descripcion }}</span>
                                </v-card-text> 
                                <v-btn
                                    @click="editar(habitacion)"
                                    variant="text"
                                    color="#657F64" 
                                    rounded="lg"
                                    density="comfortable"
                                    >Editar
                                </v-btn>
                            </div>
                        </v-layout>
                    </v-layout>
                </v-card>
            </v-card>
        </v-container>
    </v-app>
    <v-dialog
        v-model="editarDialog"
        max-width="1000"
        >
        <v-card>
            <v-card-title primary-title style="text-align: center; margin-top: 2vh;">
                <h2>Editar habitación</h2>
            </v-card-title>
            <v-row style="justify-content: center; align-content: center; margin: 30px">
                <v-col cols="6" sm="12" md="8" lg="6">
                        <v-text-field
                            label="Nombre"
                            v-model="nombre"
                            dense
                            outlined
                            color="#657F64"
                            class="custom-field"
                        >
                        </v-text-field>
                        <v-textarea
                            label="Descripción"
                            v-model="descripcion"
                            dense
                            outlined
                            color="#657F64"
                            class="custom-field">
                        </v-textarea>
                        <v-textarea
                            label="Características"
                            v-model="caracteristicas"
                            dense
                            outlined
                            color="#657F64"
                            class="custom-field"
                        >
                        </v-textarea>
                        <v-text-field
                            label="Costo"
                            v-model="costo"
                            dense
                            outlined
                            color="#657F64"
                            type="number"
                            min="1"
                            class="custom-field"
                            prefix="MXN$"
                        ></v-text-field>
                        <v-text-field
                            label="Personas"
                            v-model="personas"
                            dense
                            outlined
                            color="#657F64"
                            type="number"
                            min="1"
                            max="4"
                            class="custom-field">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="12" md="8" lg="6">
                        <v-row style="justify-content: center; align-items: center;"><h2>Imágenes</h2></v-row>
                        <v-row style="justify-content: center; align-items: center;">
                            <v-col class="image-container" cols="12" sm="6" md="4" lg="6">
                                <input type="file" ref="fileInput" @change="uploadImage(1,$event)" style="display: none;">
                                    <img v-if="imagen1" :src="'data:image/jpeg;base64,'+imagen1" @click="openFileDialog(1)" >
                                    <img v-else src="@/assets/galeria.png" @click="openFileDialog(1)" >
                            </v-col>
                            <v-col class="image-container" cols="12" sm="6" md="4" lg="6">
                                <input type="file" ref="fileInput2" @change="uploadImage(2,$event)" style="display: none;">
                                <img v-if="imagen2" :src="'data:image/jpeg;base64,'+imagen2" @click="openFileDialog(2)" >
                                <img v-else src="@/assets/galeria.png" @click="openFileDialog(2)" >
                            </v-col>
                        </v-row>
                        <v-row style="justify-content: center; align-items: center;">
                            <v-col class="image-container" cols="12" sm="6" md="4" lg="6">
                                <input type="file" ref="fileInput3" @change="uploadImage(3,$event)" style="display: none;">
                                <img v-if="imagen3" :src="'data:image/jpeg;base64,'+imagen3" @click="openFileDialog(3)" >
                                <img v-else src="@/assets/galeria.png" @click="openFileDialog(3)" >
                            </v-col>
                            <v-col class="image-container" cols="12" sm="6" md="4" lg="6">
                                <input type="file" ref="fileInput4" @change="uploadImage(4,$event)" style="display: none;">
                                <img v-if="imagen4" :src="'data:image/jpeg;base64,'+imagen4" @click="openFileDialog(4)" >
                                <img v-else src="@/assets/galeria.png" @click="openFileDialog(4)" >
                            </v-col>
                        </v-row>
                    </v-col>              
                
            </v-row>
            
                <template v-slot:actions>
                    <div>
                        <v-btn
                            color="#657F64"
                            class="ms-auto"
                            text="Guardar"
                            @click="guardarHabitacion()"
                        ></v-btn>
                        <v-btn
                            color="error"
                            class="ms-auto"
                            text="Cerrar"
                            @click="editarDialog = false"
                        ></v-btn>
                    </div>
                </template>
        </v-card>
    </v-dialog>
</template>
<script>
import { id } from 'vuetify/locale';

  export default {
  data() {
    return {
        id: null,
        fechaInicio: null,
        fechaFin: null,
        editarDialog: false,
        nombre: '',
        descripcion: '',
        costo: 0,
        imagen1: '',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagenBase64: '',
        personas: 0,
        caracteristicas: [],
        habitaciones: [
            {
                id: 1,
                nombre: 'Estudio estándar', 
                descripcion: 'Habitación con cama matrimonial, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2810,
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: '',
                imagen2: '',
                imagen3: '',
                imagen4: '',
            },
            {
                id: 2,
                nombre: 'Individual',
                descripcion: 'Habitación con cama individual, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 2560, 
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: '',
                imagen2: '',
                imagen3: '',
                imagen4: '',
            },
            {
                id: 3,
                nombre: 'Doble',
                descripcion: 'Habitación con dos camas individuales, baño privado, aire acondicionado, televisión por cable y wifi.',
                costo: 3200, 
                personas: 2,
                caracteristicas: ['Cama matrimonial', 'Baño privado', 'Aire acondicionado', 'Televisión por cable', 'Wifi'],
                imagen1: '',
                imagen2: '',
                imagen3: '',
                imagen4: '',}
        ],
        };
  },
  methods: {
    guardarHabitacion(){
        if(this.id){
            const index = this.habitaciones.findIndex(habitacion => habitacion.id === this.id);
            this.habitaciones[index].nombre = this.nombre;
            this.habitaciones[index].descripcion = this.descripcion;
            this.habitaciones[index].costo = this.costo;
            this.habitaciones[index].imagen1 = this.imagen1;
            this.habitaciones[index].imagen2 = this.imagen2;
            this.habitaciones[index].imagen3 = this.imagen3;
            this.habitaciones[index].imagen4 = this.imagen4;
            this.habitaciones[index].personas = this.personas;
            this.habitaciones[index].caracteristicas = this.caracteristicas;
        } else {
            this.habitaciones.push({
                id: this.habitaciones.length + 1,
                nombre: this.nombre,
                descripcion: this.descripcion,
                costo: this.costo,
                imagen1: this.imagen1,
                imagen2: this.imagen2,
                imagen3: this.imagen3,
                imagen4: this.imagen4,
                personas: this.personas,
                caracteristicas: this.caracteristicas,
            });
        }
        this.editarDialog = false;
    },
    editar(habitacion) {
        this.id = habitacion.id;
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
        this.editarDialog = true;
    },
    openFileDialog(imagenSeleccionada) {
    switch (imagenSeleccionada) {
        case 1: this.$refs.fileInput.click(); break;
        case 2: this.$refs.fileInput2.click(); break;
        case 3: this.$refs.fileInput3.click(); break;
        case 4: this.$refs.fileInput4.click(); break;
        default: break;
    }
},

uploadImage(imagenSeleccionada, event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado desde el evento
    const reader = new FileReader();

    reader.onloadend = () => {
        const imagenBase64 = reader.result.replace('data:', '').replace(/^.+,/, '');
        switch (imagenSeleccionada) {
            case 1: this.imagen1 = imagenBase64; break;
            case 2: this.imagen2 = imagenBase64; break;
            case 3: this.imagen3 = imagenBase64; break;
            case 4: this.imagen4 = imagenBase64; break;
            default: break;
        }
    };
    reader.readAsDataURL(file);
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
    width: 200px;
    height: 200px;
    display: inline-block;
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
