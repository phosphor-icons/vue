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
      <line
        x1="48"
        y1="40.00391"
        x2="208"
        y2="216.00391"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="163.777 167.359 96 239.977 112 159.977 48 135.976 92.198 88.622"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="119.583 59.281 160 15.977 144 95.976 208 119.977 191.162 138.018"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon
        points="96 239.969 112 159.969 48 135.969 160 15.969 144 95.969 208 119.969 96 239.969"
        opacity="0.2"
      />
      <line
        x1="48"
        y1="39.99609"
        x2="208"
        y2="215.99609"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <path
          d="M53.91943,34.61475A7.99991,7.99991,0,1,0,42.08057,45.37744l39.24072,43.1648-39.16992,41.968a8.00053,8.00053,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02735l61.85083-66.26892,38.38111,42.21911a7.99991,7.99991,0,1,0,11.83886-10.76269Z"
        />
        <path
          d="M179.76562,149.25928a8.00013,8.00013,0,0,0,5.86719,2.61865h.05225a8.00073,8.00073,0,0,0,5.84863-2.5415l22.31494-23.90918a7.99994,7.99994,0,0,0-3.03955-12.94922L153.17871,90.8667l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-45.894,49.17237a8.00006,8.00006,0,0,0-.0708,10.83984Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="48"
        y1="39.99609"
        x2="208"
        y2="215.99609"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="48"
        y1="39.99609"
        x2="208"
        y2="215.99609"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="48"
        y1="39.99609"
        x2="208"
        y2="215.99609"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
  name: "PhLightningSlash",
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
