/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="size"
    :height="size"
    :fill="color"
    :transform="mirrored ? 'scale(-1, 1)' : undefined"
    v-bind="$attrs"
  >
    <slot />
    <g v-if="weight === 'bold'">
      <path
        d="M196,116v88.88889A7.11111,7.11111,0,0,1,188.88889,212H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H188A8,8,0,0,1,196,116Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M68,84V52a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H228a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,228.88889,172H196"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M224,72H154.6665a7.99938,7.99938,0,0,1-4.7998-1.6L122.1333,49.6a7.99938,7.99938,0,0,0-4.7998-1.6H72a7.99993,7.99993,0,0,0-8,8V80H85.3335a7.99938,7.99938,0,0,1,4.7998,1.6l27.7334,20.8a7.99938,7.99938,0,0,0,4.7998,1.6H192a7.99993,7.99993,0,0,1,8,8v64h24.88867A7.1111,7.1111,0,0,0,232,168.88892V80A7.99993,7.99993,0,0,0,224,72Z"
        opacity="0.2"
      />
      <path
        d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224,64H154.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,117.333,40H72A16.01833,16.01833,0,0,0,56,56V72H40A16.01833,16.01833,0,0,0,24,88V200a16.01833,16.01833,0,0,0,16,16H192.88867A15.12831,15.12831,0,0,0,208,200.88867V184h16.88867A15.12831,15.12831,0,0,0,240,168.88867V80A16.01833,16.01833,0,0,0,224,64Zm0,104H208V112a16.01833,16.01833,0,0,0-16-16H122.667L94.93359,75.2002A16.10323,16.10323,0,0,0,85.333,72H72V56h45.333l27.7334,20.7998A16.10323,16.10323,0,0,0,154.667,80H224Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SetupIconProps, PropValidator, PhosphorIcon } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

const component: PhosphorIcon = defineComponent({
  props: PropValidator,
  setup(props: SetupIconProps) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
export default component;
</script>
