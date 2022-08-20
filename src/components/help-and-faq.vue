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
    <div class=" relative inline-block hover:block bg-black  z-20 ">
   <button class="peer  hover: text-white    hover:underline ">  <a class="text-gray-400"> Help & FAQ </a>  <arrow-hover></arrow-hover> </button>
   <div class="hidden peer-hover:flex  hover:flex   bg-black text-sm  text-white fixed">
    <a href="#" class="px-5 py-3 hover:translate-x-2">FAQ - Frequntly Asked Questions</a>
  </div>
  </div>  
</template>
 