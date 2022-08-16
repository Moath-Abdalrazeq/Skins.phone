<template>
<img :src="imgeHover"  
@mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg" class=" h-64  "/> 
<div class=" text-blue-50  ">{{slidData.desc}}</div> 
<div class="  text-blue-50      ">{{slidData.price}}</div> 
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
<style scoped>
</style>