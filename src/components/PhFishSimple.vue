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
      <circle cx="156" cy="76" r="16" />
      <path
        d="M16,183.96316C247.8414,234.71183,223.79084,75.46765,217.18687,44.9601a8.01954,8.01954,0,0,0-6.147-6.147C180.5321,32.20917,21.28468,8.15854,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M201.34694,151.99061A96.0002,96.0002,0,0,1,104.00959,54.639"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M104.00858,54.63764C75.88186,75.1517,55.69935,115.413,63.9833,191.98326h0c76.58162,8.3037,116.85108-11.867,137.3707-39.98746l-.00709-.00518A96.0002,96.0002,0,0,1,104.00959,54.639Z"
        opacity="0.2"
      />
      <circle cx="156" cy="76" r="12" />
      <path
        d="M16,183.96316C247.8414,234.71183,223.79084,75.46765,217.18687,44.9601a8.01954,8.01954,0,0,0-6.147-6.147C180.5321,32.20917,21.28468,8.15854,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M201.34694,151.99061A96.0002,96.0002,0,0,1,104.00959,54.639"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm30.166,91.978c-26.47168,26.41015-68.41309,37.40625-125.05957,32.89013q2.40673,17.75244,6.709,37.42237a8.0002,8.0002,0,1,1-15.63086,3.41894q-4.894-22.377-7.40723-42.52148-20.12549-2.51661-42.48828-7.40967a8,8,0,1,1,3.42188-15.62988q19.64795,4.30077,37.38965,6.70947c-4.501-56.63525,6.502-98.55469,32.91113-125.02148C129.00684,16.752,193.83984,26.90332,212.73242,30.99414a16.05936,16.05936,0,0,1,12.27246,12.273C229.0957,62.16064,239.24805,126.99023,198.166,167.978Zm11.20117-121.3252c-15.00171-3.26269-62.22412-10.852-97.31543,12.15283a87.969,87.969,0,0,0,85.14136,85.13916C220.20068,108.85791,212.61182,61.63721,209.36719,46.65283Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle cx="156" cy="76" r="10" />
      <path
        d="M16,183.96316C247.8414,234.71183,223.79084,75.46765,217.18687,44.9601a8.01954,8.01954,0,0,0-6.147-6.147C180.5321,32.20917,21.28468,8.15854,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M201.34694,151.99061A96.0002,96.0002,0,0,1,104.00959,54.639"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle cx="156" cy="76" r="8" />
      <path
        d="M16,183.96316C247.8414,234.71183,223.79084,75.46765,217.18687,44.9601a8.01954,8.01954,0,0,0-6.147-6.147C180.5321,32.20917,21.28468,8.15854,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M201.34694,151.99061A96.0002,96.0002,0,0,1,104.00959,54.639"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle cx="156" cy="76" r="12" />
      <path
        d="M16,183.96316C247.8414,234.71183,223.79084,75.46765,217.18687,44.9601a8.01954,8.01954,0,0,0-6.147-6.147C180.5321,32.20917,21.28468,8.15854,72,240"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M201.34694,151.99061A96.0002,96.0002,0,0,1,104.00959,54.639"
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
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhFishSimple",
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
    }
  }
});
</script>
