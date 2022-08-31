 <template>
 <div class="flex  justify-center">
 <button @click="prev" v-if="currentPage>1" class="cursor-pointer rounded-3xl bg-orange-600 w-8 h-8  "   > <previous-heroicon class="w-4 h-4 ml-2 "></previous-heroicon> </button>
 <div v-for=" item  in pagesCount  " :key="item"  :class="{' bg-white text-black':currentPage===item,'text-white ':currentPage!==item}"  class="h-8 w-8 rounded-full"> 
 <button @click="page(item) "     class="h-8 w-8 rounded-full"> <span class="m-auto">{{ item}}</span> </button></div>
 <button @click="next" v-if="currentPage  < allPages" class="cursor-pointer rounded-3xl bg-orange-600 w-8 h-8  ">  <next-heroicon  class="w-4 h-4 ml-2  "></next-heroicon> </button>
 </div>
 </template>
 
 <script lang="ts">
 import { defineComponent, onMounted, ref } from 'vue'
 import previousHeroicon from './previous-heroicon.vue'
 import NextHeroicon from './next-heroicon.vue'
 export default defineComponent({
  components:{previousHeroicon,NextHeroicon},
  props:{data:{type:Array , required:true } ,} ,
 emits:['onPageChange'],
  setup(props,{emit}) {
         let currentPage=ref(1)
        let pagesCount = ref<number[]>([])
        let allPages =ref(Math.ceil(props.data.length/5))
       function initPagesCount (){
        for(let i=1 ; i<=allPages.value;i++){
         pagesCount.value.push(i)
        }
       }
        function prev() {
        
           currentPage.value--  
           emit('onPageChange',currentPage.value)

      } 
     
    function next() {
     
           currentPage.value++  
           emit('onPageChange',currentPage.value)

   
    }
        
    function page(index:number) {
          
           emit("onPageChange",index)
       currentPage.value=index
    }
    
    
       function init(){
        initPagesCount ()
       }
       onMounted(init);

       return{pagesCount,allPages,currentPage,prev,next,page}
       
  },

 })
 </script>
 