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
      <polygon
        points="16 100 128 164 240 100 128 36 16 100"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="16 148 128 212 240 148"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <polygon points="16 104 128 168 240 104 128 40 16 104" opacity="0.2" />
      <polygon
        points="16 104 128 168 240 104 128 40 16 104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="16 144 128 208 240 144"
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
          d="M12.03125,110.94629l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00024,8.00024,0,0,0,0-13.89258l-112-64a8.00411,8.00411,0,0,0-7.9375,0l-112,64a8.00024,8.00024,0,0,0,0,13.89258Z"
        />
        <path
          d="M236.03125,137.05371,128,198.78613,19.96875,137.05371a8.00012,8.00012,0,0,0-7.9375,13.89258l112,64a8.00091,8.00091,0,0,0,7.9375,0l112-64a8.00012,8.00012,0,0,0-7.9375-13.89258Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="16 104 128 168 240 104 128 40 16 104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="16 144 128 208 240 144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="16 104 128 168 240 104 128 40 16 104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="16 144 128 208 240 144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="16 104 128 168 240 104 128 40 16 104"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="16 144 128 208 240 144"
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
