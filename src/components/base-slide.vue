<template>
<div class=" lg:w-32 lg:text-sm lg:p-1 w-60 ">
  <div class=" lg:-ml-10 ">
<img :src="imgeHover"  
@mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg" class="object-contain   lg:h-44 lg:object-cover "/> 
  </div>
<div class=" text-gray-400 lg:-ml-12 lg:text-sm	text-base mr-1">{{slidData.desc}}</div> 
<div class="  text-gray-400   lg:-ml-12 lg:text-sm    ">{{slidData.price}}</div> 
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
 