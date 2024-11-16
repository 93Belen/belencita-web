<script setup>
import Hero from './Sections/Hero.vue'
import Sun from './components/Sun.vue'
import Star from './components/Star.vue'
import Heart from './components/Heart.vue'
import Flower from './components/Flower.vue'
import Marquee from './Sections/Marquee.vue'
import Maps from './Sections/Maps.vue'
</script>

<template>
<div class="m-0 p-0 bg-darkpink">
  <header class="bg-darkpink hidden md:flex w-full justify-end h-[10vh] font-body font-black text-md">
  <nav class="my-auto">
    <ul class="flex w-[70vw] max-w-[700px] justify-around">
      <li class="bg-rainbow text-transparent bg-clip-text w-fit flex items-center gap-2"><Star/>me me me</li>
      <li class="bg-rainbow text-transparent bg-clip-text w-fit flex items-center gap-2"><Heart/>fidgets</li>
      <li class="bg-rainbow text-transparent bg-clip-text w-fit flex items-center gap-2"><Flower/>the universe</li>
    </ul>
  </nav>
</header>
<div>
<!-- Hero Section -->
 <Hero/>
<!-- Carousel Section -->
  <Marquee/>
<!-- Maps Section -->
  <Maps/>
</div>
</div>
</template>

<style scoped>
li{
   -webkit-text-stroke: 1.5px black;
}
</style>
