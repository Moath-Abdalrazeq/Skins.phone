<template>
  <div class=" relative h-fit ">
     <div v-if="searchButton"  class=" absolute top-7 " >
<input type="text" placeholder="search..."  class="px-4 py-2   text-black w-fit " v-autofocus   > 

  </div>
  
  </div>
  <searchHero @click="searchButton=!searchButton" class=" h-6 lg:w-6  " ></searchHero>
</template>

<script lang="ts">
 import searchHero from './search-hero.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    components:{searchHero},
    setup() {
        let searchButton= ref(false)
   return  {searchButton}
    },
    directives:{
      autofocus:{
        mounted(el){
          el.focus()
        }
      }
    }

})
</script>
 