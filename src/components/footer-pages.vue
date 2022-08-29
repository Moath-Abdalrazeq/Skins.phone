 <template>
	<footer class=" bg-gray-800  text-gray-300  lg:py-10 mt-6  lg:mt-0  ">
     
    <div class=" lg:flex   justify-around ml-5   " >     
<button @click="showFooterMenu=!showFooterMenu" class="lg:hidden mt-4  " >The Important Stuff <arrow-hover class="h-4 w-4"></arrow-hover></button>  
  <div :class="{ 'hidden lg:flex ':!showFooterMenu }"   >
		<div class=" flex     ">  
			<div class="flex flex-col space-y-4 ">
                 <h2 class=" lg:flex hidden "> The Important Stuff </h2>      
			<div class="flex flex-col space-y-2 text-sm dark:text-gray-400 ">
					<a   href="#">FAQ</a>
					<a   href="#">Search</a>
					<a   href="#">Verified Reviews</a>
					<a   href="#">About Us</a>
					<a   href="#">Contact us</a>
					<a   href="#">Terms and Conditions</a>
					<a   href="#"> Refund Policy</a>
                    <a   href="#"> Privacy & Cookies Policy  </a>
                    <a   href="#"> Delivery Policy</a>
                    <a   href="#"> Cancellation Policy</a>
				</div>
			</div>
        </div>
        </div><hr class="mt-2  w-11/12 lg:hidden">
			<div class="  space-y-4    ">
				<h2 class="font-medium">Sign up and save</h2>
				<div class=" space-y-4 text-sm dark:text-gray-400 ">
					<h3>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</h3>
                    <input type="text" class="w-80 p-2 bg-gray-200 " placeholder="Enter your email">
				</div><hr class="mt-2 lg:hidden w-11/12">
            </div>     
            <div class="lg:space-y-3   ">
					<div  class=" uppercase  text-gray-50     ">Social Media</div>
					<div class=" flex justify-start space-x-3  ">
						<a href="#" title="Facebook" class="flex items-center p-1">
							 <face-icon></face-icon>
						</a>
						<a  href="#" title="Instagram" class="flex items-center p-1">
						  <instgram-icon></instgram-icon>
						</a>
					</div>
				</div>
			</div>
		<div class="py-6 text-sm text-center dark:text-gray-400">©   2022 Skins.phone™All rights reserved.</div>
      
	</footer>
</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
import faceIcon from './face-icon.vue'
import arrowHover from './arrow-hover.vue'
import instgramIcon from './instgram-icon.vue'
export default defineComponent({
  components: { faceIcon,arrowHover,instgramIcon },
    setup() {
                let showFooterMenu = ref(false)
return{showFooterMenu}
    },
})
</script>

