 <template>
   <!-- header menu ----------------------------------------------------->
<header-menu></header-menu>
<div class=" mb-5 text-gray-400   ml-8"> {{route.fullPath}}</div>
<div class=" text-gray-400 font-semibold text-xl  text-center lg:text-2xl"> Samsung Galaxy S22 ULTRA Skins</div>
 <div class=" flex lg:mb-8 mt-5 ">
 <span >
   <sort-skin></sort-skin>
   <filter-view></filter-view>
  </span>
  </div> 
<div class="text-gray-400 text-center text-base my-4 font-mono">Full-Body Skins for Samsung Galaxy S22 ULTRA (6.8" display, 2022) </div>
<div  class="  lg:max-w-5xl mx-auto    " >
<div class="  flex lg:justify-between flex-wrap  ">
      <div v-for="(slid, index) in samsungData" :key="index">
    <router-link to="/skinsPage">
      <button @click="getId(slid.id, slid.type)" class=" bg-none">
        <base-slide :slidData="slid"></base-slide>
      </button>
    </router-link>
  </div>
</div>
</div>
</template>
 <script lang="ts">
import { getIphoneData, getSamsungData, setSkin } from "../services/base-skins.service";
import sortSkin from './sort-skins.vue'
import filterView from './filter-view.vue'
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import baseSlide from "./base-slide.vue";
import HeaderMenu from "./header-menu.vue";
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
   
  components: { baseSlide,sortSkin,filterView, HeaderMenu },
  setup() {
    
  const route = useRoute();
    let samsungData = ref<samsungDataType>(getSamsungData());
    function getId(id: number, type: string) {
      setSkin(id, type);
    }
   
    return {
      samsungData,route,
    
      getId,
    };
  },
});
</script>
 