<script lang="ts">
import { defineComponent } from "vue";
import { getSkin } from "../services/base-skins.service";
 
import coverSkins from "./cover-skins.vue";

export default defineComponent({
  name: "skinsPage",
  components: { coverSkins },
  setup() {
    let skin = getSkin();
    
      return { skin   };
  },
});
</script>

<template>
  <cover-skins v-if="skin" :skin="skin"></cover-skins>
   
</template>
