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
   <img :src="headerImage" class="w-full" />  
   <section>
      <div class="bg-black fixed top-0 w-full">
<div class="w-full pt-5">
 <!-- logo -->
<div class="flex  justify-around"> 
      <div class="flex w-12 h-12  rounded-full relative top-1.5  ">
   <img :src="skinsPhone"/>
   <span class="text-white mt-auto mb-auto font-Cursive m-2.5 p-1.5 text-lg"> Skins.phone </span> 
      </div>
<!-- menu -->
<div>
<div class=" flex  justify-around text-white h-10 w-full  text-xl mr-20" > 
 <router-link to="/">Home</router-link>
 <exclusive-collections></exclusive-collections>
 <skins-for-smartphone></skins-for-smartphone>
</div>
<div class=" flex    justify-around text-white h-10 w-full  text-xl  mr-20">
   <skins-for-laptops-tablets></skins-for-laptops-tablets>
   <a >EZY Cases</a>
   <help-and-faq></help-and-faq>
</div>
</div>
<!-- logo search , user and cart  -->
    <div class="flex justify-around text-white h-4 " >
     <search-bar class=" mr-2 " ></search-bar>  
     <user-hero class="mr-2 " ></user-hero>  
       <cart-hero  ></cart-hero>  
    </div>  
</div>
</div>
</div>

   </section>
<!-- Skins images and description for  GALAXY S22 ULTRA  -->
<div class=" text-blue-50 text-center p-10 mx-52 my-24 text-xl">
<div>
    <span> Introducing GALAXY S22 ULTRA</span>
    <a class="flex justify-end ">View all</a>
   </div>   
   <div class="flex">
  <imge-samsung-s-22-ultra></imge-samsung-s-22-ultra>
   </div>
  </div>
 <!-- Skins images and description for  IPHONE 13 PRO  -->
  <div class="  text-blue-50 text-center p-10 mx-52 my-24 text-xl ">
   <div>
    <span>  iPhone 13 Pro MAX Skins & iPhone 13 PRO Skins</span>
    <a class="flex justify-end ">View all</a>
    </div>
    <div class="flex  ">
  <base-slider></base-slider>
  </div>
  </div>
</template>
<style scoped>
</style>