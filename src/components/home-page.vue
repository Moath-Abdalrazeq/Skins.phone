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
import CartHero from './cart-hero.vue';
import searchBar from './search-bar.vue'
import BaseSlider from './base-slider.vue'
import ImgeSamsungS22Ultra from './imge-samsung-s22-ultra.vue';
import headerImage from '../assets/img/skins-image.gif'
 export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero,  UserHero, SkinsForSmartphone, ExclusiveCollections, HomepageVideo, SkinsForLaptopsTablets, HelpAndFaq ,  CartHero,searchBar ,BaseSlider, ImgeSamsungS22Ultra   },
    setup() {
        return {skinsPhone ,headerImage};
    },
})
</script>
<template  >
 <!--image header -->
  
   <img :src="headerImage" class="imge-header" />  
    
   <section>
      <div class="header-fixsed">
<div class="width-full">
 <!-- logo -->
<div class="main"> 
      <div class="logo">
   <img :src="skinsPhone" alt="" class="logo "/>
   <span class="sp"> Skins.phone </span> 
      </div>
<!-- menu -->
<div>
<div class="menu-links width-full main-links">
   <nav class=" ">
 <router-link to="/">Home</router-link>
   </nav>
 <exclusive-collections></exclusive-collections>
 <skins-for-smartphone></skins-for-smartphone>
</div>
<div class="menu-links width-full main-links">
   <skins-for-laptops-tablets></skins-for-laptops-tablets>
   <a class=" ">EZY Cases</a>
   <help-and-faq></help-and-faq>
</div>
</div>
<!-- logo search , user and cart  -->
    <div class="menu-links" >
    <div> <search-bar></search-bar> </div>
  <div>  <user-hero class="svg-width" ></user-hero>  </div>
     <div> <cart-hero class="svg-width"></cart-hero> </div>
    </div>  
</div>
</div>
</div>
   </section>
     
   
<!-- Skins images and description for  GALAXY S22 ULTRA  -->
<div class="header">
<div>
    <span> Introducing GALAXY S22 ULTRA</span>
    <a >View all</a>
   </div>   
   <div class="slide-display">
  <imge-samsung-s-22-ultra></imge-samsung-s-22-ultra>
   </div>
  </div>
 <!-- Skins images and description for  IPHONE 13 PRO  -->
  <div class="header">
   <div>
    <span>  iPhone 13 Pro MAX Skins & iPhone 13 PRO Skins</span>
    <a >View all</a>
    </div>
    <div class="slide-display">
  <base-slider></base-slider>
  </div>
 
  </div>
   
</template>
<style scoped>
.logo {
   display: flex; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
position: relative;
top: 5px;
 }
 .sp{
    color: white; 
    margin-top: auto;
    margin-bottom: auto;
     font-family:Cursive  ;
     margin: 10px;
     padding: 5px; 
 }
.main {
     display: flex;
  justify-content: space-around ;
}
 .width-full {
    width: 100%; 
    padding-top: 20px; 
 }
 .menu-links {
    display:flex;
    justify-content: space-around ;
    color:white;
    height: fit-content;
 }
  .main-links {
     width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  }
  nav a{
color: white;
text-decoration: none;
  }
  .header{
   color: darkgray; 
    text-align: center;
    padding:   40px;
    margin: 200px 100px;
    font-size: 25px;
}
.header a{
  display: flex;
   justify-content: flex-end;
}
.slide-display{
  display: flex;
  
  
}
.svg-width{
 height: 15px;
    width: 15px;
}

.imge-header {   
     width: 100%;
    z-index: -1;
     
  }

  .header-fixsed{
  background-color:black;
  position: fixed;
  top: 0;
  width: 100%;
  }
 
</style>