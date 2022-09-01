 <script lang="ts">
 import { defineComponent } from 'vue'
 import headerMenu from './header-menu.vue'
 import cartHero from './cart-hero.vue'
 import FooterPages from './footer-pages.vue'
 export default defineComponent({
  components:{cartHero,headerMenu,FooterPages },
  setup() {
    
  },
 })
 </script>
 
 
 
 <template>
 <header-menu  class="text-gray-400 bg-black " ></header-menu>
  <div class="flex justify-center items-center    h-screen   ">
    <div class="w-full max-w-lg  "> 
      <form class="bg-black  ">
        <h1 class="text-gray-300 text-center text-3xl">Login </h1>
        <div class="mb-4">
          <label for="identity"
            class="block text-gray-300 text-sm font-bold mb-2 lg:ml-0 ml-8 ">EMAIL</label>
          <input
            id="identity"
            class="  bg-black border-solid border-gray-700 border-2 w-80 lg:ml-0 ml-8  lg:w-full py-2 px-3 text-gray-300 mb-3   "
            type="text"
            placeholder="Email"/>
         </div>
        <div class="password-input mb-6">
          <label
            for="password"
            class="flex text-gray-300 text-sm font-bold mb-2 justify-between lg:ml-0 ml-8 ">PASSWORD<router-link to="/forgotPassword" class="font-bold text-sm text-gray-300 hover:text-gray-600 lg:mr-0  m-auto"  >
            Forgot?  
          </router-link>  </label>
          <input class="bg-black border-solid border-gray-700 border-2 lg:w-full py-2 px-3 text-gray-300 mb-3  w-80 lg:ml-0 ml-8  " id="password" type="password" placeholder="*******"/> 
         </div>
        <div class="flex items-center justify-between">
          <button class="bg-orange-600   text-black font-bold  lg:w-full  py-2 mb-10  w-80 lg:ml-0 ml-8 " type="submit">Sign In</button>
        </div>
         <router-link to="/createAccount" class="font-bold text-sm text-gray-300 hover:text-gray-600  lg:ml-0 ml-8" href="#">Create account</router-link> 
          <router-link to="/" class="text-gray-300 flex mt-4  lg:ml-0 ml-8">Cancel </router-link>
      </form> 
    </div>
  </div>
  <footer-pages></footer-pages>
</template>
 