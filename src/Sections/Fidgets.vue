<script setup>
import BallChain from '../components/Fidgets/BallChain.vue'
import MovingLines from '../components/Fidgets/MovingLines.vue'
import Buttons from '../components/Fidgets/Buttons.vue'

import Monster2 from '../components/Monster2.vue'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let mobile = ref(true)
onMounted(() => {
    if(window.innerWidth > 769){
        mobile.value = false
    }

    gsap.to("#monster2", {
        x: "-55vw",
        opacity: 1,  // Move the SVG to the left by 100% of its width (adjust this as needed)
        ease: "power2.out",  // Apply easing, e.g., ease out
        scrollTrigger: {
            trigger: "#desktop-fidget-div",      // The element to trigger the animation
            start: "top center",                   // Animation starts when the top of the trigger reaches the center of the viewport
            end: "bottom center",                  // Animation ends when the bottom of the trigger reaches the top of the viewport         
            scrub: true,                    // Syncs the animation with the scroll position, allows it to reverse                     
        }
    });
})

window.addEventListener('resize', () => {
     if(window.innerWidth > 769){
        mobile.value = false
    }
    else {
        mobile.value = true
    }
})

</script>

<template>
<div class="bg-whitetoblue">
    <div id="desktop-fidget-div" class="h-[450px] bg-transparent m-auto max-h-[70vh] md:max-w-[90vw] m-auto md:min-h-[750px] max-h-[1000px] overflow-hidden md:h-screen pt-10">
       <div :role="mobile? 'tablist' : ''" :class="mobile ? 'tabs tabs-lifted grid-cols-5 h-full' : 'h-full md:grid grid-cols-3 grid-rows-4'">
            <input checked v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-yellow [--tab-bg:#FAF8CB] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-yellow md:p-6 w-full h-full':'mockup-window bg-yellow border row-span-2 w-full h-full'">
                <div class="md:hidden m-auto w-[90%] bg-[#ECECE9] h-[47px] rounded-xl my-4 p-3 text-xs"><p>https://belenmadefidgets.com/play</p></div>
                <div class="md:bg-[#FFFAF6] bg-[#FAF8CB] rounded-lg flex justify-center w-full h-full">
                    <BallChain/>
                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-orange [--tab-bg:#FDE3CE] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-orange h-[70vh]':'h-[550px] mockup-window bg-orange border row-span-3'">
                <div class="md:hidden m-auto w-[90%] bg-[#ECECE9] h-[47px] rounded-xl my-2 p-3 text-xs"><p>https://belenmadefidgets.com/play</p></div>
                <div class="md:bg-[#F4E5F1] flex justify-center h-full pt-6 md:p-4">
                    <Buttons/>
                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-pink [--tab-bg:#F1C0E8] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-pink h-[400px]':'h-[400px] mockup-window bg-pink border row-span-3 col-start-1 row-start-2'">
                <div class="md:hidden m-auto w-[90%] bg-[#ECECE9] h-[47px] rounded-xl my-2 p-3 text-xs"><p>https://belenmadefidgets.com/play</p></div>
                <div class="md:bg-[#ECE6F6] flex justify-center h-full">
                    <MovingLines/>
                </div>
            </div>
            <div class='hidden md:block mockup-window bg-blue border row-span-2'>
                <div class="md:hidden m-auto w-[90%] bg-[#ECECE9] h-[47px] rounded-xl my-2 p-3 text-xs"><p>https://belenmadefidgets.com/play</p></div>
                <div class="md:bg-[#EAF0F9] flex justify-center h-full px-4 py-16"></div>
            </div>
       </div>
    </div>
    <!-- Monster -->
    <div id="monster2" class="relative md:bottom-[220px] z-[99] left-[95vw] w-[50px] h-[50px] mt-[10px] md:w-[200px] md:h-[200px] opacity-0"><Monster2/></div>
</div>

</template>

<style scoped>
.mockup-window:before {
color: #D0F4DD;
opacity: 1;
}
</style>