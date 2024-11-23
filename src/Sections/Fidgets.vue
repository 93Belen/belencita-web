<script setup>
import BallChain from '../components/Fidgets/BallChain.vue'
import { onMounted, ref } from 'vue'
let mobile = ref(true)
onMounted(() => {
    if(window.innerWidth > 769){
        mobile.value = false
    }
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
    <div class="h-[70vh] overflow-hidden md:h-screen w-screen bg-white pt-10">
       <div :role="mobile? 'tablist' : ''" :class="mobile ? 'tabs tabs-lifted grid-cols-5' : 'h-full md:grid grid-cols-3 grid-rows-4'">
           <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-purple tab-active [--tab-bg:#CEBAF0] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-purple p-6 h-[70vh]':'mockup-window bg-purple border'">
                <div class="bg-[#FFFFF7] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-yellow [--tab-bg:#FAF8CB] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-yellow md:p-6 h-[70vh] w-full h-full':'mockup-window bg-yellow border row-span-2 w-full h-full'">
                <div class="md:bg-[#FFFAF6] bg-[#FAF8CB] rounded-lg flex justify-center w-full h-full">
                    <BallChain/>
                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-orange [--tab-bg:#FDE3CE] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-orange p-6 h-[70vh]':'mockup-window bg-orange border row-span-4'">
                <div class="bg-[#F4E5F1] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-pink [--tab-bg:#F1C0E8] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-pink p-6 h-[70vh]':'mockup-window bg-pink border row-span-3'">
                <div class="bg-[#ECE6F6] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <input v-if="mobile" type="radio" name="my_tabs_2" role="tab" class="tab bg-blue [--tab-bg:#A4C4F3] [--tab-border-color:transparent]" aria-label="" />
            <div :role="mobile? 'tabpanel' : ''" :class="mobile? 'tab-content bg-blue p-6 h-[70vh]':'mockup-window bg-blue border row-span-2'">
                <div class="bg-[#EAF0F9] flex justify-center h-full px-4 py-16"></div>
            </div>
       </div>
    </div>
</template>

<style scoped>
.mockup-window:before {
color: #D0F4DD;
opacity: 1;
}
</style>