<template>
<div class=" lg:w-56 lg:text-sm  w-60   ">
  <div class="relative">
 <img :src="imgeHover" @mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg" class="object-contain  lg:h-56 lg:object-cover "/>  
         <h3 v-if="slidData.discount" class="absolute text-base text-black bg-orange-500 top-0 right-0 w-20">Save ₪5</h3>
  </div>
<div class=" text-gray-400   lg:text-lg	text-base   ">{{slidData.desc}}   </div> 
 
<div class="  text-gray-400 lg:text-sm"> 
<span v-if="slidData.discount" >{{slidData.discount}} </span> 

<span v-if="slidData.discount">from </span> <span   :class="{ 'line-through':slidData.discount}"> {{slidData.price}}  </span> 
</div> 
 </div>
</template>
<script lang="ts">
import { defineComponent,ref, watch } from 'vue'
 export default defineComponent({
    
    props:{
    slidData:{type:Object, required:true}  
    },
  
    setup( props) {
        
    let imgeHover=ref(props.slidData.firstImg)
  watch(()=>props.slidData,()=>{
    imgeHover.value=props.slidData.firstImg
  })

        return{imgeHover  };
 
    },
})
</script>
 