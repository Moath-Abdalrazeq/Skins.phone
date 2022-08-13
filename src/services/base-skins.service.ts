/*samsung galaxy s22 ultre*/
import imgeOne from '../assets/img/samsung-s22-ultra/Samsung Galaxy S22 ULTRA BRUSHED TITANIUM Metallic Skin.webp'
import imgeTwo from '../assets/img/samsung-s22-ultra/Samsung Galaxy S22 ULTRA SIGNATURE Abstract Velvet Skin.webp'
import imgeThree from "../assets/img/samsung-s22-ultra/Samsung Galaxy S22 ULTRA SIGNATURE Blue HEXAGON Skin.webp"
import imgeFour from '../assets/img/samsung-s22-ultra/Samsung Galaxy S22 ULTRA SIGNATURE Camouflage Dark Slate Skin.webp'
import imgeFive from '../assets/img/samsung-s22-ultra/Samsung Galaxy S22 ULTRA SIGNATURE THE CORE Skin.webp'
 import imgeHoverFive from '../assets/img/samsung-s22-ultra/imge-hover-five.webp'
 import imgeHoverThree from "../assets/img/samsung-s22-ultra/imge-hover-three.webp"
import imgeHoverFour from '../assets/img/samsung-s22-ultra/imge-hover-four.webp'
 import imgeHoverOne from '../assets/img/samsung-s22-ultra/imge-hover-one.webp'
import imgeHoverTow from '../assets/img/samsung-s22-ultra/imge-hover-tow.webp'
  
  
       let samsung =  [
           {
               firstImg:imgeOne ,
               secImg:imgeHoverOne,
               desc:"Samsung Galaxy S22 ULTRA BRUSHED TITANIUM Metallic Skin",
               price:"25₪",
               id:1,
               color:"red"
           },
             {
               firstImg:imgeTwo ,
               secImg: imgeHoverTow ,
               desc:"Samsung Galaxy S22 ULTRA SIGNATURE Abstract Velvet Skin",
               price:"25₪",
               id:2,
               color:"blue"
           },
             {
               firstImg:imgeThree ,
               secImg:imgeHoverThree ,
               desc:"Samsung Galaxy S22 ULTRA SIGNATURE Blue HEXAGON Skin",
               price:"25₪",
               id:3,
               color:"black"
           
           },
             {
               firstImg:imgeFour ,
               secImg:imgeHoverFour ,
               desc:"Samsung Galaxy S22 ULTRA SIGNATURE Camouflage Dark Slate Skin",
               price:"25₪",
               id:4,
               color:"green"

           
           },
             {
               firstImg:imgeFive ,
               secImg:imgeHoverFive ,
               desc:"Samsung Galaxy S22 ULTRA SIGNATURE THE CORE Skin",
               price:"25₪",
               id:5,
               color:"yellow"
           
           },
       
       ];
       let objectId = -1 
      export function getSamsungData( ) {
        return samsung
        
        
       }
       
       export function setSamsungById( param:number ) {
         objectId=param
      }

       export function getSamsungById() {
        objectId=-1
        for (let i = 0; i < samsung.length; i++) {
          if (objectId===samsung[i].id) {
             return samsung[i]
          
        }
       }
        
      }


       // iphone 13 pro max ........................................................................................................................
import imgOne from "../assets/img/iphone/imge-one.webp"
import imgTwo from '../assets/img/iphone/imge-two.webp'
import imgThree from '../assets/img/iphone/img-three.webp'
import imgFour from '../assets/img/iphone/img-four.webp'
import imgFive from '../assets/img/iphone/imge-five.webp'
import imgeSix  from '../assets/img/iphone/imge-six.webp'
import imgeSeven from '../assets/img/iphone/imge-seven.webp'
import imgeEight from '../assets/img/iphone/imge-eight.webp'
import imgeNine from '../assets/img/iphone/imge-nine.webp'
import imgeTen from '../assets/img/iphone/imge-ten.webp'
import imgeEleven  from '../assets/img/iphone/imge-eleven.webp'
import imgeTwelve from '../assets/img/iphone/imge-twelve.webp'
import imgeThirteen from '../assets/img/iphone/imge-thirteen.webp'
import imgeFourteen from '../assets/img/iphone/imge-fourteen.webp'
import imgeFifteen from '../assets/img/iphone/imge-fifteen.webp'
import imgeHoveOne from "../assets/img/iphone/iphone-hover/imge-hover-one.webp"
import imgeHoveTwo  from '../assets/img/iphone/iphone-hover/imge-hover-tow.webp'
import imgeHoveThree from '../assets/img/iphone/iphone-hover/imge-hover-three.webp'
import imgeHoveFour from '../assets/img/iphone/iphone-hover/imge-hover-four.webp'
import imgeHoveFive from '../assets/img/iphone/iphone-hover/imge-hover-five.webp'
import imgeHoverSix  from '../assets/img/iphone/iphone-hover/imge-hover-sex.webp'
import imgeHoverSeven from '../assets/img/iphone/iphone-hover/imge-hover-seven.webp'
import imgeHoverEight from '../assets/img/iphone/iphone-hover/imge-hover-eight.webp'
import imgeHoverNine from '../assets/img/iphone/iphone-hover/imge-hover-nine.webp'
import imgeHoverTen from '../assets/img/iphone/iphone-hover/imge-hover-ten.webp'
import imgeHoverEleven  from '../assets/img/iphone/iphone-hover/imge-hover-eleven.webp'
import imgeHoverTwelve from '../assets/img/iphone/iphone-hover/imge-hover-twelve.webp'
import imgeHoverThirteen from '../assets/img/iphone/iphone-hover/imge-hover-thirteen.webp'
import imgeHoverFourteen from '../assets/img/iphone/iphone-hover/imge-hover-fourteen.webp'
import imgeHoverFifteen from '../assets/img/iphone/iphone-hover/imge-hover-fifteen.webp'

