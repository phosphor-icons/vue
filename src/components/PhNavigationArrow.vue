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
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        opacity="0.2"
      />
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M219.4873,88.43359,50.18457,29.82812A15.99955,15.99955,0,0,0,29.83105,50.18164l58.6045,169.30371A15.75666,15.75666,0,0,0,103.53516,230.251c.09863,0,.19922-.001.29785-.00293a15.76424,15.76424,0,0,0,15.01465-11.292l23.55566-76.55468L218.96,118.8457a16.00021,16.00021,0,0,0,.52734-30.41211Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M37.39014,47.56448l58.605,169.30343a8,8,0,0,0,15.20612-.2642l23.5556-76.5557a8,8,0,0,1,5.29355-5.29355l76.5557-23.5556a8,8,0,0,0,.2642-15.20612L47.56692,37.3877A8,8,0,0,0,37.39014,47.56448Z"
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
