<script lang="ts">

import { defineComponent, onMounted, ref  } from 'vue'
import {   getSamsungById,getIphoneById } from '../services/base-skins.service'
 import coverSkins from './cover-skins.vue'
 
export default defineComponent({
    name:"skinsPage",
  components: {  coverSkins },
    setup() {
         
 const samsung =ref(getSamsungById())   
 const Iphone =   ref( getIphoneById() ) 
 let data=ref()
 function init( ) {
     
    
  console.log('im here 2',Iphone.value)
    if (Iphone.value!==undefined) {
        console.log('im here',Iphone.value)
         data.value=Iphone.value
    }else{
        data.value=samsung.value
    }
     

 }
 onMounted(init);
 return { data,samsung,Iphone } } 

})
</script>

<template>
 
  <cover-skins :data="data  "></cover-skins>
 
</template>

<style scoped>
 

</style>