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
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="120" r="16" />
      <circle cx="176" cy="120" r="16" />
      <circle cx="80" cy="120" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        opacity="0.2"
      />
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="120" r="12" />
      <circle cx="80" cy="120" r="12" />
      <circle cx="176" cy="120" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M216.001,40h-176a16.01833,16.01833,0,0,0-16,16V183.999a16.01833,16.01833,0,0,0,16,16L99.4707,200l14.81055,24.68262a16.00023,16.00023,0,0,0,27.43945,0L156.53027,200H216a16.01854,16.01854,0,0,0,16.001-16V56A16.01833,16.01833,0,0,0,216.001,40ZM80.00049,132.00049a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,132.00049Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,132.00049Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="120" r="10" />
      <circle cx="176" cy="120" r="10" />
      <circle cx="80" cy="120" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="120" r="8" />
      <circle cx="80" cy="120" r="8" />
      <circle cx="176" cy="120" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M149.67005,195.88358l-14.80962,24.68269a8,8,0,0,1-13.71989,0l-14.80963-24.68272a8,8,0,0,0-6.85994-3.884H40.00049a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8.00006,8l-59.47038-.00041A8,8,0,0,0,149.67005,195.88358Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="120" r="12" />
      <circle cx="80" cy="120" r="12" />
      <circle cx="176" cy="120" r="12" />
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
  },
});
export default component;
</script>
