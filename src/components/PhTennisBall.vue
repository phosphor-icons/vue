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
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M32,128a96,96,0,0,1,95.83333-95.99986v0a96,96,0,0,1-95.83212,95.83315Z"
        opacity="0.2"
      />
      <path
        d="M128.16648,224.16649a96,96,0,0,1,95.83334-95.99986v0a96,96,0,0,1-95.83213,95.83315Z"
        opacity="0.2"
      />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M224,136.041c2.53906,0,5.07721.125,7.6087.34277a103.89367,103.89367,0,0,1-95.22107,95.2793A87.855,87.855,0,0,1,224,136.041Zm-73.53906,14.41992A103.31914,103.31914,0,0,1,224,120q3.85537,0,7.66394.27734a103.91077,103.91077,0,0,0-96-96,103.79931,103.79931,0,0,1-30.12488,81.26172A103.31914,103.31914,0,0,1,32,136q-3.85546,0-7.66394-.27734a103.91077,103.91077,0,0,0,96,96A103.79931,103.79931,0,0,1,150.46094,150.46094ZM94.22559,94.22559a87.83528,87.83528,0,0,0,25.38678-69.88868,103.89355,103.89355,0,0,0-95.221,95.2793A87.83194,87.83194,0,0,0,94.22559,94.22559Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212"
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
