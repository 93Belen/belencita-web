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
    <div class="bg-white h-fit min-h-[80vh] border-b-2 border-black md:grid md:grid-rows-1 md:grid-cols-[60%_40%]">
        <div class="md:hidden p-5 md:p-20 h-fit">
            <!-- Slider main container -->
            <swiper-container class="mySwiper h-fit w-[80%] m-auto" effect="cards" grab-cursor="true">
            <swiper-slide class="flex p-5 justify-center items-center backdrop-blur-sm bg-white/50 w-[90%] min-h-[600px] flex-col h-full rounded-xl border-2 border-black">
                <Spain/>
                <div class="pt-2">
                    <h3 class="font-bold text-sm">Born and raised in the southernmost part of Spain.</h3>
                    <p class="text-sm">Here I learned the Mediterranean values that I hold closest to my heart: 
                    to enjoy the little things in life and take care of those around you, 
                    because these are the only things that truly matter.
                    Almeria is the humble crossroads between Africa and Europe. I miss the narrow streets, 
                    the <span class="italic">jaleo</span> in the bars, the warm evenings…</p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-5 justify-center items-center backdrop-blur-sm bg-white/50 w-[90%] min-h-[600px] flex-col h-full rounded-xl border-2 border-black">
                <Spain/>
                <div class="pt-2">
                    <h3 class="font-bold text-sm">At 18, I moved to Granada to study Philosophy at university.</h3>
                    <p class="text-sm"> This city is the true jewel of Andalucía’s Arab past. 
                    Here I learned about Nietzsche, I made friends, we moved into a cave/house - google it - and I was happy.
                    But here I came to the hard realization that I wouldn’t have a future if I stayed in Spain. 
                    I had no money, neither hope, nor opportunities.</p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-5 justify-center items-center backdrop-blur-sm bg-white/50 w-[90%] min-h-[600px] flex-col h-full rounded-xl border-2 border-black">
                <Uk/>
                <div class="p-2">
                    <h3 class="font-bold text-sm">London changed everithing.</h3>
                    <p class="text-sm">
                    I didn’t speak English when I arrived, but I was in my early twenties and ready for the adventure. 
                    Here I first saw a future for myself; I started cleaning tables at Whole Foods and built a career in retail.
                    I made friends from all over the world, and met my husband. London enriched my world and the possibilities stored for me.
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide class="flex p-5 justify-center items-center backdrop-blur-sm bg-white/50 w-[90%] min-h-[600px] flex-col h-full rounded-xl border-2 border-black">
                <Us/>
                <div class="p-2">
                    <h3 class="font-bold text-sm">Now I live in Kansas City...</h3>
                    <p class="text-sm">
                        And although it took me some time to adjust to the cultural shifts, 
                        I can proudly say that I’ve come to call it home. Here, I’ve truly taken control of my future. 
                        I’ve worked hard to build a career in tech, and I’ve been given opportunities I never could have dreamed of.
                    But most importantly, I adopted my dog, Troy—the true spark of my life and my best friend in the entire universe.
                    </p>
                </div>
            </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style scoped>
swiper-slide {
    background-image: url(./bg.png);
    background-size: cover;
}
</style>