let Iphone =[
  {
      firstImg:imgOne ,
      secImg:imgeHoveOne ,
      desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
      price:"25₪",
      id:1,
      color:'red'
  
  },
    {
      firstImg:imgTwo ,
      secImg:imgeHoveTwo ,
      desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
      price:"25₪",
      id:2,
      color:'red'
  
  },
    {
      firstImg:imgThree ,
      secImg:imgeHoveThree ,
      desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
      price:"25₪",
      id:3,
      color:'red'
  
  },
    {
      firstImg:imgFour ,
      secImg:imgeHoveFive ,
      desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
      price:"25₪",
      id:4,
      color:'red'
  
  },
    {
      firstImg:imgFive ,
      secImg:imgeHoveFour ,
      desc:"iPhone 13 Pro MAX SIGNATURE Art in FLORENCE Skin",
      price:"25₪",
      id:5,
      color:'red'
  
  },
   {
      firstImg:imgeSix,
      secImg:imgeHoverSix ,
      desc:"iPhone 13 Pro MAX SATIN BLUE Metallic Skin",
      price:"25₪",
      id:6,
      color:'red'
  
  },
    {
      firstImg:imgeSeven ,
      secImg:imgeHoverSeven ,
      desc:"iPhone 13 Pro MAX SIGNATURE Dark Poetry Skin",
      price:"25₪",
      id:7,
      color:'red'
  
  },
    {
      firstImg:imgeEight,
       secImg:imgeHoverEight,
      desc:"iPhone 13 Pro MAX Military Green Metallic Skin",
      price:"25₪",
      id:8,
      color:'red'
  
  },
    {
      firstImg:imgeNine ,
      secImg:imgeHoverNine ,
      desc:"iPhone 13 Pro MAX SIGNATURE Gold in the Veins Skin",
      price:"25₪",
      id:9,
      color:'red'
  
  },
    {
      firstImg:imgeTen ,
      secImg:imgeHoverTen ,
      desc:" iPhone 13 Pro MAX LUXURIA RIDERS Black LEATHER Textured Skin",
      price:"25₪",
      id:10,
      color:'red'
  
  },
       {
      firstImg:imgeEleven,
      secImg: imgeHoverEleven ,
      desc:"iPhone 13 Pro MAX SATIN BLUE Metallic Skin",
      price:"25₪",
      id:11,
      color:'red'
  
  },
    {
      firstImg:imgeTwelve,
      secImg:imgeHoverTwelve ,
      desc:"iPhone 13 Pro MAX SIGNATURE Dark Poetry Skin",
      price:"25₪",
      id:12,
      color:'red'
  
  },
    {
      firstImg:imgeThirteen,
       secImg:imgeHoverThirteen ,
      desc:"iPhone 13 Pro MAX Military Green Metallic Skin",
      price:"25₪",
      id:13,
      color:'red'
  
  },
    {
      firstImg:imgeFourteen ,
      secImg:imgeHoverFourteen ,
      desc:"iPhone 13 Pro MAX SIGNATURE Gold in the Veins Skin",
      price:"25₪",
      id:14,
      color:'red'
  
  },
    {
      firstImg:imgeFifteen ,
      secImg:imgeHoverFifteen ,
      desc:" iPhone 13 Pro MAX LUXURIA RIDERS Black LEATHER Textured Skin",
      price:"25₪",
      id:15,
      color:'red'
  
  }
];

let objectIdOne = -1
      export function getIphoneData( ) {
        return Iphone
        
        
       }
       
       export function setIphoneById( param:number ) {
        objectIdOne=param
       }
       

       export function getIphoneById() {
        objectIdOne=-1
        for (let i = 0; i < Iphone.length; i++) {
          if (objectIdOne===Iphone[i].id) {
             return Iphone[i]
          
        }
       }
       }



      