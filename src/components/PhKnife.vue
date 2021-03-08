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
        d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <g opacity="0.2">
        <path
          d="M146.49075,90.49075l51.36711-52.63289a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542Z"
        />
      </g>
      <path
        d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M231.79883,32.2002a28.05536,28.05536,0,0,0-39.667.06933L18.27441,210.41211a8,8,0,0,0,3.92676,13.38281,155.06019,155.06019,0,0,0,34.957,4.00293c33.4209-.001,66.877-10.86914,98.32813-32.1748,31.74512-21.50391,50.14551-45.79981,50.91406-46.82325a8.00114,8.00114,0,0,0-.74316-10.457L186.919,119.60547l44.97753-47.90332A28.03445,28.03445,0,0,0,231.79883,32.2002ZM189.207,144.52148a225.51045,225.51045,0,0,1-43.10351,38.13184c-34.46973,23.23145-69.999,32.665-105.83887,28.13477l106.29492-108.915,23.30176,23.30175q.208.22852.43847.44434l.082.07617Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
