<script lang="ts">
import { defineComponent } from 'vue'
import skinsPhone from "../assets/SkinsPhone.jpg"
import ExclusiveCollections from './exclusive-collections.vue';
import SearchHero from './search-hero.vue';
import SkinsForSmartphone from './skins-for-smartphone.vue';
import UserHero from './user-hero.vue';
import HomepageVideo from './homepage-video.vue';
import SkinsForLaptopsTablets from './skins-for-laptops-tablets.vue';
import HelpAndFaq from './help-and-faq.vue';
 
export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero, UserHero, SkinsForSmartphone, ExclusiveCollections, HomepageVideo, SkinsForLaptopsTablets, HelpAndFaq },

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
   <img :src="skinsPhone" alt="" class="logo "/>
   <span class="sp"> Skins.phone </span> 
      </div>

<div class="  ">
<div class="menu-links width-full main-links">
 <a class=""> Home </a>
 <exclusive-collections></exclusive-collections>
 <skins-for-smartphone></skins-for-smartphone>
  

</div>
<div class="menu-links width-full main-links    ">
   <skins-for-laptops-tablets></skins-for-laptops-tablets>
   <a class=" ">EZY Cases</a>
   <help-and-faq></help-and-faq>
</div>
</div>
    <div class="menu-links">
        
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
    color: white; 
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
    padding-top: 10px;
 }
 .menu-links {
    display:flex;
    justify-content: space-around ;
    color:white;
    width: 50px; 
 }
  .main-links {
     width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  }
</style>