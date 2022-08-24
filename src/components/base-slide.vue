<template>
<div class=" lg:w-56 lg:text-sm  w-48   ">
  <span class="  ">
    <!-- <h3 class=" absolute  top-auto border rounded-lg	 text-base text-black bg-orange-500  w-14 ml-4 ">OFFER</h3> -->
<img :src="imgeHover"  @mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg" class="object-contain   lg:h-56 lg:object-cover "/> 
</span>
<div class=" text-gray-400   lg:text-lg	text-base  ">{{slidData.desc}}</div> 
<div class=" text-gray-400   lg:text-lg	text-base   ">{{slidData.price}}</div> 

<!-- <div class=" text-gray-400 lg:text-sm">
<span v-if="slidData.discount" class="line-through" > {{slidData.discount}}</span>
<span v-if="slidData.discount" class="ml-2" >from</span> {{slidData.price}}
</div> -->
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
 