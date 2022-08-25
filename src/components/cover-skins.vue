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
 
  <header class="  text-gray-300 , text-xs , p-10 ,  ">
    <h1>
      Home / collection / Samsung Galaxy S22 ULTRA Skins / Samsung Galaxy S22
      ULTRA SIGNATURA THR CORE Skin
    </h1>
  </header>
  <div class=" md:flex lg:flex text-gray-300 block font-light">
    <div>
      <img :src="imgeView " alt="phone"  class=" mr-20  lg:ml-24  "/>
      <div class=" h-24  lg:h-48 lg:ml-16 ">  
       <button @click="switchImge('first')" class="switch"> <img :src="skin.firstImg" class=" w-20  lg:w-24"> </button>
       <button @click="switchImge('sec')"  class="switch"> <img :src="skin.secImg" class=" w-20  lg:w-24"> </button>

      </div>
    </div>

    <section class=" ml-5 block , lg:ml-20 ">
      <h2 class=" flex-nowrap mr-16 text-sm lg:text-lg 	">{{ skin.desc }}</h2>
      <span class=" flex , pt-6"><star-rate ></star-rate></span>
      <h3 class=" mt-5  lg:text-xl , lg:mt-8 , lg:pb-6 ">25₪</h3>
      <hr class=" p-2 mt-4 w-80 lg:p-2">
      <div class=" flex text-sm">
      <h4 >COLOUR :</h4>
      <div class=" ml-1">{{ skin.color }}</div>
      </div>
      <button-counter  ></button-counter>
      <h5 class=" tracking-wide  lg:text-lg  py-1 my-2">ADD SCREEN/CAMERA PROTECTOR</h5>
      <Select class=" p-1  lg:text-sm  bg-black  border-2 w-80 lg:w-96 ">
        <option value="NO">NO</option>
        <option value="SCREEN PROTECTOR">SCREEN PROTECTOR</option>
        <option value="Rear CAMERA Lens PROTECTOR">Rear CAMERA Lens PROTECTOR </option>
        <option value="SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR">  SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR </option>
      </Select>
      <div class=" bg-orange-500 mt-6 pb-2 mb-5 font-bold	text-black text-center text-lg w-80 lg:w-96 ">
        <button type="submit" class=" "><h1 class=" hover:text-white  mt-3 	">Add to cart</h1></button>
      </div>
      <face-icon></face-icon>
    </section>
  </div>
</template>

<style scoped>

</style>
