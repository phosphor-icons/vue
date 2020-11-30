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
    <g v-if="weight === 'bold'">
      <circle cx="56" cy="200.00842" r="16" />
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M56,120.00842a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="55.99414" cy="200.00842" r="12" />
      <path
        d="M55.99414,48a152,152,0,0,1,152,152"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M55.99414,120.00842a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="55.99414" cy="200.00842" r="12" />
        <path
          d="M55.99414,39.99963a8,8,0,0,0,0,16c79.40186,0,144,64.59766,144,144a8,8,0,0,0,16,0C215.99414,111.775,144.21826,39.99963,55.99414,39.99963Z"
        />
        <path
          d="M55.99414,112.00842a8,8,0,0,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,55.99414,112.00842Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="56.00586" cy="200" r="9" />
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,120.00842a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="56.00586" cy="200" r="6" />
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,120.00842a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="56" cy="200.00842" r="12" />
      <path
        d="M56,48A152,152,0,0,1,208,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,120.00842a80,80,0,0,1,80,80"
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
