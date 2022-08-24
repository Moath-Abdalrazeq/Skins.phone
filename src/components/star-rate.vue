<script lang="ts">
import { defineComponent, ref } from 'vue'
import StatHeroIcon from './star-hero-icon.vue'
export default defineComponent({
    components:{ StatHeroIcon },
    
    setup(props,{emit}) {
      
 
   let Stars= [{
    id:1,
    name:"StatHeroIcon",
   },
   
   {
    id:2,
    name:"StatHeroIcon"

   },
      {
    id:3,
    name:"StatHeroIcon"
   },
   {
       
    id:4,
    name:"StatHeroIcon"

   },

      {
    id:5,
    name:"StatHeroIcon"

   }

   ]
   function getRate(rate:number) {
    emit("onRateChange",)
    
   }
   return{Stars,getRate}

    },
    
    
})
</script>

<template>
    <div v-for="Star in Stars" :key="Star.id"  class="w-4 hover:text-orange-500" >
    <component :is="Star.name">
    <button @click="getRate(Star.id)"><stat-hero-icon></stat-hero-icon></button>
    
    </component>
  

 </div>
</template>


