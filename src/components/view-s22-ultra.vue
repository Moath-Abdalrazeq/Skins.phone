 <template>
   <!-- header menu ----------------------------------------------------->
  <header-menu  class="text-gray-400 bg-black "></header-menu> 
<div class="    ">
<div class=" mb-5 text-gray-400   ml-8 "> {{route.fullPath}}</div>
<div class=" text-gray-400 font-semibold text-xl  text-center lg:text-2xl"> Samsung Galaxy S22 ULTRA Skins</div>
 <div class=" flex  mb-8 mt-5 justify-around">
 
  <filter-view></filter-view>
   <sort-skin></sort-skin>
    
  
  </div> 
<div class="text-gray-400 text-center text-base my-4 font-mono">Full-Body Skins for Samsung Galaxy S22 ULTRA (6.8" display, 2022) </div>
<div  class="  lg:max-w-5xl mx-auto     " >
<div   class="  flex justify-around  lg:justify-between flex-wrap  ">
      <div v-for="(slid, index) in tempData" :key="index">
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)" class=" bg-none">
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
  </div>
</div>
</div>
</div>
<base-pagination @onPageChange="pageChange" :data="samsungData" class="mb-4"></base-pagination> 
<footer-pages></footer-pages>
</template>
 <script lang="ts">
import {  getSamsungData, setSkin } from "../services/base-skins.service";
import sortSkin from './sort-skins.vue'
import filterView from './filter-view.vue'
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import baseSlide from "./base-slide.vue";
import HeaderMenu from "./header-menu.vue";
import basePagination from './base-pagination.vue'
import FooterPages from "./footer-pages.vue";
type samsungDataType = {
  firstImg: string;
  secImg: string;
  desc: string;
  price: string;
  id: number;
  color: string;
  type: string;
 
}[];
export default defineComponent({
   
  components: { baseSlide,sortSkin,filterView, HeaderMenu,basePagination, FooterPages },
  setup() {
    
  const route = useRoute();
  let currentPage=ref(1)
  let tempData =ref<samsungDataType>([]);
    let samsungData = ref<samsungDataType>(getSamsungData());
    function getId(id: number, type: string) {
      setSkin(id, type);
    }
   function pageChange(param:number ) {
    currentPage.value=param
    initSamsungData()
   }
   function initSamsungData( ) {
    tempData.value=[]
    let lastCount =currentPage.value*5
    if (lastCount>=samsungData.value.length) {
      lastCount=samsungData.value.length
    }
    for (let i = currentPage.value*5-5 ; i < lastCount; i++) {

       
       tempData.value.push(samsungData.value[i])
      
    }
    }
   function init( ) {
    initSamsungData( )
   }
   onMounted(init);
   
    return {
      samsungData,route,pageChange,tempData,
    
      getId,
    };
  },
});
</script>
 