<template>
<div class=" lg:w-56 lg:text-sm  w-60   ">
  
<img :src="imgeHover"  
@mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg" class="object-contain  lg:h-56 lg:object-cover "/> 
<div class=" text-gray-400   lg:text-lg	text-base   ">{{slidData.desc}}</div> 
<div class="  text-gray-400     lg:text-sm    ">{{slidData.price}}</div> 
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
 