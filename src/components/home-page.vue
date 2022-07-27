<script lang="ts">
import { defineComponent } from 'vue'
import skinsPhone from "../assets/SkinsPhone.jpg"
import ExclusiveCollections from './exclusive-collections.vue';
import SearchHero from './search-hero.vue';
import SkinsForSmartphone from './skins-for-smartphone.vue';
import UserHero from './user-hero.vue';
 
 
import HomepageVideo from './homepage-video.vue';
export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero, UserHero, SkinsForSmartphone, ExclusiveCollections, HomepageVideo},

    setup() {
        return {skinsPhone   };
    },
})
</script>
 
<template>
<homepage-video></homepage-video>
<div class="width-full">
 
<div class="main"> 
      <div class="logo">
   <img :src="skinsPhone" alt="" class=" "/>
   <span class="sp"> Skins.phone </span> 
      </div>

<div class="  ">
<div class="menu-links width-full main-links">
 <a class=""> Home </a>
 <exclusive-collections></exclusive-collections>
 <skins-for-smartphone></skins-for-smartphone>
   
</div>
<div class="menu-links width-full main-links    ">
  <a class="  "> Skins for laptops & tablets </a>
   <a class=" ">EZY Cases   </a>
   <a class=" ">   Help & FAQ  </a>  
</div>
</div>
    <div>
   <search-hero></search-hero>  
 <user-hero></user-hero>  
    </div>
     
</div>
</div>
 
</template>

<style scoped>
.logo {
   display: flex; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
 
 }
 .sp{
          
    margin-top: auto;
    margin-bottom: auto;
     font-family:Cursive  ;
 
 }
.main {
     display: flex;
  justify-content: space-around ;

}

 .width-full {
    width: 100%;
     

 }
 .menu-links {
    display:flex;
    justify-content: space-around ;
 }

  .main-links {
     width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  }
  

</style>