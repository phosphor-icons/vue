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
        d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M184,223.98828a8.00008,8.00008,0,0,1-8,8H80.43555q-.21827.01245-.43653.01221a8.00346,8.00346,0,0,1-6.26757-12.9751l87.54687-116.82178a40.00778,40.00778,0,1,0-70.1377-37.771A8,8,0,1,1,76.4043,58.2002a56.00758,56.00758,0,1,1,98.02734,53.11523c-.07324.1084-.14844.21484-.22754.31934L96.001,215.98828H176A8.00039,8.00039,0,0,1,184,223.98828Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
