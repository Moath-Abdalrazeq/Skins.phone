<template>
  <div class=" relative h-fit ">
     <div v-if="searchButton"  class=" absolute top-6" >
<input type="text" placeholder="search..."  class="px-4 py-2   text-black w-fit" v-autofocus   > 

  </div>
 <searchHero @click="searchButton=!searchButton" class=" w-4 h-4 " ></searchHero>
  </div>
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

<style scoped></style>