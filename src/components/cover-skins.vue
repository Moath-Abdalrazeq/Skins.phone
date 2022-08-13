<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonCounter from './button-counter.vue'
import FaceIcon from './face-icon.vue'
import starRate from './star-rate.vue'
 
export default defineComponent({
    name:"coverSkins",
props:{
    data:{type:Object , required:true} 
},
  components: { starRate, FaceIcon, ButtonCounter },
    setup() {
 
    return { } },

})
</script>

<template>
<header class="head">
    <h1 >Home / collection / Samsung Galaxy S22 ULTRA Skins / Samsung  Galaxy  S22 ULTRA SIGNATURA THR CORE Skin</h1>
</header>
<div class="main">

    <div>
        <img :src="data.firstImg" alt="phone">
    </div>
    <section class="txt">
        <h2> {{data.desc}} </h2> 
        <span><star-rate></star-rate></span>
        <h3>25₪</h3><hr>
        <h4>COLOUR </h4>     
      <div>{{data.color}}</div>
          
  
<button-counter></button-counter>
 <h5>ADD SCREEN/CAMERA PROTECTOR</h5>
 <Select class="choose">
    <option value="NO" > NO</option>
    <option value="SCREEN PROTECTOR">SCREEN PROTECTOR </option>
    <option value="Rear CAMERA Lens PROTECTOR">Rear CAMERA Lens PROTECTOR</option>
    <option value="SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR">SCREEN PROTECTOR + Rear CAMERA Lens PROTECTOR</option>
</Select>
<div class="submet"><button type="submit" ><span >Add to cart</span></button></div>
<face-icon></face-icon>
    </section>
    </div>
</template>

<style scoped>
.head{
    color: lightgray;
    font-size: 5px;
    padding: 40px;
    margin-left: 100px;
    
}
.main{
    display: flex;
    color: lightgray;
     }
img{
   padding-top: 40px 0 ;
   margin-left: 230px;
}
h2{
    font-size:24px ;
}
.txt{
    margin-left: 120px;
    display: block;
}
.txt span{
    display: flex;
  
}
h3{
    font-size: 20px;
}
hr{
    border: 0;
    height: 1px;
    width: 400px;
    margin:0;
    border-top: 1px solid; 
}
.txt h4{
    font-size: 10px;
}
.select{
    color:lightgray;
    background-color: black;
    padding: 5px;
    font-size: 8px;
}
 h5{
    font-size: 10px;
    word-spacing: 1px;
   padding: 5px 0;
   margin: 7px 0;
}
.choose{
    color:lightgray;
    background-color: black;
    font-size:13px;
    padding: 5px;
}

.submet button{
 font-size: bold;
  margin: 30px 0;
  border: none;
  
}
.submet span{
    background: orangered;
    padding: 8px 150px;
    border: none;
    
}

</style>