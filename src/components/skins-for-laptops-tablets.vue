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
    <div class="relative inline-block hover:block bg-black  z-10">
   <button class="peer    hover: text-white hover:underline ">  <a class="    "> Skins for laptops & tablets </a>  <arrow-hover></arrow-hover> </button>
   <div class="hidden peer-hover:flex hover:flex flex-col bg-black text-sm     text-white">
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">MacBook Skins</a>
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">iPad Skins </a>
  </div>
  </div>  
</template>
<style scoped>
</style>