<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>

     <div class="dropdown">
 <button class="dropbtn">  <a class="   "> Skins for smartphone  </a> </button>
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
  background-color: white;
  color: black;
    font-size: 16px;
  border: none;

  
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  

}
.dropdown-content a {
  color: white;
  padding: 15px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color:darkgrey;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: white;}
</style>