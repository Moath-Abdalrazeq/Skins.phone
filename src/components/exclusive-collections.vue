<script lang="ts">
import { defineComponent } from 'vue'
import arrowHover from './arrow-hover.vue'

export default defineComponent({
  components: { arrowHover },
    setup() {},
})
</script>
<template>
    <div class=" relative inline-block hover:block bg-black  z-20  ">
   <button class="peer    hover: text-gray-400 hover:underline ">  <a class=""> Exclusive Collections </a>  <arrow-hover></arrow-hover> </button>
   <div class="hidden peer-hover:flex hover:flex flex-col bg-black text-sm     text-white">
    <a href="#" class="px-5 py-3 hover:translate-x-2">CLEARANCE</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2">3D CHARCOAL</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2 ">3D HONEYCOMB</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2 ">3D FORGED</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2 ">TEAL</a>
    <a href="#" class="px-5 py-3 hover:translate-x-2">SILVERY Edition</a> 
  </div>
  </div>  
</template>
 