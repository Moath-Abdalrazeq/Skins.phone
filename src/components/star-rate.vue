<script lang="ts">
import { defineComponent, ref } from 'vue'
import StatHeroIcon from './star-hero-icon.vue'
export default defineComponent({
    components:{ StatHeroIcon,  },
    
    setup() {
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
   let starHover =ref(false)
   return{Stars,starHover}

    },
    
    
})
</script>

<template>
    <div v-for="Star in Stars" :key="Star.id" :class="{'star':!starHover,'ss':starHover,}">
    <component :is="Star.name">
    
    </component>
  

 </div>
</template>


<style scoped>
.star{
    width: 10px;
}

.ss{
  width: 100px;
}


</style>



