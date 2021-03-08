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
        d="M164.00586,228l-56.0074-40-55.9926,40V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M92.00586,28h104a8,8,0,0,1,8,8V188"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        opacity="0.2"
      />
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M160.00586,56h-96a16.01833,16.01833,0,0,0-16,16V224a8.00026,8.00026,0,0,0,12.65039,6.50977L111.999,193.83105l51.35743,36.67872A7.99952,7.99952,0,0,0,176.00586,224V72A16.01833,16.01833,0,0,0,160.00586,56Z"
        />
        <path
          d="M192.00586,24h-104a8,8,0,0,0,0,16h104V192a8,8,0,0,0,16,0V40A16.01833,16.01833,0,0,0,192.00586,24Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M168.00586,224l-56.0074-40-55.9926,40V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M88.00586,32h104a8,8,0,0,1,8,8V192"
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
