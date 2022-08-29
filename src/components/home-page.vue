<script lang="ts">
import { defineComponent, ref } from 'vue'
import headerImg from  '../assets/img/skins-image.gif';
import BaseSlider from './base-slider.vue';
import FooterPages from './footer-pages.vue';
import HeaderMenu from './header-menu.vue';
import ImgeSamsungS22Ultra from './imge-samsung-s22-ultra.vue';
import scrollHeaderMenu from './scroll-header-menu.vue'
     export default defineComponent({
    name: "skinsPhone",
      components: { BaseSlider, ImgeSamsungS22Ultra,HeaderMenu, FooterPages,scrollHeaderMenu},
   setup() {
     
        return {  headerImg  };
    },
})
</script>
<template  >
<!-- header menu ----------------------------------------------------->
   
    <!--image header -------------------------------> 
 <div class=" bg-contain h-96 lg:bg-cover  w-full bg-fixed bg-no-repeat  " :style="{'background-image': `url(${headerImg})`  }" >
 <scroll-header-menu></scroll-header-menu> 
   
 </div>
  
<!-- Skins images and description for  GALAXY S22 ULTRA  -->
<div class=" text-gray-400 text-center lg:p-10   text-xl   mt-10      ">
<div>
    <span> Introducing GALAXY S22 ULTRA</span>
    <router-link to="/homePage/viewS22Ultra" class=" mt-5 mb-5 justify-end flex ">View all</router-link>
   </div>   
   <div class="overflow-x-auto    ">
  <imge-samsung-s-22-ultra></imge-samsung-s-22-ultra>
   </div>
  </div>
 <!-- Skins images and description for  IPHONE 13 PRO  -->
  <div class="  text-gray-400 lg:p-10 lg:text-xl text-center mt-10  ">
   <div>
    <span>iPhone 13 Pro MAX Skins & iPhone 13 PRO Skins</span>
    
    </div>
    <div class=" ">
    <base-slider></base-slider>
    <div class="mt-8 bg-orange-600 w-24  m-auto h-10 p-1  ">
        <router-link to="/homePage/viewIphone13" class="lg:flex justify-center">View all</router-link>
</div>
  </div>
  </div> 
  <footer-pages></footer-pages>
</template>
 
 
 