<template>
  <div
    class="
      max-w-screen-lg
      w-full
      mx-auto
      grid grid-cols-4
      sm:grid-cols-6
      md:grid-cols-8
      lg:grid-cols-10
      gap-8
      p-8
    "
  >
    <h1
      class="
        col-span-full
        text-4xl
        flex
        items-center
        text-center
        sm:text-left
        flex-col
        sm:flex-row
        gap-6
      "
    >
      <PhPhosphorLogo class="flex-shrink-0" /> Phosphor Icons Vue 3
    </h1>
    <div class="col-span-full text-2xl text-gray-400">
      Total icon count: {{ total }}
    </div>
    <div
      v-for="icon in icons"
      class="
        aspect-square
        flex
        items-center
        justify-center
        rounded-3xl
        bg-gray-50
        text-gray-600
      "
    >
      <component :is="icon" size="32" />
    </div>
  </div>
</template>

<script setup>
import { PhPhosphorLogo } from '@phosphor-icons/vue';
import * as icons from '@phosphor-icons/vue';

let total = Object.keys(icons).length;
</script>
