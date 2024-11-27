<script setup>
import Belencita from '../components/Belencita.vue'
import TheBest from '../components/TheBest.vue'
import Sun from '../components/Sun.vue'
import YellowGraphic from '../components/YellowGraphic.vue'
import BlueGraphic from '../components/BlueGraphic.vue'
import GreenGraphic from '../components/GreenGraphic.vue'
import PinkGraphic from '../components/PinkGraphic.vue'
import Instagram from '../components/Instagram.vue'
import Spotify from '../components/Spotify.vue'
import TroysInstagram from '../components/TroysInstagram.vue'
import Image from '../components/Image.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {onMounted, ref, watch } from 'vue'

gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
    gsap.to(".social-media", {
        transform: "scale(0.9) rotateZ(25deg)",   
        duration: 0.1,                          
        scrollTrigger: {
            trigger: "#hero-section",           
            start: "60vh top",               
            end: "bottom center",           
            scrub: false,                   
        },
        yoyo: true,                             
        repeat: 1,                               
        delay: 1,
        stagger: 0.1,                                 
    });
});








</script>

<template>
<div id="hero-section" class="h-[600px] row-start-1 row-span-10 md:row-span-5 md:h-[800px] 2xl:h-[1065px] grid grid-cols-5 grid-rows-10 md:grid-rows-5 relative overflow-hidden z-[50]">
      <div id="yellow-area" class="bg-yellow col-start-1 w-full h-full absolute z-[10] row-start-7 col-span-5 row-span-4 md:row-start-4 col-start-1"></div>


    <div class="h-[600px] row-start-1 row-span-10 md:row-span-5 max-w-[1900px] m-auto md:h-[800px] 2xl:h-[1065px] grid grid-cols-5 col-span-5 grid-rows-10 md:grid-rows-5 relative overflow-hidden z-[50]">
    <div class="px-5 row-start-1 sm:col-start-1 col-start-1 md:px-20 col-span-4 sm:col-span-3 md:row-start-3 md:col-start-1 self-end pb-1">
      <Belencita/>
    </div>
    <div class="px-5 md:px-20 sm:col-start-1 col-span-4 row-start-2 sm:col-span-3 col-start-1 md:row-start-4 md:col-start-1 md:row-span-2 self-start md:relative pt-1">
      <TheBest/>
      <h2 class="text-yellow ml-[10px] md:ml-0 md:text-darkpink col-span-4 font-subtitle text-xs md:text-md justify-self-end 2xl:justify-self-start z-[99]">Just a Wicked Woke Witch</h2>
    </div>
    <!-- image -->
     <div class="h-[300px] top-[30px] w-[323px] md:h-[500px] md:w-[500px] row-start-3 relative left-[-70px] md:left-[-80px] col-start-2 md:top-[-35px] 2xl:top-[80px] z-[99] col-span-4 row-span-3 flex justify-center items-center md:col-start-4 md:row-start-2">
      <img id="img-belen" class="h-full" src="/mehqsmall.png" alt="">
    </div>
    <!-- Spinner -->
    <div class="md:col-start-1 col-start-2 w-fit h-fit row-start-3 row-span-3 col-span-3 md:col-span-1 md:row-span-1 md:row-start-1 justify-self-end md:justify-self-center animate-spin-slow">
      <img class="w-[150px] h-[150px] p-5" src="/spinner.png" alt="">
    </div>
    <!-- Graphics -->
    <div class="row-start-6 relative z-[999] col-start-1 col-span-2 row-span-2 z-[99] flex justify-center  md:col-start-3 md:row-start-2 md:col-span-1">
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

    <!-- Instagram and Spotify -->
    <div class="row-start-9 md:row-start-5 flex justify-around md:justify-center md:gap-5 pl-4 col-span-3 md:gap-5 md:col-start-1 md:col-span-1 row-span-2 col-start-1 flex justify-center items-center">
      <a class="social-media" target="_blank" href="https://www.instagram.com/evil_belencita/"><Instagram/></a>
      <a class="social-media" target="_blank" href="https://open.spotify.com/user/31rngjcpxljttukxzph664vdkg6u"><Spotify/></a>
      <a class="social-media" target="_blank" href="https://www.instagram.com/troy_m_kingston/"><TroysInstagram/></a>
    </div>
  </div>
</div>
</template>


<style scoped>

</style>