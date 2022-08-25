<template>
<!-- small next and prev ---------------------------------->
<div class="flex justify-around  lg:hidden   w-full   ">
  <div class="my-auto ">
    <button @click="prevsmall" v-if="currentSlideSmall!==2 "   class="cursor-pointer rounded-3xl bg-orange-600 w-10 h-10   ">
      <previous-heroicon class="h-5 ml-2"></previous-heroicon>
    </button>
  </div>
  <div v-for="(slid, index) in tempSlideSmall" :key="index" class=" my-auto">
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)"  >
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
  </div>
  <div class="my-auto  ">
    <button @click="nextsmall" v-if="currentSlideSmall!==IphoneData.length "  class="cursor-pointer rounded-3xl bg-orange-600 w-10 h-10  ">
      <next-heroicon class="h-5 ml-2"  ></next-heroicon>
    </button>
  </div>
</div>
<!--  next and prev -------------------------------------------------------------------------------------------------------------------------------->
<div class="lg:flex   lg:justify-evenly  w-full  hidden ">
  <div class="my-auto ">
    <button @click="prev" v-if="currentSlide!==5 "   class="cursor-pointer rounded-3xl bg-orange-600 w-10 h-10  ">
      <previous-heroicon class="h-5 ml-2"></previous-heroicon>
    </button>
  </div>
  <div v-for="(slid, index) in tempSlide" :key="index" class=" my-auto " >
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)"  >
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
  </div>
  <div class="my-auto  ">
    <button @click="next" v-if="currentSlide!==IphoneData.length "  class="cursor-pointer rounded-3xl bg-orange-600 w-10 h-10  ">
      <next-heroicon class="h-5 ml-2"  ></next-heroicon>
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { getIphoneData, setSkin } from "../services/base-skins.service";
import { defineComponent, onMounted, ref } from "vue";
import previousHeroicon from "./previous-heroicon.vue";
import baseSlide from "./base-slide.vue";
import NextHeroicon from "./next-heroicon.vue";
type iphoneDataType = {
  firstImg: string;
  secImg: string;
  desc: string;
  price: string;
  id: number;
  color: string;
  type: string;
}[];
export default defineComponent({
  components: { baseSlide, previousHeroicon, NextHeroicon },
  setup() {
    let currentSlide = ref(5);
    let currentSlideSmall = ref(2);
    let tempIndex = ref(0);
    let tempSmall=ref(0);
    let tempSlide = ref<iphoneDataType>([]);
     let tempSlideSmall = ref<iphoneDataType>([]);
    let IphoneData = ref<iphoneDataType>(getIphoneData());
    function getId(id: number, type: string) {
      setSkin(id, type);
    }
    function initSlids() {
      tempSlide.value = [];
      for (let i = tempIndex.value; i < IphoneData.value.length; i++) {
        if (i < currentSlide.value) {
          tempSlide.value.push(IphoneData.value[i]);
        }
      }
    }
  
      function prev() {
      if (tempIndex.value >0) {
        currentSlide.value = currentSlide.value - 5;
        tempIndex.value = tempIndex.value - 5;
      
        initSlids();  
         
      } 
    }
    function next() {
      if (IphoneData.value.length - 1 >= currentSlide.value) {
        currentSlide.value = currentSlide.value + 5;
        tempIndex.value = tempIndex.value + 5;
         
        initSlids();
          
      }
    }
 //function , next and prev for small ...................................
    function initSlidsSmall() {
      tempSlideSmall.value = [];
      for (let i = tempSmall.value; i < IphoneData.value.length; i++) {
        if (i < currentSlideSmall.value) {
          tempSlideSmall.value.push(IphoneData.value[i]);
        }
      }
    }
      function prevsmall() {
      if (tempSmall.value >0) {
       
        currentSlideSmall.value = currentSlideSmall.value - 2;
         tempSmall.value = tempSmall.value - 2;
        initSlids();  
         initSlidsSmall();
      } 
    }
    function nextsmall() {
      if (IphoneData.value.length - 1 >= currentSlideSmall.value) {
      
         currentSlideSmall.value = currentSlideSmall.value + 2;
         tempSmall.value = tempSmall.value + 2;
        initSlids();
         initSlidsSmall();
      }
    }
    function init() {
      initSlids();
       initSlidsSmall();
    }
    onMounted(init);
    return {
      currentSlide,
      IphoneData,
      prev,
      next,
      tempSlide,
      initSlids,
      getId,
      currentSlideSmall,
      initSlidsSmall,
      tempSmall,
      prevsmall,
      tempSlideSmall,
      nextsmall
       };
  },
});
</script>
 
