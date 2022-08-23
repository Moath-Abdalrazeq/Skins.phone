<template >
 <button @click="showAvailability=!showAvailability" class="" >Availability</button>
 <arrow-hover class="w-4 h-8"></arrow-hover>
 <div :class="{'block':showAvailability,'hidden ':!showAvailability}"  >
    <div>
<input type="checkbox" name="checkbox"><span class="text-base">  in stock(105) </span>
    </div>
<input type="checkbox" name="checkbox" > <span class="text-base">  Out of stock(105)</span>
</div>
<div>
    <hr class="mt-4 mb-4">
 <button @click="showProductType=!showProductType" class="" >Product type</button>
 <arrow-hover class="w-4 h-8"></arrow-hover>
 <div :class="{'block':showProductType,'hidden ':!showProductType}"  >
<input type="checkbox" name="checkbox"   > <span class="text-base"> Samsung Galaxy S22 ULTRA Skins, Wraps & Covers</span> 
 </div>
</div>
<hr class="mt-4  ">
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import arrowHover from './arrow-hover.vue'
export default defineComponent({
components:{arrowHover},
    setup() {
        let showAvailability = ref(false)
        let showProductType = ref(false)
        return{showAvailability,showProductType}
    },
})
</script>
