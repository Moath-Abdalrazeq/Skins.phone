<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup() {
         const counter= ref(0),
          QUANTITY =  ref('QUANTITY')
const increaseCounter =()=>{
    counter.value++;
}
const decreaseCounter =()=>{
    if (counter.value>0) {
            counter.value--;

    }
}
        return{counter,increaseCounter,decreaseCounter,QUANTITY}; 
    },
})
</script>
<template>
   <h6 class=" relative mt-5 text-white">{{ QUANTITY }}</h6>
<div class="counter">
 <button @click="decreaseCounter" class="p-1" >-</button>
<span class=" m-1 p-4" >{{counter}}</span>
<button @click="increaseCounter" class="p-1">+</button>
</div > 
</template>
 