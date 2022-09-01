<template>
  <header-menu  class="text-gray-400 bg-black "></header-menu>
 <div class="flex  justify-center  items-center mt-10  h-screen  ">
  <div class="w-full max-w-lg  "> 
    <form class=" text-slate-300" >
      <h1 class="  text-center text-3xl mb-14 ">Login </h1>
      <div class="mb-4">
      <h2 class="mb-3  lg:ml-0 ml-4">Reset your password</h2>
      <h3 class="mb-3 lg:ml-0 ml-4">We will send you an email to reset your password.</h3>
     <div class="mb-4">
          <label for="email"
            class="block   text-sm font-bold mb-2 lg:ml-0 ml-4">EMAIL</label>
          <input
            id="email"
            class="  bg-black border-solid border-gray-700 border-2   lg:w-full  py-2 px-3 text-gray-300 mb-3 w-80 lg:ml-0 ml-4  "
            type="email"
            placeholder="Email"/>
         </div>
          <div class="flex items-center justify-between">
          <button class=" bg-orange-600   text-black font-bold text-center w-32 py-3 mb-10 lg:ml-0 ml-4" type="submit">Submit</button>
        </div>
        <router-link to="/loginPage" class="lg:ml-0 ml-4">Cancel </router-link>
      </div>
    </form>
 </div>
 </div>
 <footer-pages></footer-pages>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterPages from './footer-pages.vue'
import headerMenu from './header-menu.vue'
 
export default defineComponent({
  components: { headerMenu, FooterPages },
  setup() {
    return{ }
  },
})
</script>
