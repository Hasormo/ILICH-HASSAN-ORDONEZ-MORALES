<template>
  <div class="app-container">
  <h1>GRUPO DE LOS AVENTUREROS MAS FUERTES DEL GREMIO  - ELDORIA</h1>
  <p>Este es un tablón en donde se visualizará a los jugadores mas fuertes del club de juegos de rol ELDORIA; Aquellos que lográron alcanzar estatus de grandeza a medida que el gremio de aventureros los registrara como defensores en nuestro mundo de magia y fantasia medieval.</p>
  <h2>
    Usuario: {{ nameUser }} <br>
    Posición {{ contador+1 }}
  </h2>    
  <h3 class="precio">Puntos: {{ usuarios[contador].point }}</h3>

  <div v-if="usuarios[contador].activity==true" 
  class="Activo s1">(Activo)</div>
  <div v-else class="Retirado s1 ">(Retirado)</div>

  

  <img :src="imagenUser" alt=""/>
  <button @:click="eventClick">Siguiente ({{ contador+1}}/{{ total }})</button>
</div>

</template>





<script setup>
import {computed, ref} from 'vue'
import {usuarios} from './Datos.js'

const contador=ref(0)
const total=usuarios.length;
//const ruta="https://www.html6.es/img/rey_";
const ruta='https://randomuser.me/api/portraits/men/';

const eventClick=()=>{
  contador.value++;
  if(contador.value>=total){
      contador.value=0
  }
}
const nameUser=computed(()=>{
  //const str=usuarios[contador.value].name.toLowerCase()
  const n=usuarios[contador.value].name.length
  const str=usuarios[contador.value].name.substring(3,n)
  const str2=str.toLowerCase()
  //return str.substring(0,1).toUpperCase()+str
  //return usuarios[contador.value].name
  return str2.substring(0,1).toUpperCase()+str2.substring(1,n)
})
const imagenUser=computed(()=>{
  //return ruta+productos[contador.value].nombre.toLowerCase()+".png"
  return `${ruta}${usuarios[contador.value].name.substring(0,2)}.jpg`
})
const nuevoPuntaje=computed(()=>{
  return Number(usuarios[contador.value].point/1.10).toFixed(2)
})

</script>






<style scoped>
.Activo{
  background-color: green ;
}
.Retirado{
  background-color: red;
}
.s1{
  color: white;
  padding: 4px 25px;
  font-size: 0.9em;
  border-radius: 4px;
  margin: 5px 0 10px;
  display: inline-block;
}
.score img{
  width: 50px;
  margin: 20px 5px;
}

.app-container {
  /* Ajusta la URL a la ubicación de tu imagen en la carpeta 'public' */
  background-image: url('https://worldofwarcraft.judgehype.com/screenshots/judgehype/2020/1599489385/03.jpg');
  /* Ajusta el tamaño del fondo según tus necesidades */
  background-size: cover;
  /* Ajusta la posición del fondo según tus necesidades */
  background-position: center;
  /* Establece una altura mínima para asegurar que el contenido sea visible */
  min-height: 100vh;
  /* Otros estilos según tus necesidades */
}
</style>