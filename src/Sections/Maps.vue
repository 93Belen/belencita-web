<script setup>
import Spain from '../components/Countries/Spain.vue'
import Uk from '../components/Countries/Uk.vue'
import Us from '../components/Countries/Us.vue'
import DarkBlueGraphic from '../components/DarkBlueGraphic.vue'
import OrangeGraphic from '../components/OrangeGraphic.vue'
import {onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { register } from 'swiper/element/bundle';
import anime from 'animejs/lib/anime.es.js';
// register Swiper custom elements
register();
const country = ref('spain');
let animation;

onMounted(() => {
    animateText()
});

const animateText = () => {
const p = document.querySelectorAll('.location-text');

    p.forEach(tag => {
        const text = tag.textContent;
        const letters = text.split('');
        
        tag.innerHTML = ''; // clear the paragraph content

        letters.forEach((letter, index) => {
            const span = document.createElement('span'); 
            span.classList.add('inline-block'); 
            span.textContent = letter; 
            tag.appendChild(span);
        });
    });

    const spans = document.getElementsByTagName('span')
    animation = anime({
      targets: spans,
      translateY: [
        { value: '-5px', duration: 500, easing: 'easeInOutQuad' }, // Move up
        { value: '5px', duration: 500, easing: 'easeInOutQuad' },  // Move down
        { value:'-5px', duration: 500, easing: 'easeInOutQuad' }, // Move up again
        { value: 0, duration: 500, easing: 'easeInOutQuad' },   // Return to original position
      ],
      delay: anime.stagger(100, { start: 0 }), // Delay between each letter's animation
      loop: true, // Infinite loop for the animation
    });
}
onUnmounted(() => {
    animation.remove('span')
})




const changeCountry = (string) => {
    country.value = string
}




</script>



<template>
<div class="bg-white w-full max-h-[900px] border-b-2 border-black">
    <div class="maps border-l-2 border-black border-b-2 border-black w-[50vw] hidden 2xl:block absolute max-h-[900px] h-[900px] z-[0] right-0"></div>

    <div class="bg-white md:min-h-[750px] max-w-[1900px] m-auto md:max-h-[900px] overflow-hidden h-fit py-10 md:py-0 md:min-h-[75vh] 2xl:h-[70vh] border-b-2 border-black md:grid md:grid-rows-1 md:grid-cols-[40%_60%] text-black">
        <!-- Mobile Cards Carousel -->
        <div class="md:hidden p-2 pt-5 md:p-20 h-fit">
            <!-- Slider main container -->
            <swiper-container class="mySwiper h-fit w-[85%] m-auto" effect="cards" grab-cursor="true">
            <swiper-slide class="flex p-3 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Spain/>
                <div class="pt-2">
                    <h3 class="font-bold text-xs">From the southernmost part of Spain.</h3>
                    <p class="text-xs">
                    Almeria is the humble crossroads between Africa and Europe, Mediterranean at its core. I miss the narrow streets, 
                    the <span class="italic">jaleo</span> in the bars, the warm evenings...</p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-3 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Uk/>
                <div class="p-2">
                    <h3 class="font-bold text-xs">London changed <span class="italic">everything</span>.</h3>
                    <p class="text-xs">
                    I didn’t speak English when I arrived, but I got a job cleaning tables and built a career in retail.
                    Here, I made friends from all over the world, met my husband, and changed my life for ever.
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-3 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Us/>
                <div class="p-2">
                    <h3 class="font-bold text-xs">Now I live in Kansas City.</h3>
                    <p class="text-xs">
                    And after some cultural shocks, I’ve come to call it home. Here, I’ve been given opportunities I never dreamed of.
                    But most importantly, I adopted my dog Troy—the true spark of my life and my best friend in the entire universe.
                    </p>
                </div>
            </swiper-slide>
            </swiper-container>
        </div>
        <!-- Desktop -->
        <div class="hidden max-h-[900px] md:grid grid-cols-3 grid-rows-3 justify-center items-center pl-20 xl:pl-36 py-12 text-md xl:text-lg">
            <div class="hidden lg:block col-start-1 row-start-1 z-[0] relative right-10"><DarkBlueGraphic/></div>
             <div v-if="country === 'spain'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3 animate-appear">
                <h3 class="font-bold">From the southernmost part of Spain.</h3>
                <p class="">
                    Almeria is the humble crossroads between Africa and Europe, Mediterranean at its core. I miss the narrow streets, 
                    the <span class="italic">jaleo</span> in the bars, the warm evenings...</p>
            </div>
            <div v-if="country === 'uk'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3 animate-appear">
                <h3 class="font-bold ">London changed <span class="italic">everything</span>.</h3>
                <p class="">
                    I didn’t speak English when I arrived, but I got a job cleaning tables and built a career in retail.
                    Here, I made friends from all over the world, met my husband, and changed my life for ever.
                </p>
            </div>
            <div v-if="country === 'us'" class="pt-2 z-[99] col-start-1 col-span-3 row-start-1 row-span-3 animate-appear">
                <h3 class="font-bold">Now I live in Kansas City...</h3>
                <p class="">
                    And after many cultural shocks, I’ve come to call it home. Here, I’ve been given opportunities I never dreamed of.
                    But most importantly, I adopted my dog, Troy—the true spark of my life and my best friend in the entire universe.
                </p>
            </div>
            <div class="hidden lg:block z-[0] col-start-3 row-start-3 relative left-10"><OrangeGraphic /></div>
        </div>
        <div class="w-full max-h-[900px] hidden md:grid md:grid-cols-6 md:grid-rows-6 text-white text-md font-medium font-alternates">
            <div id="maps" class=" maps border-l-2 border-black col-start-3 col-span-4 row-start-1 row-span-6"></div>
            <div @click="changeCountry('spain')" class="cursor-pointer row-start-4 col-start-4 col-span-2 row-span-3 md:w-[230px] md:self-center lg:self-center rotate-12 grid grid-col-1 grid-row-1">
                <p :class="country === 'spain' ? 'text-[#69686A]' : 'text-white'" id="spain" class="location-text justify-self-center mb-5 self-end 2xl:self-center 2xl:mt-[150px] 2xl:text-[34px] row-start-1 col-start-1 z-[99] rotate-[-10deg] hover:text-[#69686A] transition-colors duration-500">Almeria</p>
                <div class="m-auto row-start-1 col-start-1"><Spain/></div>
            </div>
            <div @click="changeCountry('uk')" class="cursor-pointer 2xl:pt-[50px] row-start-1 2xl:justify-self-center col-start-4 xl:col-start-3 col-span-3 row-span-2 md:w-[270px] justify-self-end lg:self-center rotate-[-5deg] grid grid-col-1 grid-row-1">
                <p :class="country === 'uk' ? 'text-[#69686A]' : 'text-white'" id="uk" class="location-text justify-self-center xl:justify-self-end 2xl:justify-self-end mb-5 self-end ml-2 row-start-1 col-start-1 2xl:text-[34px] z-[99] rotate-[5deg] hover:text-[#69686A] transition-colors duration-500">London</p>
                <div class="m-auto row-start-1 col-start-1"><Uk/></div>
            </div>
            <div @click="changeCountry('us')" class="cursor-pointer row-start-2 col-start-1 2xl:justify-self-end col-span-2 row-span-3 md:w-[300px] lg:w-[450px] md:self-center rotate-[-10deg] grid grid-col-1 2xl:relative 2xl:left-12 grid-row-1">
                <p :class="country === 'us' ? 'text-[#69686A]' : 'text-white'" id="us" class="location-text m-auto row-start-1 col-start-1 z-[99] rotate-[10deg] 2xl:text-[34px]  2xl:pl-[150px] hover:text-[#69686A] transition-colors duration-500">Kansas City</p>
                <div class="m-auto row-start-1 col-start-1 lg:min-w-[400px]"><Us/></div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
swiper-slide {
    background-image: url('/bg.png');
    background-size: cover;
}
.maps {
    background-image: url('/bg.png');
    background-size: cover;
}

</style>