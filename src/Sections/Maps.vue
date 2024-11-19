<script setup>
import Spain from '../components/Countries/Spain.vue'
import Uk from '../components/Countries/Uk.vue'
import Us from '../components/Countries/Us.vue'
  // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
</script>



<template>
    <div class="bg-white h-fit min-h-[80vh] border-b-2 border-black md:grid md:grid-rows-1 md:grid-cols-[50%_50%] lg:grid-cols-[40%_60%]">
        <!-- Mobile Cards Carousel -->
        <div class="md:hidden p-2 pt-5 md:p-20 h-fit">
            <!-- Slider main container -->
            <swiper-container class="mySwiper h-fit w-[85%] m-auto" effect="cards" grab-cursor="true">
            <swiper-slide class="flex p-5 items-center backdrop-blur-sm bg-white/50 w-[90%] flex-col h-full rounded-xl border-2 border-black">
                <Spain/>
                <div class="pt-2">
                    <h3 class="font-bold text-xs">Born and raised in the southernmost part of Spain.</h3>
                    <p class="text-xs">
                    Andalucia is the humble crossroads between Africa and Europe. I miss the narrow streets, 
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
        <div class="hidden md:flex justify-center items-center px-20 pl-20">
             <div class="pt-2">
                    <h3 class="font-bold text-xs">Born and raised in the southernmost part of Spain.</h3>
                    <p class="text-xs">Here I learned the Mediterranean values that I hold closest to my heart: 
                    to enjoy the little things in life and take care of those around you, 
                    because these are the only things that truly matter.
                    Almeria is the humble crossroads between Africa and Europe. I miss the narrow streets, 
                    the <span class="italic">jaleo</span> in the bars, the warm evenings…</p>
                </div>
        </div>
        <div class="w-full hidden md:grid md:grid-cols-6 md:grid-rows-6">
            <div id="maps" class="border-l-2 border-black col-start-3 col-span-4 row-start-1 row-span-6"></div>
            <div class="row-start-4 col-start-4 col-span-2 row-span-3 md:w-[230px] md:self-center lg:self-center rotate-12"><Spain/></div>
            <div class="row-start-1 col-start-4 xl:col-start-3 col-span-3 row-span-3 md:w-[270px] justify-self-end lg:self-center rotate-[-5deg]"><Uk/></div>
            <div class="row-start-2 col-start-1 col-span-2 row-span-3 md:w-[300px] lg:w-[450px] md:self-center rotate-[-10deg]"><Us/></div>
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