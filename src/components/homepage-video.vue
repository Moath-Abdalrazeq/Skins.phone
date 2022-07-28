<template>  
<video class="video"      autoplay loop>
  <source :src="backgroundVideo" type="video/mp4">
   
  Your browser does not support the video tag.
</video>
 
</template>

<script lang="ts">
import backgroundVideo from "../assets/videos/blue.mp4"
import { defineComponent } from 'vue'
  

export default defineComponent({
    setup() {
        return { backgroundVideo  };
        
    },
})
</script>

<style scoped>
 .video {
       position: absolute;
    width: 100%;
    z-index: -1;
    object-fit: cover;
    height: 300px;
  }
</style>
