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
      <circle
        cx="152"
        cy="48"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M44,132s56-56,88-26.449C149.94081,122.11882,164,148,204,148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="152 232 152 176 109.536 145.668"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="128.27612"
        y1="102.56493"
        x2="72"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="152" cy="48" r="24" opacity="0.2" />
      <circle
        cx="152"
        cy="48"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,128s56-56,88-26.449C153.94081,118.11882,168,144,208,144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="130.51056"
        y1="97.4257"
        x2="72"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="152 232 152 176 109.536 145.668"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M120,48a32,32,0,1,1,32,32A32.03667,32.03667,0,0,1,120,48Zm88,88c-28.49561,0-41.65088-14.13086-55.57861-29.09277-3.52686-3.78809-7.17383-7.70606-10.99366-11.2334-37.2207-34.374-96.57617,24.16113-99.085,26.66894a8.00019,8.00019,0,0,0,11.31055,11.31739A165.05558,165.05558,0,0,1,84.21191,110.501c14.32227-8.15454,26.27442-11.08594,35.71534-8.79737l-17.69483,40.698-.02441.05567L64.66309,228.81055a8.00018,8.00018,0,1,0,14.67382,6.3789l33.59327-77.26538L144,180.11719V232a8,8,0,0,0,16,0V176a8.00054,8.00054,0,0,0-3.3501-6.50977L119.45312,142.9209,133.6084,110.364c2.33789,2.33814,4.67285,4.83619,7.10205,7.44556C154.89111,133.042,172.53906,152,208,152a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="152"
        cy="48"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,128s56-56,88-26.449C153.94081,118.11882,168,144,208,144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="130.51056"
        y1="97.4257"
        x2="72"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="152 232 152 176 109.536 145.668"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="152"
        cy="48"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,128s56-56,88-26.449C153.94081,118.11882,168,144,208,144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="130.51056"
        y1="97.4257"
        x2="72"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="152 232 152 176 109.536 145.668"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="152"
        cy="48"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,128s56-56,88-26.449C153.94081,118.11882,168,144,208,144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="130.51056"
        y1="97.4257"
        x2="72"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="152 232 152 176 109.536 145.668"
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
  }
});
export default component;
</script>
