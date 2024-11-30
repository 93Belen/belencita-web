<script setup>
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'

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
    <div class="h-[90vh] bg-blue md:h-screen grid grid-rows-5 grid-cols-6 p-6 md:p-20">
        <div 
        v-for="(image, index) in names" :key='index' 
        :style="{transform: `rotate(${Math.random() * 30 - 15}deg)`, left: `${Math.random() * 10 - 5}wv`, top: `${Math.random() * 10 - 5}vh`}"
        class="sticker w-[70px] h-[70px] md:w-[150px] md:h-[150px] relative">
            <img width="auto" height="100%" :src="'/stickers/'+image+'.png'" alt="">
        </div>
        <div class="col-start-3 row-start-1 col-span-4 row-span-1 md:col-start-4 md:row-start-1 md:col-span-3 md:row-span-2 border-2">

        </div>
    </div>
</template>