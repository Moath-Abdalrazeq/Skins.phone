<template>
 
    <img :src="[slidData.firstImg]"    />
    <div class="text-color ">{{slidData.desc}}</div> 
    <div class="text-color center ">{{slidData.price}}</div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
 
export default defineComponent({
    props:{
    slidData:{type:Object, required:true}  
    },
    setup( ) {
 
        return{
            
        };
    },
})
</script>
<style scoped>
.text-color {
    color: white;
    display: flex;
    justify-content: center;
     font-size: 25px;
}
     
.center{
    display: flex;
    justify-content: center;
}
 
</style>