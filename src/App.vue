<script setup>
import Hero from './Sections/Hero.vue'
import Sun from './components/Sun.vue'
import Star from './components/Star.vue'
import Heart from './components/Heart.vue'
import Flower from './components/Flower.vue'
import Marquee from './Sections/Marquee.vue'
import Maps from './Sections/Maps.vue'
import Fidgets from './Sections/Fidgets.vue'
import Universe from './Sections/Universe.vue'
</script>

<template>
<div id="container" class="m-0 p-0 bg-darkpink overflow-x-hidden snap-start scroll-smooth">
  <header class="backdrop-blur-sm bg-gradient-to-b from-darkpink/50 via-transparent via-60% hidden md:flex w-full justify-end h-[10vh] font-body font-black text-md">
  <nav class="my-auto">
    <ul class="flex w-[80vw] xl:w-[50vw] justify-around">
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><a href="#mememe" class="flex items-center gap-2"><Star/>me me me</a></li>
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><a href="#fidgets" class="flex items-center gap-2"><Heart/>fidgets</a></li>
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><a href="#universe" class="flex items-center gap-2"><Flower/>the universe</a></li>
    </ul>
  </nav>
</header>
<div>
<!-- Hero Section -->
 <Hero/>
<!-- Carousel Section -->
  <Marquee id="mememe"/>
<!-- Maps Section -->
  <Maps/>
<!-- Fidgets Section -->
  <Fidgets id="fidgets"/>
<!-- Universe -->
<Universe id="universe"/>
</div>
</div>
</template>

<style scoped>
li{
   -webkit-text-stroke: 1.5px black;
}
#container {
  background-image: url('/sunset2.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
}
@media (max-width: 850px) {
  #container {
    background-size: cover;
    background-position: center; /* Ensure the image stays centered on smaller screens */
  }
}


</style>
