<script lang="ts">
import { defineComponent ,ref} from 'vue'
 
 import filterView from  './filter-view.vue'
export default defineComponent({
  components: {   filterView },
    setup() {
         return{
           
        }
    },
})
</script>
<template>
<div class=" right-4 lg:right-10  absolute font-mono   ">
   
   <select class="bg-black text-gray-400 border-solid border-2 border-gray-400 w-44 lg:w-80 p-2  "  >
    <option>Featured</option>
    <option>Best selling</option>
    <option>Alphabetically, A-Z</option>
    <option>Alphabetically, Z-A</option>
    <option>Price, low to high</option>
    <option>Price, high to low</option> 
     <option>Date, old to new</option>
    <option>Date, new to old</option> 
  </select>
  </div>  
 
</template>
 