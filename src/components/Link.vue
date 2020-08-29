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
    <g v-if="displayWeight === 'bold'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'light'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  <line x1="80" y1="127.99219" x2="176" y2="127.99219" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M103.07692,183.99219h-32c-30.41814,0-55.07692-25.07206-55.07692-56s24.65878-56,55.07692-56h32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M152.92308,183.99219h32c30.41814,0,55.07692-25.07206,55.07692-56s-24.65878-56-55.07692-56h-32" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "Link",
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
