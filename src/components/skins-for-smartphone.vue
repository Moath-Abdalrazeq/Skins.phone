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

     <div class="relative inline-block hover:block bg-black  z-30">
 <button class="peer    hover: text-white hover:underline">  <a class="   "> Skins for smartphone  </a> <arrow-hover></arrow-hover> </button>
   <div class="hidden peer-hover:flex hover:flex flex-col bg-black text-sm     text-white">
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">iPhone Skins</a>
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">Samsung Skins</a>
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">Google PIXEL Skins</a>
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">OnePlus Skins</a>
    <a href="#" class="px-5 py-3 hover:bg-slate-500  ">HUAWEI Skins</a>
  </div>
    </div>
</template>

<style scoped>
  
</style>