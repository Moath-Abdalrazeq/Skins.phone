<script lang="ts">
import { defineComponent } from 'vue'
import arrowHover from './arrow-hover.vue'
export default defineComponent({
  components: { arrowHover }, 
    setup() { 
    },
})
</script>
<template>
    <div class="relative inline-block hover:block   z-10">
   <button class="peer    hover: text-gray-400hover:translate-x-2 hover:underline  ">  <a> Skins for laptops & tablets </a>  <arrow-hover></arrow-hover> </button>
   <div class="hidden peer-hover:flex hover:flex flex-col bg-black text-sm     text-white">
    <a href="#" class="px-5 py-3 hover:translate-x-2  ">MacBook Skins</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2 ">iPad Skins </a>
  </div>
  </div>  
</template>
 