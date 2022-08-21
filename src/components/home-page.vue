<script lang="ts">
import { defineComponent, ref } from 'vue'
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
import MenuHero from './menu-hero.vue';
import closeHero from './close-hero.vue'
 export default defineComponent({
    name: "skinsPhone",
      components: {SearchHero,UserHero, closeHero,SkinsForSmartphone, ExclusiveCollections, SkinsForLaptopsTablets, HelpAndFaq ,  CartHero,searchBar ,BaseSlider, ImgeSamsungS22Ultra, LoginForm, MenuHero   },
   setup() {
     let showMenu = ref(false)
        return {skinsPhone ,showMenu};
    },
})
</script>
<template  >
 <!--image header -------------------------------> 
 <div class=" h-96 lg:bg-cover w-full bg-fixed bg-no-repeat" style="background-image:url('https://cdn.fbsbx.com/v/t59.2708-21/298649262_622437152533438_8974594355022654984_n.gif?_nc_cat=104&ccb=1-7&_nc_sid=041f46&_nc_ohc=4HK3KE1lDygAX8R4ijr&tn=2CL7lO9P0JVGnW4w&_nc_ht=cdn.fbsbx.com&oh=03_AVJ8Gpc6XJEwe1HeVnu9Qir72c3Lu74jBB7pmgYY3cT6yA&oe=62FD7D96'); ">
 </div>
   <section>
      <div class="bg-black fixed  top-0  w-full ">
<div class=" w-full  pt-5">
 <!-- logo ------------------------------>
<div class=" flex justify-between lg:justify-around "> 
      <div class=" flex w-10 h-10 lg:mt-4">
   <img :src="skinsPhone" class="rounded-3xl"/>
   <span class="text-gray-400  ml-2 text-xl lg:text-xl"> Skins.phone </span> 
      </div>
<!-- menu ---------------------------------->
   <ul :class="{'bg-black h-screen absolute right-0 top-5 lg:flex w-11/12   ':showMenu ,'hidden lg:flex':!showMenu }"  >
   <div  >
<div class="   justify-between mx-7 text-2xl text-gray-400 lg:h-10   w-full lg:text-xl  lg:flex " > 
  <button @click="showMenu=false" v-if="showMenu" class="lg:hidden text-white "> <close-hero ></close-hero></button> <hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><router-link to="/" >Home</router-link> </li><hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><exclusive-collections></exclusive-collections></li><hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><skins-for-smartphone></skins-for-smartphone></li><hr class="lg:hidden w-4/5">
</div>
<div class="justify-between mx-7 text-2xl lg:flex text-gray-400 lg:h-10  w-full  lg:text-xl ">
   <li class="lg:p-0 py-4 "><skins-for-laptops-tablets></skins-for-laptops-tablets></li><hr class="lg:hidden w-4/5">
   <li class="lg:p-0 py-4 "><a>EZY Cases</a></li><hr class="lg:hidden w-4/5">
   <li class="lg:p-0 py-4 "><help-and-faq></help-and-faq></li><hr class="lg:hidden w-4/5  ">   
</div>
   </div>
 </ul  >
<!-- logo search , user and cart  --------------------------->
    <div class=" flex  text-gray-400 h-6 mr-2 lg:mt-4  " >
     <search-bar></search-bar> 
        <router-link to="/loginPage"
         class=" mx-2 lg:inline-block  hover:text-white hidden ">
         <user-hero class="h-6 "></user-hero>
         </router-link>
           <button  @click="showMenu=!showMenu" type="button" class="lg:hidden"> 
<menu-hero></menu-hero>
   </button>
       <cart-hero></cart-hero>  
    </div>  
</div>
</div>
</div>
   </section>
<!-- Skins images and description for  GALAXY S22 ULTRA  -->
<div class=" text-gray-400 text-center p-10   text-xl   mt-10      ">
<div>
    <span> Introducing GALAXY S22 ULTRA</span>
    <a class="hidden justify-end lg:flex ">View all</a>
   </div>   
   <div class="overflow-x-auto  ">
  <imge-samsung-s-22-ultra></imge-samsung-s-22-ultra>
   </div>
  </div>
 <!-- Skins images and description for  IPHONE 13 PRO  -->
  <div class="  text-gray-400 p-10 lg:text-xl text-center mt-10  ">
   <div>
    <span>iPhone 13 Pro MAX Skins & iPhone 13 PRO Skins</span>
    <a class="lg:flex justify-end hidden">View all</a>
    </div>
    <div class="overflow-x-auto">
   <base-slider></base-slider> 
  </div>
  </div>
</template>
 