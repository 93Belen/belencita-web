<script setup>
import Spain from '../components/Countries/Spain.vue'
import Uk from '../components/Countries/Uk.vue'
import Us from '../components/Countries/Us.vue'
import DarkBlueGraphic from '../components/DarkBlueGraphic.vue'
import OrangeGraphic from '../components/OrangeGraphic.vue'

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import {onMounted, ref } from 'vue'



const country = ref('spain');

const changeCountry = (string) => {
    country.value = string
}





</script>



<template>
    <div class="bg-white h-fit py-10 md:py-0 md:min-h-[75vh] border-b-2 border-black md:grid md:grid-rows-1 md:grid-cols-[40%_60%] text-black">
        <!-- Mobile Cards Carousel -->
        <div class="md:hidden p-2 pt-5 md:p-20 h-fit">
            <!-- Slider main container -->
            <swiper-container class="mySwiper h-fit w-[85%] m-auto" effect="cards" grab-cursor="true">
            <swiper-slide class="flex p-5 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Spain/>
                <div class="pt-2">
                    <h3 class="font-bold text-xs">From the southernmost part of Spain.</h3>
                    <p class="text-xs">
                    Almeria is the humble crossroads between Africa and Europe. I miss the narrow streets, 
                    the <span class="italic">jaleo</span> in the bars, its moorish charm, and the warm evenings by the mediterranean sea.</p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-5 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Uk/>
                <div class="p-2">
                    <h3 class="font-bold text-xs">London changed <span class="italic">everything</span>.</h3>
                    <p class="text-xs">
                    I didn’t speak English when I arrived, but I got a job cleaning tables and built a career in retail.
                    Here, I made friends from all over the world, met my husband, and completely changed my life.
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-5 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Us/>
                <div class="p-2">
                    <h3 class="font-bold text-xs">Now I live in Kansas City...</h3>
                    <p class="text-xs">
                    And after many cultural shocks, I’ve come to call it home. Here, I’ve been given opportunities I never dreamed of.
                    But most importantly, I adopted my dog, Troy—the true spark of my life and my best friend in the entire universe.
                    </p>
                </div>
            </swiper-slide>
            </swiper-container>
        </div>
        <!-- Desktop -->
        <div class="hidden md:grid grid-cols-3 grid-rows-3 justify-center items-center pl-20 xl:pl-36 py-12 text-md xl:text-lg">
            <div class="hidden lg:block col-start-1 row-start-1 z-[0] relative right-10"><DarkBlueGraphic/></div>
             <div v-if="country === 'spain'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3">
                <h3 class="font-bold">From the southernmost part of Spain.</h3>
                <p class="">
                Almeria is the humble crossroads between Africa and Europe. I miss the narrow streets, 
                the <span class="italic">jaleo</span> in the bars, its moorish charm, and the warm evenings by the mediterranean sea.</p>
            </div>
            <div v-if="country === 'uk'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3">
                <h3 class="font-bold ">London changed <span class="italic">everything</span>.</h3>
                <p class="">
                    I didn’t speak English when I arrived, but I got a job cleaning tables and built a career in retail.
                    Here, I made friends from all over the world, met my husband, and completely changed my life.
                </p>
            </div>
            <div v-if="country === 'us'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3">
                <h3 class="font-bold">Now I live in Kansas City...</h3>
                <p class="">
                    And after many cultural shocks, I’ve come to call it home. Here, I’ve been given opportunities I never dreamed of.
                    But most importantly, I adopted my dog, Troy—the true spark of my life and my best friend in the entire universe.
                </p>
            </div>
            <div class="hidden lg:block z-[0] col-start-3 row-start-3 relative left-10"><OrangeGraphic /></div>
        </div>
        <div class="w-full hidden md:grid md:grid-cols-6 md:grid-rows-6 text-md font-regular font-alternates">
            <div id="maps" class="border-l-2 border-black col-start-3 col-span-4 row-start-1 row-span-6"></div>
            <div @click="changeCountry('spain')" class="cursor-pointer row-start-4 col-start-4 col-span-2 row-span-3 md:w-[230px] md:self-center lg:self-center rotate-12 grid grid-col-1 grid-row-1">
                <p class="justify-self-center mb-5 self-end row-start-1 col-start-1 z-[99] rotate-[-10deg]">Almeria</p>
                <div class="m-auto row-start-1 col-start-1"><Spain/></div>
            </div>
            <div @click="changeCountry('uk')" class="cursor-pointer row-start-1 col-start-4 xl:col-start-3 col-span-3 row-span-2 md:w-[270px] justify-self-end lg:self-center rotate-[-5deg] grid grid-col-1 grid-row-1">
                <p class="justify-self-center mb-5 self-end ml-2 row-start-1 col-start-1 z-[99] rotate-[5deg]">London</p>
                <div class="m-auto row-start-1 col-start-1"><Uk/></div>
            </div>
            <div @click="changeCountry('us')" class="cursor-pointer row-start-2 col-start-1 col-span-2 row-span-3 md:w-[300px] lg:w-[450px] md:self-center rotate-[-10deg] grid grid-col-1 grid-row-1">
                <p class="m-auto row-start-1 col-start-1 z-[99] rotate-[10deg]">Kansas City</p>
                <div class="m-auto row-start-1 col-start-1 lg:min-w-[400px]"><Us/></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
swiper-slide {
    background-image: url('/bg.png');
    background-size: cover;
}
#maps {
    background-image: url('/bg.png');
    background-size: cover;
}
</style>