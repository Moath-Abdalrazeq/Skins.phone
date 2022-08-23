<template>
<div class=" text-gray-400 mt-8 ml-8"> {{route.fullPath}}</div>
<div class="text-gray-400 text-center text-2xl">Samsung Galaxy S22 ULTRA Skins </div>
 <div> <sort-skin></sort-skin></div>
<div class="text-gray-400 text-center text-base my-4">Full-Body Skins for Samsung Galaxy S22 ULTRA (6.8" display, 2022) </div>

<div  class="   max-w-5xl mx-auto    " >
 
<div class=" flex justify-between flex-wrap ">
  <div v-for="(slid, index) in samsungData" :key="index" class="my-4"  >
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)"  >
   <base-slide :slidData="slid"  ></base-slide> 
      </button>
    </router-link>
  </div>
</div>
</div>
</template>
<script lang="ts">
import { useRoute } from "vue-router";
import sortSkin from './sort-skins.vue'
 
import { getSamsungData, setSkin } from "../services/base-skins.service";
import { defineComponent, onMounted, ref } from "vue";
import baseSlide from "./base-slide.vue";

type samsungDataType = {
  firstImg: string;
  secImg: string;
  desc: string;
  price: string;
  id: number;
  color: string;
  type: string;
} ;
export default defineComponent({
  components: { baseSlide,sortSkin },
  setup() {
    
    const route = useRoute();
    let samsungData = ref<samsungDataType []>(getSamsungData());
    function getId(id: number, type: string) {
      setSkin(id, type);
    }
   
    return {samsungData, getId,route };
  },

});
</script>