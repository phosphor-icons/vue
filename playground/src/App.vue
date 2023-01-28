
<template>

    <div class="max-w-screen-lg w-full mx-auto grid grid-cols-10 gap-8 py-8">
        <h1 class="col-span-full text-4xl ">
            Phosphor Icons Vue 3
        </h1>
        <div  v-for="icon in icons" class="aspect-square flex items-center justify-center rounded-3xl bg-gray-50 text-gray-600">
            <component :is="icon" size="32"/>
        </div>
    </div>
</template>

<script setup>
import * as icons from "@phosphor-icons/vue"

</script>

<style lang="scss" scoped>

</style>