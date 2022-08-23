 <template>
  <div class="flex justify-center items-center   h-screen  ">
    <div class="w-full max-w-lg  "> 
      <form class="bg-black  ">
        <h1 class="text-gray-300 text-center text-3xl">Login </h1>
        <div class="mb-4">
          <label for="identity"
            class="block text-gray-300 text-sm font-bold mb-2">EMAIL</label>
          <input
            id="identity"
            class="  bg-black border-solid border-gray-700 border-2   w-full py-2 px-3 text-gray-300 mb-3   "
            type="text"
            placeholder="Email"/>
         </div>
        <div class="password-input mb-6">
          <label
            for="password"
            class="flex text-gray-300 text-sm font-bold mb-2 justify-between">PASSWORD<router-link to="/forgotPassword" class="font-bold text-sm text-gray-300 hover:text-gray-600"  >
            Forgot?  
          </router-link>  </label>
          <input class="bg-black border-solid border-gray-700 border-2 w-full py-2 px-3 text-gray-300 mb-3" id="password" type="password" placeholder="*******"/> 
         </div>
        <div class="flex items-center justify-between">
          <button class="bg-orange-600   text-black font-bold  w-full  py-2 mb-10" type="submit">Sign In</button>
        </div>
         <router-link to="/createAccount" class="font-bold text-sm text-gray-300 hover:text-gray-600" href="#">Create account</router-link> 
          <router-link to="/" class="text-gray-300 flex">Cancel </router-link>
      </form> 
    </div>
  </div>
</template>
 