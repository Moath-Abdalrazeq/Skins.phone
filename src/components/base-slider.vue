<template>
<button @click="prev"><previous-heroicon></previous-heroicon></button>

<div v-for="(slid,index) in tempSlide" :key="index">
 <base-slide :slidData="slid"></base-slide>
</div>

 <button @click="next"><next-heroicon></next-heroicon></button>
 
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import previousHeroicon from './previous-heroicon.vue'
import slideImge from "../assets/img/iphone/imge-one.webp"
import baseSlide from './base-slide.vue'
import NextHeroicon from './next-heroicon.vue'


export default defineComponent({
  components: { baseSlide ,previousHeroicon, NextHeroicon},
    setup() {
         
        let currentSlide =ref(5)
        let tempIndex =ref(0)
        let tempSlide =ref([])
        let slids =ref([
            {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
                price:"25"
            
            },
             {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"next",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"next",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                 secImg:"slideImge" ,
                desc:"next",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:"next",
                price:"25"
            
            },
              {
                firstImg:"slideImge" ,
                secImg:"slideImge" ,
                desc:" next",
                price:"25"
            
            },
       
       
        ]);
        function initSlids(){
            tempSlide.value=[];
            for(let i=tempIndex.value;i < slids.value.length;i++){
              if (i<currentSlide.value) {
                tempSlide.value.push(slids.value[i]);
              }
            }
        }
        function prev(){
            if (tempIndex.value >0) {
                 currentSlide.value = currentSlide.value - 5;
                 tempIndex.value =tempIndex.value - 5;
                initSlids();
            }
      
        }
          function next(){
            if (slids.value.length > currentSlide.value   ) {
                 currentSlide.value = currentSlide.value + 5;
                 tempIndex.value =tempIndex.value + 5;
                initSlids();
            }else{
            currentSlide.value = currentSlide.value ;   
            tempIndex.value =tempIndex.value  ;
            initSlids();
            }
          
        }
        function init( ) {
            initSlids();
        }
        onMounted(init);
        return{
            slideImge,currentSlide,slids,prev,next,tempSlide,initSlids
        };
    },
})
</script>
<style scoped>
.text-color {
    color: white;
}

button{
     margin: 20px 7px;
        
    cursor: pointer;
    border: none;
         border-radius: 50%;
     background-color:#fc4f00;
    width: 40px;
    height: 40px;
    
}
</style>