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
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        opacity="0.2"
      />
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M235.7041,136.86719l-42.667,64h0a15.96753,15.96753,0,0,1-13.3125,7.124H24.00586a7.99977,7.99977,0,0,1-6.65625-12.4375L62.39062,128,17.34912,60.42871a8.00013,8.00013,0,0,1,6.65674-12.4375H179.72461a15.96734,15.96734,0,0,1,13.3125,7.125l42.667,64A15.96086,15.96086,0,0,1,235.7041,136.86719Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
  name: "PhTagChevron",
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
