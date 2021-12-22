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
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="34.9"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M121.7,60H176a8,8,0,0,1,8,8V188a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V68a8,8,0,0,1,8-8H67.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <rect x="16" y="60" width="168" height="136" rx="8" opacity="0.2" />
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="34.9"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.9,60H176a8,8,0,0,1,8,8v76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V68a8,8,0,0,1,8-8H67.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M229.9,226.6a7.9,7.9,0,0,1-.5,11.3A8.2,8.2,0,0,1,224,240a8,8,0,0,1-5.9-2.6l-42.4-46.6A15.9,15.9,0,0,1,160,204H24A16,16,0,0,1,8,188V68A16,16,0,0,1,24,52H49.6L29,29.4a8,8,0,0,1,.5-11.3,7.9,7.9,0,0,1,11.3.5ZM245.5,74.2a7.9,7.9,0,0,0-9.5-1.1L196,95.9a8,8,0,0,0-4,7v50.2a8,8,0,0,0,4,7l40,22.8a8.3,8.3,0,0,0,4,1.1,7.9,7.9,0,0,0,5.8-2.5,8,8,0,0,0,2.2-5.7V80.2A8,8,0,0,0,245.5,74.2Zm-83.4,54a8,8,0,0,0,9.8,1.6,8.2,8.2,0,0,0,4.1-7.3V68a16,16,0,0,0-16-16H111.1a8.5,8.5,0,0,0-6.6,3.1,8,8,0,0,0,.5,10.3Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="34.9"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M110.9,60H176a8,8,0,0,1,8,8v76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V68a8,8,0,0,1,8-8H67.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="34.9"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M110.9,60H176a8,8,0,0,1,8,8v76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V68a8,8,0,0,1,8-8H67.6"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <polygon
        points="240 176 184 144 184 112 240 80 240 176"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="34.9"
        y1="24"
        x2="224"
        y2="232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.9,60H176a8,8,0,0,1,8,8v76"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M184,188a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V68a8,8,0,0,1,8-8H67.6"
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
