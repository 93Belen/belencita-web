<script setup>
import { onMounted, ref } from 'vue'
import Knob from '../Knob.vue'
const colors = {
      'darkpink': '#FF99C8',
      'pink': '#F1C0E8',
      'yellow': '#FCF6BD',
      'purple': '#CEBAF0',
      'green': '#D0F4DD',
      'orange': '#FDE3CE',
      'lightblue': '#8EECF5',
      'blue': '#A4C4F3',
      'transparent': 'transparent',
    }

const hueRange = [
  38,   // orange (#FDE3CE)
  54,   // yellow (#FCF6BD)
  141,  // green (#D0F4DD)
  196,  // lightblue (#8EECF5)
  211,  // blue (#A4C4F3)
  270,  // purple (#CEBAF0)
  328,  // darkpink (#FF99C8)
  340   // pink (#F1C0E8)
];



let light = ref(50)
let sat = ref(60)
let hue = ref(0)


const changeSat = () => {
    if(sat.value < 100){
        sat.value = sat.value + 10
    }
    else {
        sat.value = 20
    }
}

const keepTurning = () => {
    if(hue.value < 300){
        hue.value = hue.value + 45
    }
    else{
        hue.value = 0
    }
}



</script>



<template>
    <div class="w-full h-[250px] md:h-full grid md:p-6 grid-cols-3 grid-rows-3 justify-center items-center">
        <!-- Hue -->
        <div @click="keepTurning" :style="{ transform: `rotate(${hue}deg)` }" class="h-[70px] row-span-2">
             <Knob/>
        </div>
        <!-- Sat -->
        <button @click="changeSat" class="w-[70px] h-[70px] border-4 rounded-full bg-white border-blue row-span-2 shadow-lg relative active:top-[4px] actie:shadow-none active:left-[2px]">TOUCH</button>
        <!-- Light -->
            <input 
            type="range" 
            v-model="light" 
            min="50" 
            max="75" 
            value="1" 
            :style="{ '--range-shdw': `hsl(${hueRange[3]}, ${sat}%, ${light}%)` }"
            class="range col-span-3 col-start-1 row-start-1" />
        <!-- Color div -->
        <div :style="{backgroundImage: `linear-gradient(40deg, hsl(${hueRange[hue/45]}, ${sat}%, ${light}%), hsl(${hueRange[hue/45]}, ${sat - 10}%, ${light + 5}%))`}" class="col-start-3 row-span-2 w-full h-full rounded-xl border-2 border-black"></div>
    </div>
</template>