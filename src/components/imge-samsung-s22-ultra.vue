<template>
<div class=" flex   lg:justify-evenly  w-full ">
  <div v-for="(slid, index) in tempSlide" :key="index">
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)" class=" bg-none">
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
  </div>
</div>
</template>
<script lang="ts">
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
}[];
export default defineComponent({
  components: { baseSlide },
  setup() {
    let currentSlide = ref(5);
    let tempIndex = ref(0);
    let tempSlide = ref<samsungDataType>([]);
    let samsungData = ref<samsungDataType>(getSamsungData());

    function getId(id: number, type: string) {
      setSkin(id, type);
    }
    function initSlids() {
      tempSlide.value = [];
      for (let i = tempIndex.value; i < samsungData.value.length; i++) {
         if (i < currentSlide.value) {
   tempSlide.value.push(samsungData.value[i]);
        }
      }
    }
    function init() {
      initSlids();
    }
    onMounted(init);
    return {
      currentSlide,
      samsungData,
      tempSlide,
      initSlids,
      getId,
    };
  },
});
</script>
 
 