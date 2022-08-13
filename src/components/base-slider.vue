<template>
 
<div><button @click="prev" class="button"><previous-heroicon class="svg"></previous-heroicon></button></div>
<div v-for="(slid,index) in tempSlide" :key="index">
   <router-link to="/skinsPage"> 
   <button @click="getId(slid.id)" >
 <base-slide :slidData="slid"></base-slide>
  </button>
 </router-link>
 
</div>
 <div><button @click="next" class="button"><next-heroicon class="svg"></next-heroicon></button></div>
   
</template>
<script lang="ts">
import {getIphoneData,setIphoneById} from '../services/base-skins.service'

import { defineComponent, onMounted, ref } from 'vue'
import previousHeroicon from './previous-heroicon.vue'
 import baseSlide from './base-slide.vue'
import NextHeroicon from './next-heroicon.vue'
export default defineComponent({
 
  components: { baseSlide ,previousHeroicon, NextHeroicon},
    setup() {
        let currentSlide =ref(5)
        let tempIndex =ref(0)
        let tempSlide =ref([])
          let IphoneData =ref(
           getIphoneData()
          );

            function getId (param:number) {
       setIphoneById(param)

       console.log('param',param)
    }
     
        function initSlids(){
            tempSlide.value=[];
            for(let i=tempIndex.value;i < IphoneData.value.length;i++){
              if (i<currentSlide.value) {
                tempSlide.value.push(IphoneData.value[i]);
              }
            }
        }
        function prev(){
            if (tempIndex.value >0) {
                 currentSlide.value = currentSlide.value - 5;
                 tempIndex.value =tempIndex.value - 5;
                initSlids();
            }
      
        }
          function next(){
            if (IphoneData.value.length -1 >= currentSlide.value   ) {
                 currentSlide.value = currentSlide.value + 5;
                 tempIndex.value =tempIndex.value + 5;
                initSlids();
            } 
        }
        function init( ) {
            initSlids();
        }
        onMounted(init);
        return{
            currentSlide,IphoneData,prev,next,tempSlide,initSlids,getId
        };
      
    },
})
</script>
<style scoped>
.text-color {
    color: white;
}
 
.button{
     margin: 100px 0px;
    cursor: pointer;
    border: none;
         border-radius: 50%;
     background-color:#fc4f00;
    width: 40px;
    height: 40px;
}
 
.svg{
  height: 15px;
   width: 15px;
}

 
</style>