<script setup>
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'
import SolarSystem from '../components/SolarSystem.vue'

gsap.registerPlugin(Draggable)

const names = [
    'motomami',
    'doppelganger',
    'elmalquerer',
    'alien',
    'lagrimasnegras',
    'nietzsche',
    'frida',
    'blackwomen',
    'socks',
    'troy',
    'chapstick',
    'hoodfeminism',
    'morente',
    'phoebe',
    'robot',
    'socialism',
    'whale'
]


onMounted(() => {
    Draggable.create(".sticker", {
        bounds: "#app",
        inertia: true
    });
})

</script>



<template>
    <div class="h-[90vh] w-full md:h-screen grid grid-rows-5 grid-cols-6 p-6 md:p-20">
        <div 
        v-for="(image, index) in names" :key='index' 
        :style="{transform: `rotate(${Math.random() * 30 - 15}deg)`, left: `${Math.random() * 10 - 5}wv`, top: `${Math.random() * 10 - 5}vh`}"
        :class="image === 'troy' ? 'w-[120px] h-[120px] md:w-[250px] md:h-[250px] col-start-1 md:col-start-3 md:row-start-2 z-[89]' : 'w-[70px] h-[70px] md:w-[150px] md:h-[150px]'"
        class="sticker relative">
            <img width="auto" height="100%" :src="'/stickers/'+image+'.png'" alt="">
        </div>
        <div class="col-start-1 relative left-[-10vw] md:left-0 md:top-[-10vh] z-[0] col-span-3 row-start-2 z-[0] md:block md:col-start-4 md:row-start-1 md:col-span-3 md:row-span-2">
            <SolarSystem/>
        </div>
    </div>
</template>


<style scope>
#universe {
  background-image: url('/space2.png');
  background-size: cover;
}
</style>