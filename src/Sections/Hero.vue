<script setup>
import Belencita from '../components/Belencita.vue'
import TheBest from '../components/TheBest.vue'
import Sun from '../components/Sun.vue'
import YellowGraphic from '../components/YellowGraphic.vue'
import BlueGraphic from '../components/BlueGraphic.vue'
import GreenGraphic from '../components/GreenGraphic.vue'
import PinkGraphic from '../components/PinkGraphic.vue'
import Instagram from '../components/Instagram.vue'
import {onMounted, ref } from 'vue'



const firstElement = ref(null); // Ref for the first element
const secondElementY = ref(0); // Y position for the second element

const calculatePosition = () => {
  firstElement.value = document.getElementById('yellow-area')
  if (firstElement.value) {
    // Get the bounding box of the first element
    const rect = firstElement.value.getBoundingClientRect();
    secondElementY.value = rect.top; // Save the Y position
  }
};

onMounted(() => {
  calculatePosition(); // Calculate position when the component is mounted
});



</script>

<template>
    <div class="h-[90vh] grid grid-cols-5 grid-rows-10 md:grid-rows-5 overflow-x-hidden">
    <div class="px-5 row-start-1 sm:col-start-1 col-start-1 md:px-20 col-span-4 sm:col-span-3 md:row-start-3 md:col-start-1 self-end pb-1">
      <Belencita/>
    </div>
    <div class="px-5 md:px-20 sm:col-start-1 col-span-4 row-start-2 sm:col-span-3 col-start-1 md:row-start-4 md:col-start-1 md:row-span-2 self-start md:relative pt-1">
      <TheBest/>
      <h2 class="text-yellow ml-[10px] md:ml-0 md:text-darkpink col-span-4 font-subtitle text-xs md:text-md justify-self-end 2xl:justify-self-start z-[99]">Just a Wicked Woke Witch</h2>
    </div>
    <div class="col-start-5 row-start-1 p-2 pt-5 md:hidden w-[90%]">
      <Sun/>
    </div>
    <!-- image -->
     <div :style="{ position: 'absolute', top: secondElementY + 'px' }" class="z-[99] overflow-x-hidden max-w-screen translate-y-[-77%] left-[20vw] md:left-[60vw]">
      <img class="min-w-[200px] min-h-[250px] max-w-[70vw] max-h-[100vh] overflow-x-hidden lg:max-w-[575px] lg:max-h-[821px]" src="/mehq.png" alt="">
    </div>
    <!-- Spinner -->
    <div class="md:col-start-1 col-start-3 w-fit h-fit row-start-3 row-span-3 col-span-3 md:col-span-1 md:row-span-1 md:row-start-1 justify-self-center animate-spin-slow">
      <img class="w-[150px] h-[150px] p-5" src="/spinner.png" alt="">
    </div>
    <!-- Graphics -->
    <div class="row-start-6 col-start-1 col-span-2 z-[99] flex justify-center  md:col-start-3 md:row-start-2 md:col-span-1">
      <YellowGraphic/>
    </div>
    <div id='blue-graphic' class="row-start-6 col-start-4 z-[99] col-span-2 row-span-2 flex justify-center items-center md:col-start-3 md:row-start-3">
      <BlueGraphic/>
    </div>
    <div class="hidden md:block row-start-5 col-start-2 z-[99]">
      <GreenGraphic/>
    </div>
       <div class="hidden md:block row-start-5 col-start-5 justify-self-center z-[99]">
      <PinkGraphic/>
    </div>
    <!-- Yellow area -->
    <div id="yellow-area" class="px-5 md:px-20 bg-yellow col-start1 row-start-7 col-span-5 row-span-4 md:row-start-4 col-start-1"></div>

    <!-- Instagram -->
    <div class="row-start-9 md:row-start-5 md:col-start-1 md:col-span-1 row-span-2 col-start-1 col-span-2 flex justify-center items-center">
      <Instagram/>
    </div>
  </div>
</template>


<style scoped>

</style>