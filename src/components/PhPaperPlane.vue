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
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="127.88159"
        y1="184"
        x2="127.88159"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        opacity="0.2"
      />
      <path
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="127.88159"
        y1="184"
        x2="127.88159"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M236.43432,201.4707l-94.59179-168.915a16.00119,16.00119,0,0,0-27.92188,0L19.32885,201.47021A16.00042,16.00042,0,0,0,38.67065,224.356l81.21094-29.00391V120a8,8,0,1,1,16,0v75.352L217.09253,224.356a16.171,16.171,0,0,0,5.44531.95117,16.02221,16.02221,0,0,0,13.89648-23.83643Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="127.88159"
        y1="184"
        x2="127.88159"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="127.88159"
        y1="184"
        x2="127.88159"
        y2="120"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M120.90154,36.46437,26.30921,205.37925A8,8,0,0,0,35.98,216.822l89.211-31.86106a8,8,0,0,1,5.38138,0l89.211,31.86106a8,8,0,0,0,9.67074-11.44277L134.86164,36.46437A8,8,0,0,0,120.90154,36.46437Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="127.88159"
        y1="184"
        x2="127.88159"
        y2="120"
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
  name: "PhPaperPlane",
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
