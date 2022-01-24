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
      <polyline
        points="148 36 148 100 212 100"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M44,124V44a8,8,0,0,1,8-8H156l56,56v32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M180,214.4a23.7,23.7,0,0,0,15,5.6c9,0,17-3.4,17-14.6,0-17.9-32-10-32-26.8,0-9,6-14.6,15-14.6a23.7,23.7,0,0,1,15,5.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M116,214.4a23.7,23.7,0,0,0,15,5.6c9,0,17-3.4,17-14.6,0-17.9-32-10-32-26.8,0-9,6-14.6,15-14.6a23.7,23.7,0,0,1,15,5.6"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M84,215.6A24.2,24.2,0,0,1,70,220c-14.4,0-26-12.5-26-28s11.6-28,26-28a24.2,24.2,0,0,1,14,4.4"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
      <path
        d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,210.5A21,21,0,0,1,66,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M129.7,183.8c-3.1-.8-8.6-2.3-9.7-3.6V180c0-3.3,2.4-5,7-5a18.4,18.4,0,0,1,10,3.2h-.1A8.3,8.3,0,0,0,142,180a8,8,0,0,0,8-8,7.6,7.6,0,0,0-2.9-6.1h0A33.4,33.4,0,0,0,127,159c-13.5,0-23,8.6-23,21s13,17,21.6,19.3c3.4.9,7,1.8,9.2,3.1s1.2,1,1.2,1.6,0,5-9,5a18.4,18.4,0,0,1-10-3.2h.1A8.3,8.3,0,0,0,112,204a8,8,0,0,0-8,8,7.6,7.6,0,0,0,2.9,6.1h0A33.4,33.4,0,0,0,127,225c15.7,0,25-7.9,25-21S138,186,129.7,183.8Zm7.2-5.7h0Zm-19.8,27.8h0ZM52,192c0,8.8,6.3,16,14,16a12.9,12.9,0,0,0,8.6-3.4,7.9,7.9,0,0,1,11.3.6,8,8,0,0,1-.5,11.3A29.3,29.3,0,0,1,66,224c-16.5,0-30-14.4-30-32s13.5-32,30-32a29.3,29.3,0,0,1,19.4,7.5,8,8,0,0,1,.5,11.3,7.9,7.9,0,0,1-11.3.6A12.9,12.9,0,0,0,66,176C58.3,176,52,183.2,52,192Zm141.7-8.2c-3.1-.8-8.6-2.3-9.7-3.6V180c0-3.3,2.4-5,7-5a18.4,18.4,0,0,1,10,3.2h-.1A8.3,8.3,0,0,0,206,180a8,8,0,0,0,8-8,7.6,7.6,0,0,0-2.9-6.1h0A33.4,33.4,0,0,0,191,159c-13.5,0-23,8.6-23,21s13,17,21.6,19.3c3.4.9,7,1.8,9.2,3.1s1.2,1,1.2,1.6,0,5-9,5a18.4,18.4,0,0,1-10-3.2h.1A8.3,8.3,0,0,0,176,204a8,8,0,0,0-8,8,7.6,7.6,0,0,0,2.9,6.1h0A33.4,33.4,0,0,0,191,225c15.7,0,25-7.9,25-21S202,186,193.7,183.8Zm7.2-5.7h0Zm-19.8,27.8h0Zm20.5-27.2Zm-64,0Zm76.1-96.4-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,210.5A21,21,0,0,1,66,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M176,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M80,210.5A21,21,0,0,1,66,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M176,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="152 32 152 88 208 88"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M80,210.5A21,21,0,0,1,66,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M112,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M176,212a25.2,25.2,0,0,0,15,5c9,0,17-3,17-13,0-16-32-9-32-24,0-8,6-13,15-13a25.2,25.2,0,0,1,15,5"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="152 32 152 88 208 88"
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
} from "../types";
export default /*#__PURE__*/ Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhFileCss",
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
