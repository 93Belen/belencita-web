<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import Knob from '../Knob.vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)



onMounted(() => {
    Draggable.create("#knob", {
    type: "rotation",
    inertia: true,
    });
    
    Draggable.create("#slider", {
    type: "x",
    inertia: true,
    bounds: '#slider-bar',
    });
    Draggable.create(".slider-y", {
    type: "y",
    inertia: true,
    bounds: '.slider-y-bar',
    });
})



</script>



<template>
    <div class="w-full h-[250px] md:h-full md:grid md:p-6 grid-cols-3 grid-rows-3 justify-center items-center">
        <!-- slide -->
        <div class="col-span-3 col-start-1 row-start-1 w-[80%] m-auto md:block hidden">
            <div id="slider-bar" class="w-full bg-darkpink rounded-full h-[10px]">
                <div id="slider" class="w-[50px] h-[50px] border-black rounded-full bg-purple flex justify-center items-center relative top-[-21px]">
                    <div class="w-[20px] h-[20px] rounded-full bg-green"></div>
                </div>
            </div>
        </div>
        <!-- turn -->
        <div class="md:h-[70px] w-screen md:w-auto p-0 flex justify-center items-center">
             <Knob id="knob" />
        </div>
        <!-- press -->
        <button class="w-[70px] h-[70px] md:block hidden border-4 rounded-full col-start-3 bg-white border-blue shadow-lg relative active:top-[4px] actie:shadow-none active:left-[2px]">TOUCH</button>
        <!-- more slide -->
         <div class="col-start-1 row-start-3 hidden md:flex col-span-3 items-end pt-6 md:pt-0 justify-around">
            <div class="slider-y-bar bg-[#D66BA0] rounded-full h-[80px] md:h-[110px] w-[5px]">
                <div class="slider-y w-[35px] h-[10px] border-black bg-yellow flex justify-center items-center relative left-[-15px] border-[1px]">
                </div>
            </div>
            <div class="slider-y-bar bg-[#D66BA0] rounded-full h-[80px] md:h-[110px] w-[5px]">
                <div class="slider-y w-[35px] h-[10px] border-black bg-lightblue flex justify-center items-center relative left-[-15px] border-[1px]">
                </div>
            </div>
            <div class="slider-y-bar bg-[#D66BA0] rounded-full h-[80px] md:h-[110px] w-[5px]">
                <div class="slider-y w-[35px] h-[10px] border-black bg-green flex justify-center items-center relative left-[-15px] border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template>