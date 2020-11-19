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
      <circle cx="155.99951" cy="100" r="16" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        stroke-width="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <polyline
        points="32 168 88 112 144 168 176 136 224 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M32,167.99982,87.99981,112l56,56,32-32,48,48L224,56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z"
        opacity="0.2"
      />
      <circle cx="155.99951" cy="100" r="12" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <polyline
        points="32 168 88 112 144 168 176 136 224 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="155.99951" cy="100" r="12" />
        <path
          d="M216.00049,40.00012h-176a16.01833,16.01833,0,0,0-16,16V199.99963a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56.00012A16.01834,16.01834,0,0,0,216.00049,40.00012Zm-34.34375,90.34326a8.00121,8.00121,0,0,0-11.31445,0l-26.34278,26.34278L93.65674,106.34338a8.00121,8.00121,0,0,0-11.31445,0l-42.3418,42.34107V56.00012h176l.00732,108.69367Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="155.99951" cy="100" r="9" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        stroke-width="12"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <polyline
        points="32 168 88 112 144 168 176 136 224 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="155.99951" cy="100" r="6" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        stroke-width="8"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <polyline
        points="32 168 88 112 144 168 176 136 224 184"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle cx="155.99951" cy="100" r="12" />
      <rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        stroke-width="16"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <polyline
        points="32 168 88 112 144 168 176 136 224 184"
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
