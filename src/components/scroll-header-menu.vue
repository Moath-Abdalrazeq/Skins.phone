<template>
    <div id="ScrollHeaderId"> <header-menu ></header-menu></div>
</template>
<script lang="ts">
import { defineComponent ,onMounted,ref} from 'vue'
import headerMenu from './header-menu.vue'
export default defineComponent({
    components:{headerMenu},
    setup() {
         

        function OnScroll() {
             
             if (window.pageYOffset > 200) {
                let elm = document.getElementById("ScrollHeaderId")
                if (elm) { 
                  elm.className=" fixed bg-black text-gray-400  w-full "
                 
                }
            }else{
                  let elm = document.getElementById("ScrollHeaderId")
                if (elm) {  
                 elm.className=""
               

                }
            }
        }
        window.onscroll = OnScroll;
       function init( ) {
        let x =document.getElementById("ScrollHeaderId")
        if (x) {
            x.className="text-black"
        }
        
       }
       onMounted(init);
        
    },
})
</script>
