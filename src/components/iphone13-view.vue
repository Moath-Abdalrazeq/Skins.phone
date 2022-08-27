<template>
<header-menu></header-menu>
<div class=" mb-5 text-gray-400   ml-8"> {{route.fullPath}}</div>
<div class=" text-gray-400 font-semibold text-xl  text-center lg:text-2xl">iPhone 13 Pro MAX Skins</div>
 <div class=" flex lg:mb-8 mt-5 ">
 <span >
   <sort-skin></sort-skin>
   <filter-view></filter-view>
  </span>
  </div>
  
<div class="text-gray-400 text-center text-base my-4 font-mono">Full-Body Skins & Wraps for the iPhone 13 Pro MAX (6.7" display, 2021) </div>

<div  class="  lg:max-w-5xl mx-auto    " >
 
<div class="  flex lg:justify-between flex-wrap  ">
  <div v-for="(slid, index) in IphoneData" :key="index" class="my-4 "  >
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)"  >
   <base-slide :slidData="slid" class=""  ></base-slide> 
      </button>
    </router-link>
  </div>
</div>
</div>
</template>
<script lang="ts">
import { getIphoneData, setSkin } from "../services/base-skins.service";
import sortSkin from './sort-skins.vue'
import filterView from './filter-view.vue'
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import baseSlide from "./base-slide.vue";
import HeaderMenu from "./header-menu.vue";
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
   
  components: { baseSlide,sortSkin,filterView, HeaderMenu },
  setup() {
    
  const route = useRoute();
    let IphoneData = ref<iphoneDataType>(getIphoneData());
    function getId(id: number, type: string) {
      setSkin(id, type);
    }
   
    return {
      IphoneData,route,
    
      getId,
    };
  },
});
</script>
<style scoped></style>