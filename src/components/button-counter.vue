<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Ref } from 'vue'
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

   <h6>{{ QUANTITY }}</h6>
<div class="counter">
 <button @click="decreaseCounter">-</button>
<span class="counter">{{counter}}</span>
<button @click="increaseCounter">+</button>
</div > 

</template>

<style scoped>
h6{
   position: relative;
    margin-top:20px ;
       height: 0;


}

.counter button{
    background: black;
    color:lightgray; 
    border: 1px lightgray solid;
}
.counter span{
    text-align: center;
    margin: 5px;
    
}
</style>