<template>
<div class="flex   lg:justify-evenly  w-full   ">
  <div class="my-auto ">
    <button @click="prev" v-if="currentSlide!==5 "   class="cursor-pointer rounded-3xl bg-orange-600 w-10 h-10  ">
      <previous-heroicon class="h-5 ml-2"></previous-heroicon>
    </button>
  </div>
  <div v-for="(slid, index) in tempSlide" :key="index">
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
    let tempIndex = ref(0);
    let tempSlide = ref<iphoneDataType>([]);
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
    function init() {
      initSlids();
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
       
       };
  },
});
</script>
 
