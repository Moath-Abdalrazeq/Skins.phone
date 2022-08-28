<template>
 
   
 <router-view/>
</template>

<script>
import homePage from "./components/home-page.vue" 
 export default {
  components:{homePage},
 
}
</script>

    <style >
::-webkit-scrollbar {
 	width: 12px;
 height: 8px;

}
/* Handle */
::-webkit-scrollbar-thumb {
 	 border-radius: 10px;
 
	background-color :rgb(165, 152, 152) 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:	#202020; 
} 
</style>