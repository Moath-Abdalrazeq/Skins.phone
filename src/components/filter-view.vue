<template>
 
   <div class=" flex  text-gray-400 h-8  " >
     <button  @click="showMenu=!showMenu" class="text-gray-400 border-solid border-2 flex border-gray-400 w-24  px-4 ">  Filter <filter-hero class="ml-2" ></filter-hero> </button>
     </div>

<div :class="{'bg-black h-screen absolute left-3 top-5  w-80   ':showMenu ,'hidden  ':!showMenu }"  >
<div class="   text-2xl text-gray-400      block " > 
    <div class="flex justify-between mt-8 "> 
<span   > Filter </span>  <button @click="showMenu=false" v-if="showMenu" class="   text-white "> <close-hero class=""  ></close-hero></button>  </div>    <hr class="mt-4 mb-4">
    
   <filter-selection></filter-selection>
</div>
   </div>
 
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import filterHero from './filter-hero.vue'
import closeHero from './close-hero.vue' 
import filterSelection from './filter-selection.vue'
export default defineComponent({
         components:{filterHero,closeHero,filterSelection},
    
    setup() {
                let showMenu =ref(false)
           return{
              showMenu, 
           }
    },
})
</script>
