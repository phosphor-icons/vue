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
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        opacity="0.2"
      />
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M235.7041,136.86719l-42.667,64h0a15.96753,15.96753,0,0,1-13.3125,7.124H24.00586a7.99977,7.99977,0,0,1-6.65625-12.4375L62.39062,128,17.34912,60.42871a8.00013,8.00013,0,0,1,6.65674-12.4375H179.72461a15.96734,15.96734,0,0,1,13.3125,7.125l42.667,64A15.96086,15.96086,0,0,1,235.7041,136.86719Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
  },
});
export default component;
</script>
