<template>

   <div class="sticky top-0" >
     
       <div    class="bg-black       w-full  ">
<div class=" w-full  pt-5">
 <!-- logo ------------------------------>
<div class=" flex justify-between lg:justify-around "> 
      <div class=" flex w-10 h-10 lg:mt-4 ">
   <img :src="skinsPhone" class="rounded-3xl"/>
   <span class="text-gray-400  ml-2 text-xl    "> Skins.phone </span> 
      </div>
<!-- menu ---------------------------------->
   <ul :class="{'bg-black h-screen absolute right-0 top-5 lg:flex w-11/12   ':showMenu ,'hidden lg:flex ':!showMenu }"  >
   <div  >
<div class="  justify-between mx-7 text-2xl text-gray-400 lg:h-10   w-full lg:text-xl  lg:flex  " > 
  <button @click="showMenu=false" v-if="showMenu" class="lg:hidden text-white "> <close-hero ></close-hero></button> <hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><router-link to="/" >Home</router-link> </li><hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><exclusive-collections></exclusive-collections></li><hr class="lg:hidden w-4/5">
 <li class="lg:p-0 py-4 "><skins-for-smartphone></skins-for-smartphone></li><hr class="lg:hidden w-4/5">
</div>
<div class="justify-between mx-7 text-2xl lg:flex text-gray-400 lg:h-10  w-full  lg:text-xl ">
   <li class="lg:p-0 py-4 "><skins-for-laptops-tablets></skins-for-laptops-tablets></li><hr class="lg:hidden w-4/5">
   <li class="lg:p-0 py-4 "><a>EZY Cases</a></li><hr class="lg:hidden w-4/5">
   <li class="lg:p-0 py-4 "><help-and-faq></help-and-faq></li><hr class="lg:hidden w-4/5  ">   
   <router-link to="/loginPage"> <li class="lg:p-0 py-4 lg:hidden ">Login</li></router-link><hr class="lg:hidden w-4/5  ">   
</div>
   </div>
 </ul  >
<!-- logo search , user and cart  --------------------------->
    <div class=" flex  text-gray-400 h-6 mx-2 lg:mt-4 " >
     <search-bar></search-bar> 
        <router-link to="/loginPage"
         class=" mx-4 lg:inline-block  hover:text-white hidden ">
         <user-hero class="h-6 "></user-hero>
         </router-link>
           <button  @click="showMenu=!showMenu" type="button" class="lg:hidden mx-4"> 
<menu-hero></menu-hero>
   </button>
       <cart-hero></cart-hero>  
    </div>  
</div>
</div>
</div>
      </div>
  
</template>

<script lang="ts">
import SkinsForLaptopsTablets from './skins-for-laptops-tablets.vue';
import ExclusiveCollections from './exclusive-collections.vue';
import SkinsForSmartphone from './skins-for-smartphone.vue';
 import HelpAndFaq from './help-and-faq.vue';
 import UserHero from './user-hero.vue';
import CartHero from './cart-hero.vue';
import searchBar from './search-bar.vue'
import closeHero from './close-hero.vue'
import MenuHero from './menu-hero.vue';
import skinsPhone from "../assets/img/header.png"

import { defineComponent ,ref } from 'vue'
export default defineComponent({
    components: { SkinsForSmartphone, ExclusiveCollections, SkinsForLaptopsTablets,HelpAndFaq,UserHero,CartHero,searchBar,closeHero,MenuHero},
    setup() {
        let showMenu = ref(false)
        return {showMenu,  skinsPhone}
    },
})
</script>
