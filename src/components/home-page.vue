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
 import skinsImages from './skins-images.vue'
import CartHero from './cart-hero.vue';
 export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero, UserHero, SkinsForSmartphone, ExclusiveCollections, HomepageVideo, SkinsForLaptopsTablets, HelpAndFaq ,skinsImages, CartHero},
    setup() {
        return {skinsPhone   };
    },
})
</script>
<template  >
 <!---->
 <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <homepage-video></homepage-video>
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
<!-- logo search and user -->
    <div class="menu-links">
      <nav class=" ">
  <router-link to="searchHero"><search-hero></search-hero></router-link>
   <router-link to="userHero"><user-hero></user-hero> </router-link> 
   <router-link to="cartHero"><cart-hero></cart-hero> </router-link>
      </nav>
    </div>  
</div>
</div>
<div class="header">
<div>
    <span style="padding:300px;"> Introducing GALAXY S22 ULTRA</span>
    <a>View all</a>
   </div>   
   <div>
 <skins-images></skins-images>
 <div  class="img-desc">
   <a > Samsung Galaxy S22 <br> ULTRA SIGNATURE Camouflage  Dark Slate Skin <br><br> 25₪ </a>
   <a > Samsung Galaxy S22 <br> ULTRA SIGNATURE Rainy Night in Bangkok Skin<br><br> 25₪</a>
   <a > Samsung Galaxy S22 <br> ULTRA SIGNATURE Blue HEXAGON Skin<br><br> 25₪</a>
   <a > Samsung Galaxy S22 <br> ULTRA SIGNATURE Abstract Velvet Skin<br><br> 25₪ </a> 
   <a > Samsung Galaxy S22 <br> ULTRA SIGNATURE TITANIUM Metallic Skin<br><br>25₪ </a>
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
    padding-top: 10px;  
 }
 .menu-links {
    display:flex;
    justify-content: space-between ;
    color:white;
    width: 50px; 
    flex:1 0 1;
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
}
.img-desc{
   display:flex;
   margin: 0 45px;
} 
 .img-desc a{
   display: flex;
    color: darkgray;
 }
</style>