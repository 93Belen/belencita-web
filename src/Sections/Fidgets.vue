<script setup>

</script>

<template>
    <div class="h-screen w-screen bg-white pt-10">
        <div role="tablist" class="tabs tabs-lifted md:hidden grid-cols-5">
            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-purple [--tab-bg:#CEBAF0] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-purple p-6 h-[90vh]">
                Tab content 1
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-yellow tab-active [--tab-bg:#FCF6BD] [--tab-border-color:transparent]"  aria-label="" />
            <div role="tabpanel" class="tab-content bg-yellow p-6 h-[90vh]">
                Tab content 2
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-orange [--tab-bg:#FDE3CE] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-orange p-6 h-[90vh]">
                Tab content 3
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-pink [--tab-bg:#F1C0E8] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-pink p-6 h-[90vh]">
                Tab content 4
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab bg-blue [--tab-bg:#A4C4F3] [--tab-border-color:transparent]" aria-label="" />
            <div role="tabpanel" class="tab-content bg-blue p-6 h-[90vh]">
                Tab content 5
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>