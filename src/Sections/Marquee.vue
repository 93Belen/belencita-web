<script setup>
import React from '../components/Tech/React.vue'
import Vue from '../components/Tech/Vue.vue'
import Tailwind from '../components/Tech/Tailwind.vue'
import MaterialUI from '../components/Tech/MaterialUI.vue'
import Socket from '../components/Tech/Socket.vue'
import Matter from '../components/Tech/Matter.vue'
import Three from '../components/Tech/Three.vue'
import Ml5 from '../components/Tech/Ml5.vue'
import Pinia from '../components/Tech/Pinia.vue'
import Gsap from '../components/Tech/Gsap.vue'




</script>

<template>
    <div class="h-fit md:h-[175px] bg-white border-y-2 border-black">
        <div class="relative flex overflow-x-hidden">
            <div class="py-12 animate-marquee whitespace-nowrap w-full min-w-[2000px] justify-around flex ">
                <React/>
                <Tailwind/>
                <Vue/>
                <Gsap/>
                <MaterialUI/>
                <Matter/>
                <Socket/>
                <Three/>
                 <Pinia/>
                <Ml5/>    
            </div>

            <div class="absolute top-0 py-12 pl-10 animate-marquee2 min-w-[2000px] w-full justify-around flex whitespace-nowrap">
                    <React/>
                    <Tailwind/>
                    <Vue/>
                    <Gsap/>
                    <MaterialUI/>
                    <Matter/>
                    <Socket/>
                    <Three/>
                    <Pinia/>
                    <Ml5/>  
            </div>
        </div>
    </div>
</template>