<template>
  <div class="search-box">
     <div v-if="searchButton"  class="input-position" >
<input type="text" placeholder="search"  class="input-search" v-autofocus   > 
  </div>
 <searchHero @click="searchButton=!searchButton" class="btn-search" ></searchHero>
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

<style scoped>
 
.input-search{
  font-size: fit-content;
  letter-spacing: 2px;
   transition: all .5s ease-in-out;
 color: #000;
 font-weight: boldf;
 
 
}
.btn-search{
  width: 15px;
  height: 15px;
  
}
.search-box{
position: relative;
height: fit-content;
}
.input-position{
  position: absolute;
  top:20px;

  

}
 
</style>