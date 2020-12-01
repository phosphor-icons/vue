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
      <line
        x1="151.99414"
        y1="59.99512"
        x2="103.99414"
        y2="195.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="63.99414"
        y1="195.99512"
        x2="143.99414"
        y2="195.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="111.99414"
        y1="59.99512"
        x2="191.99414"
        y2="59.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M199.99414,55.99512a8.00008,8.00008,0,0,1-8,8H157.76l-42.6665,128h28.90063a8,8,0,0,1,0,16H104.02307l-.028.002-.02735-.002H63.99414a8,8,0,0,1,0-16H98.22827l42.66651-128H111.99414a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,199.99414,55.99512Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="151.99414"
        y1="55.99512"
        x2="103.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="63.99414"
        y1="199.99512"
        x2="143.99414"
        y2="199.99512"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="111.99414"
        y1="55.99512"
        x2="191.99414"
        y2="55.99512"
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
