<template>
  <div v-for="(slid, index) in tempSlide" :key="index">
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)" class="button-base-slide">
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
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
    let tempIndex = ref(0);
    let tempSlide = ref<samsungDataType>([]);
    let samsungData = ref<samsungDataType>(getSamsungData());

    function getId(id: number, type: string) {
      setSkin(id, type);
    }

    function initSlids() {
      tempSlide.value = [];
      for (let i = tempIndex.value; i < samsungData.value.length; i++) {
        tempSlide.value.push(samsungData.value[i]);
      }
    }

    function init() {
      initSlids();
    }
    onMounted(init);
    return {
      samsungData,
      tempSlide,
      initSlids,
      getId,
    };
  },
});
</script>
<style scoped>
.button-base-slide{
  background: none;
}
</style>
