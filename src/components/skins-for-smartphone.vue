<script lang="ts">
import { defineComponent } from 'vue'
import arrowHover from './arrow-hover.vue'

export default defineComponent({
  components: { arrowHover },
    setup() {
        
    },
})
</script>

<template>

     <div class="dropdown">
 <button class="dropbtn">  <a class="   "> Skins for smartphone  </a> <arrow-hover></arrow-hover> </button>
   <div class="dropdown-content">
    <a href="#">iPhone Skins</a>
    <a href="#">Samsung Skins</a>
    <a href="#">Google PIXEL Skins</a>
    <a href="#">OnePlus Skins</a>
    <a href="#">HUAWEI Skins</a>
  </div>
    </div>
</template>

<style scoped>
  .dropdown {
    
  position: relative;
  display: inline-block;
}
.dropbtn {
  background-color: inherit;
  color:white;
  font-size: 12px;
  border: none;
  outline: none;  
}
.dropdown-content {
  display: none;
  z-index: 6;
  position: absolute;
  background-color: black;
    font-size: 12px;
    min-width: 100%;
}
.dropdown-content a {
  color: white;
  padding:5px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color:black; font-family: Monospace; }

.dropdown:hover .dropdown-content {display: block;  }

.dropdown:hover .dropbtn {background-color: black; text-decoration: underline;}
</style>