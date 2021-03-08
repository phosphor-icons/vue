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
        d="M215.98242,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="15.98242"
        y1="216"
        x2="239.98242"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M151.97656,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M151.96484,215.99158v-64h-48v64L39.9707,216V115.53855a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509a8,8,0,0,1,2.6185,5.91942V216Z"
        opacity="0.2"
      />
      <path
        d="M215.9707,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.3467,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="15.9707"
        y1="216"
        x2="239.9707"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M151.96484,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M239.9707,208h-16V115.53882A16.03729,16.03729,0,0,0,218.73437,103.7L138.72754,30.96484a15.93607,15.93607,0,0,0-21.52637.001L37.207,103.7a16.034,16.034,0,0,0-5.23633,11.83862V208h-16a8,8,0,1,0,0,16h224a8,8,0,0,0,0-16Zm-88.00586-.0083h-8V208h-32v-.0083h-8v-48a8.00009,8.00009,0,0,1,8-8h32a8.00008,8.00008,0,0,1,8,8Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M215.98828,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="15.98828"
        y1="216"
        x2="239.98828"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M151.98242,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M215.99414,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="15.99414"
        y1="216"
        x2="239.99414"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M151.98828,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M216,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="216"
        x2="240"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M151.99414,215.99158v-56a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v56"
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
