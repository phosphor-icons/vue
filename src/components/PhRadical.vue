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
      <polyline
        points="232 96 232 72 120 72 72 200 24 72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polyline
        points="232 96 232 72 120 72 72 200 24 72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M72,208a7.99963,7.99963,0,0,1-7.49072-5.19092l-48-128a8.00011,8.00011,0,0,1,14.98144-5.61816L72,177.21582l40.50928-108.0249A7.99963,7.99963,0,0,1,120,64H232a7.99977,7.99977,0,0,1,8,8V96a8,8,0,0,1-16,0V80H125.544L79.49072,202.80908A7.99963,7.99963,0,0,1,72,208Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polyline
        points="232 96 232 72 120 72 72 200 24 72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polyline
        points="232 96 232 72 120 72 72 200 24 72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polyline
        points="232 96 232 72 120 72 72 200 24 72"
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
import { IconProps, PropValidator } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

export default defineComponent({
  props: PropValidator,
  setup(props: Readonly<Partial<IconProps>>) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
</script>
