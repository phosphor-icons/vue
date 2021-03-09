/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <g v-if="displayWeight === 'bold'">
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        opacity="0.2"
      />
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M215.01538,86.23437l-29.80762,27.98829,30.19824,83.043a8.00184,8.00184,0,0,1-1.86181,8.39161l-24,24A7.99924,7.99924,0,0,1,177.282,228.5127l-42.58691-62.33692-18.80762,17.33106V204a8.0008,8.0008,0,0,1-2.34326,5.65723l-20,20a7.99986,7.99986,0,0,1-13.23291-3.08789L67.38745,188.457l-38.064-12.87891a8.00081,8.00081,0,0,1-3.09326-13.23535l20-20A8.00235,8.00235,0,0,1,51.88745,140H72.574l18.75635-18.75684L27.45,78.65625a8.00073,8.00073,0,0,1-1.21973-12.31348l24-24a8.003,8.003,0,0,1,8.39111-1.86132l83.0625,30.20507,26.606-28.14062a7.98306,7.98306,0,0,1,.97071-1.17383,32.0006,32.0006,0,0,1,47.01806,43.34375A8.03536,8.03536,0,0,1,215.01538,86.23437Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M209.53911,80.402,175.88745,112l32,88-24,24-47.80786-69.97929L111.88745,176v24l-24,24L73.695,182.14581,31.88745,168l24-24h24l24-24-72-48,24-24,88,32L175.598,46.46089l-.68109.56855A24,24,0,1,1,208.858,80.97056Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhAirplaneTilt",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    },
  },
});
</script>
