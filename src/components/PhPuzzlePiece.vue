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
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
        opacity="0.2"
      />
      <path
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M165.78027,224.001,207.99951,224a16.018,16.018,0,0,0,16-16L224,170.34863a7.99966,7.99966,0,0,0-11.05957-7.3916A23.25464,23.25464,0,0,1,204,164.72754c-13.2334,0-24-11.09277-24-24.72754s10.7666-24.72754,24-24.72754a23.25464,23.25464,0,0,1,8.94043,1.77051A7.99966,7.99966,0,0,0,224,109.65137L223.99951,72A16.01812,16.01812,0,0,0,207.999,56l-36.21728.001A36.60975,36.60975,0,0,0,171.99951,52a36,36,0,0,0-72,0,36.60975,36.60975,0,0,0,.21778,4.001L63.99951,56a16.018,16.018,0,0,0-16,16L48,104.21777A36.47481,36.47481,0,0,0,43.99951,104a36,36,0,0,0,0,72A36.47481,36.47481,0,0,0,48,175.78223L47.99951,208A16.01791,16.01791,0,0,0,63.999,224l42.22071.001h0"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
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
  name: "PhPuzzlePiece",
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
