<template>
     <img :src="imgeHover"  
     @mouseover="imgeHover=slidData.secImg" @mouseleave="imgeHover=slidData.firstImg"/> 
    <div class="text-color ">{{slidData.desc}}</div> 
    <div class="text-color center ">{{slidData.price}}</div> 
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
.text-color {
    color: darkgrey;
     font-size: 20px;
     flex-flow:row;
     
}
.center{
    display: block;
    justify-content: center;
    margin:15px 0px;
}
img{
height: 250px;
}
 
</style>