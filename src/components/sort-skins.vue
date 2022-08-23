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
<div class="  justify-around  flex     mt-6  ">
   <filter-view></filter-view>
   <select class="bg-black text-gray-400 border-solid border-2 border-gray-400  "  >
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
 