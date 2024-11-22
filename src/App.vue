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
import { ref } from 'vue'
let open = ref(false)

const onClick = () => {
  if(window.innerWidth < 767){
    open.value = !open.value
  }
}
window.addEventListener('scroll', () => {
history.pushState(null, null, ' ');
})

</script>




<template>
<div id="container" class="m-0 p-0 bg-darkpink overflow-x-hidden snap-start w-screen scroll-smooth">
  <header @click="onClick" :class="open ? 'translate-x-[10px]' : 'translate-x-[193px] md:translate-x-0'" class="fixed md:static pt-6 md:pt-0 z-[999] md:backdrop-blur-sm bg-gradient-to-b from-darkpink via-transparent via-60% md:flex w-full justify-end h-[50px] md:h-[10vh] font-body font-black text-md transition-all duration-[1s] ease-out">
  <nav class="my-auto flex justify-end w-full">
    <ul class="flex justify-self-end flex-col md:flex-row gap-5 p-3 md:p-0 border-2 max-w-screen md:border-0 border-black rounded-lg md:gap-0 w-fit bg-purple pr-6 md:pr-0 relative md:flex md:bg-transparent md:w-[80vw] xl:w-[50vw] justify-around">
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><p class="flex items-center gap-2"><Star/><a href="#mememe" class="">me me me</a></p></li>
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><p class="flex items-center gap-2"><Heart/><a href="#fidgets" class="">fidgets</a></p></li>
      <li class="cursor-pointer bg-rainbow text-transparent bg-clip-text w-fit hover:animate-backgroundmove transition-all duration-1000 ease-in-out"><p class="flex items-center gap-2"><Flower/><a href="#universe" class="">the universe</a></p></li>
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
   -webkit-text-stroke: 1.45px black;
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
