<script lang="ts">
 import { defineComponent } from 'vue'
import samsungImge1 from '../assets/img/Samsung Galaxy S22 ULTRA SIGNATURE Camouflage Dark Slate Skin.webp' 
 import samsungImge2 from '../assets/img/Samsung Galaxy S22 ULTRA SIGNATURE Rainy Night in Bangkok Skin.webp' 
  import samsungImge3 from '../assets/img/Samsung Galaxy S22 ULTRA SIGNATURE Blue HEXAGON Skin.webp' 
  import samsungImge4 from '../assets/img/Samsung Galaxy S22 ULTRA SIGNATURE Abstract Velvet Skin.webp' 
  import samsungImge5 from '../assets/img/Samsung Galaxy S22 ULTRA BRUSHED TITANIUM Metallic Skin.webp' 
 export default defineComponent  ({
    name: "skinsImages",
      components:  {},

    setup() {
        return {samsungImge1,samsungImge2,samsungImge3,samsungImge4,samsungImge5};
    },
})
</script>
<template  >
     <div class="img" >
   <a> <img :src="samsungImge1" class="img-one"/> </a>
   <a> <img :src="samsungImge2"/> </a>
   <a> <img :src="samsungImge3"/> </a>
   <a> <img :src="samsungImge4"/> </a>
   <a> <img :src="samsungImge5"/> </a>
    </div>
 </template>
<style scoped>
 
  .img{
      display: flex;
    justify-content:space-around;
   height: 250px;
    cursor: pointer;
     padding: 50px;  
  }
 a{
    display:flex;     
 }
 .img-one:hover{ 
           background: url("../assets/img/Samsung Galaxy S22 ULTRA SIGNATURE Abstract Velvet Skin.webp") no-repeat;
 }
</style>