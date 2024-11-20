<script setup>

</script>

<template>
    <div class="h-[70vh] md:h-screen w-screen bg-white pt-10">
        <!-- Mobile -->
        <div role="tablist" class="tabs h-full tabs-lifted md:hidden grid-cols-5">
            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-purple tab-active [--tab-bg:#CEBAF0] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-purple p-6 h-[70vh]">
                Tab content 1
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-yellow [--tab-bg:#FCF6BD] [--tab-border-color:transparent]"  aria-label="" />
            <div role="tabpanel" class="tab-content bg-yellow p-6 h-[70vh]">
                Tab content 2
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-orange [--tab-bg:#FDE3CE] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-orange p-6 h-[70vh]">
                Tab content 3
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-pink [--tab-bg:#F1C0E8] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-pink p-6 h-[70vh]">
                Tab content 4
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-blue [--tab-bg:#A4C4F3] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-blue p-6 h-[70vh]">
                Tab content 5
            </div>
        </div>
        <!-- Desktop -->
       <div class="hidden h-full md:grid grid-cols-3 grid-rows-4">
            <div class="mockup-window bg-yellow border">
                <div class="bg-[#FFFFF7] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <div class="mockup-window bg-orange row-span-2 border">
                <div class="bg-[#FFFAF6] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <div class="mockup-window bg-pink row-span-4 border">
                <div class="bg-[#F4E5F1] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <div class="mockup-window bg-purple col-start-1 row-span-3 border">
                <div class="bg-[#ECE6F6] flex justify-center h-full px-4 py-16">

                </div>
            </div>
            <div class="mockup-window bg-blue row-span-2 border">
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