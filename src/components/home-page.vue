<script lang="ts">
import { defineComponent } from 'vue'
import skinsPhone from "../assets/img/header.png"
import ExclusiveCollections from './exclusive-collections.vue';
import SearchHero from './search-hero.vue';
import SkinsForSmartphone from './skins-for-smartphone.vue';
import UserHero from './user-hero.vue';
import SkinsForLaptopsTablets from './skins-for-laptops-tablets.vue';
import HelpAndFaq from './help-and-faq.vue';
import CartHero from './cart-hero.vue';
import searchBar from './search-bar.vue'
import BaseSlider from './base-slider.vue'
import ImgeSamsungS22Ultra from './imge-samsung-s22-ultra.vue';
import LoginForm from './login-form.vue';
 export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero,  UserHero, SkinsForSmartphone, ExclusiveCollections, SkinsForLaptopsTablets, HelpAndFaq ,  CartHero,searchBar ,BaseSlider, ImgeSamsungS22Ultra, LoginForm   },
    setup() {
        return {skinsPhone  };
    },
})
</script>
<template  >
 <!--image header --> 
 <div class=" h-96    w-full bg-fixed" style="background-image: url('https://cdn.fbsbx.com/v/t59.2708-21/298649262_622437152533438_8974594355022654984_n.gif?_nc_cat=104&ccb=1-7&_nc_sid=041f46&_nc_ohc=4HK3KE1lDygAX8R4ijr&tn=2CL7lO9P0JVGnW4w&_nc_ht=cdn.fbsbx.com&oh=03_AVJ8Gpc6XJEwe1HeVnu9Qir72c3Lu74jBB7pmgYY3cT6yA&oe=62FD7D96'); ">
 </div>
   <section>
      <div class="bg-black fixed  top-0  w-full   ">
<div class=" w-full  pt-5">
 <!-- logo -->
<div class=" flex   justify-around lg:ml-4    "> 
      <div class=" flex w-8 h-8 relative top-2  ">
   <img :src="skinsPhone" class=" rounded-3xl" />
   <span class="text-gray-400  ml-2 text-xl    lg:text-xl "> Skins.phone </span> 
      </div>
<!-- menu -->
<div>
<div class=" hidden justify-between mx-7  text-gray-400 lg:h-10  w-full lg:text-xl  lg:flex " > 
 <router-link to="/" >Home</router-link>
 <exclusive-collections></exclusive-collections>
 <skins-for-smartphone></skins-for-smartphone>
</div>
<div class=" hidden justify-between mx-7 lg:flex text-gray-400 lg:h-10 lg:w-full  text-xl    ">
   <skins-for-laptops-tablets></skins-for-laptops-tablets>
   <a>EZY Cases</a>
   <help-and-faq></help-and-faq>
</div>
</div>
<!-- logo search , user and cart  -->
    <div class=" flex  justify-around text-gray-400   lg:mt-5  h-6   " >
     <search-bar></search-bar> 
        <router-link to="/loginPage"
         class=" mx-2 lg:inline-block  hover:text-white">
         <user-hero class="h-6  "></user-hero>
         </router-link>
       <cart-hero ></cart-hero>  
    </div>  
</div>
</div>
</div>
   </section>
<!-- Skins images and description for  GALAXY S22 ULTRA  -->
<div class=" text-gray-400 text-center p-10   text-xl   mt-10  ">
<div>
    <span> Introducing GALAXY S22 ULTRA</span>
    <a class="hidden justify-end lg:flex ">View all</a>
   </div>   
   <div class="flex  justify-between overflow-x-auto ">
  <imge-samsung-s-22-ultra></imge-samsung-s-22-ultra>
   </div>
  </div>
 <!-- Skins images and description for  IPHONE 13 PRO  -->
  <div class="  text-gray-400 p-10 lg:text-xl text-center mt-10  ">
   <div>
    <span>  iPhone 13 Pro MAX Skins & iPhone 13 PRO Skins</span>
    <a class="lg:flex justify-end hidden">View all</a>
    </div>
    <div class="flex lg:flex lg:justify-between  ">
  <base-slider></base-slider>
  </div>
  </div>

</template>
 