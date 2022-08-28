<template>
<header-menu  class="text-gray-400 bg-black "></header-menu>
  <div class="flex   lg:justify-center   items-center mt-12  h-screen   ">
    <div class="w-full max-w-xs">
    <h1 class="text-gray-500 text-center mb-2 text-3xl lg:ml-0  ml-10">Create Account</h1>
    <form class="bg-black px-8 pt-6 ">
    <div >
     <label for="FN" class="text-gray-400   mr-4 block text-sm font-bold mb-2 tracking-wider	" > FIRST NAME</label>
    <input type="text" id="FN" class="bg-black border-solid border-white border-2 w-80 py-2  text-gray-300 mb-3 " >
      <label for="LN" class="text-gray-400 mr-4 block text-sm font-bold mb-2  tracking-wider" >LAST NAME</label>
    <input type="text" id="LN" class="bg-black border-solid border-white border-2 w-80 py-2 px-3 text-gray-300 mb-3 " >
    <label for="email" class="text-gray-400 mr-4 block text-sm font-bold mb-2  tracking-wider " > Email</label>
    <input type="text" id="email" class="bg-black border-solid border-white border-2 w-80 py-2 px-3 text-gray-300 mb-3 " >
    <label for="pass" class="text-gray-400 mr-4  flex text-sm font-bold mb-2 mt-4  tracking-wider "> Password </label>
    <input type="text" id="pass" class="bg-black border-solid border-white border-2 w-80 py-2 px-3 text-gray-300 mb-3 " >
      <button type="submit" class="bg-orange-700 text-black font-bold w-80 py-3 mb-10 mt-5">Create</button>
    </div>
    </form>
    </div> 
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import headerMenu from './header-menu.vue'

export default defineComponent({
  components: { headerMenu },
  setup() {
    
  },
})
</script>
