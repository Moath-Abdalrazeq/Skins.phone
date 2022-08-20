<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import ButtonCounter from "./button-counter.vue";
import FaceIcon from "./face-icon.vue";
import starRate from "./star-rate.vue";

type skinType = {
  firstImg: string;
  secImg: string;
  desc: string;
  price: string;
  id: number;
  color: string;
  type: string;
};
export default defineComponent({
  name: "coverSkins",
  props: {
    skin: { type: Object as PropType<skinType>, required: true },
  },
  components: { starRate, FaceIcon, ButtonCounter },
  setup(props) {
    let imgeView = ref(props.skin.firstImg)
     function switchImge( swap:string ) {
      if (swap==='sec') {
        imgeView.value=props.skin.secImg
      }else{
        imgeView.value=props.skin.firstImg
      }
     }
  
    return {switchImge ,imgeView};
  },
});
</script>
<template>
  <header class=" text-gray-300 , text-xs , p-10 , ml-100 ">
    <h1>
      Home / collection / Samsung Galaxy S22 ULTRA Skins / Samsung Galaxy S22
      ULTRA SIGNATURA THR CORE Skin
    </h1>
  </header>
  <div class=" flex ,  text-gray-300 ">
    <div>
      <img :src="imgeView " alt="phone"  class=" ml-56 "/>
      <div class=" h-48 ml-16 ">  
       <button @click="switchImge('first')" class="switch"> <img :src="skin.firstImg" class=" w-24"> </button>
       <button @click="switchImge('sec')"  class="switch"> <img :src="skin.secImg" class="w-24"> </button>
      </div>
    </div>
    <section class="  , ml-20 ">
      <h2 class=" text-lg 	">{{ skin.desc }}</h2>
      <span class=" flex , pt-6"><star-rate></star-rate></span>
      <h3 class=" text-xl , mt-8 , pb-6 ">25₪</h3>
      <hr class=" p-2">
      <h4>COLOUR :   </h4>
      <div>{{ skin.color }}</div>
      <button-counter ></button-counter>
      <h5 class=" tracking-wide , text-lg , py-1 my-2">ADD SCREEN/CAMERA PROTECTOR</h5>
      <Select class=" p-1 , text-sm , bg-black , border-2 ">
        <option value="NO">NO</option>
        <option value="SCREEN PROTECTOR">SCREEN PROTECTOR</option>
        <option value="Rear CAMERA Lens PROTECTOR">
          Rear CAMERA Lens PROTECTOR
        </option>
        <option value="SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR">
          SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR
        </option>
      </Select>
      <div class="submet">
        <button type="submit" class=" mt-9 mb-10"><span class=" bg-orange-600 px-40 py-2">Add to cart</span></button>
      </div>
      <face-icon></face-icon>
    </section>
  </div>
</template>
 