<template>
  <div class="search-box">
     <div v-if="searchButton"   >
<input type="text" placeholder="search"  class="input-search" > 
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
})
</script>

<style scoped>
*{
 
  box-sizing: border-box;
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #22a6b3;
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 20px;
  color:#ffffff ;
}
.input-search:focus{
  width: 190px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
   
  }
</style>
