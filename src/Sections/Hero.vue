<script setup>
import Belencita from '../components/Belencita.vue'
import TheBest from '../components/TheBest.vue'
import Sun from '../components/Sun.vue'
import YellowGraphic from '../components/YellowGraphic.vue'
import BlueGraphic from '../components/BlueGraphic.vue'
import GreenGraphic from '../components/GreenGraphic.vue'
import PinkGraphic from '../components/PinkGraphic.vue'
import Instagram from '../components/Instagram.vue'
import {onMounted, ref, watch} from 'vue'

let top = ref(0)

// watch(top, () => {
// const div = document.getElementById('blue-graphic')
// const position = div.getBoundingClientRect()
// top.value = position.height
// console.log(position)
// console.log(top.value)
// })
// onMounted(() => {
// const div = document.getElementById('yellow-area')
// const position = div.getBoundingClientRect()
// top.value = position.height
// console.log(position)
// console.log(top.value)
// })

</script>

<template>
    <div class="bg-darkpink h-screen md:h-[90vh] grid grid-cols-5 grid-rows-10 md:grid-rows-5">
    <div class="px-5 row-start-1 sm:col-start-1 col-start-1 md:px-20 col-span-4 sm:col-span-3 md:row-start-3 md:col-start-1 self-end pb-1">
      <Belencita/>
    </div>
    <div class="px-5 md:px-20 sm:col-start-1 col-span-4 row-start-2 sm:col-span-3 col-start-1 md:row-start-4 md:col-start-1 md:row-span-2 self-start md:relative pt-1">
      <TheBest/>
      <h2 class="text-yellow md:text-darkpink col-span-4 font-subtitle text-xs md:text-md justify-self-end lg:justify-self-center">Just a Wicked Woke Witch</h2>
    </div>
    <div class="col-start-5 row-start-1 p-2 pt-5 md:hidden w-[90%]">
      <Sun/>
    </div>
    <!-- image -->
    <!-- <div class="row-start-1 col-start-2 items-start col-span-5 row-span-7 flex w-full z-[99] md:col-start-4 md:row-start-1 md:justify-start">
      <img class="" src="/file.png" alt="">
    </div> -->
     <div class="row-start-4 col-start-3 z-[99] col-span-2 row-span-2 flex justify-center items-center md:col-start-4 md:row-start-2">
      <img class="min-w-[275px] min-h-[421px] max-w-[375px] max-h-[521px] lg:max-w-[575px] lg:max-h-[821px]" src="/mehq.png" alt="">
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