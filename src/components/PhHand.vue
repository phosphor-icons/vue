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
        d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M168,68V36a20,20,0,0,0-40,0V52"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M128,52V36a20,20,0,0,1,40,0V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0Z"
        opacity="0.2"
      />
      <path
        d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,68V36a20,20,0,0,0-40,0V52"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M188,40a28.2,28.2,0,0,0-12,2.7V36a28,28,0,0,0-54.6-8.6A27.8,27.8,0,0,0,108,24,28.1,28.1,0,0,0,80,52v75.4l-7-12.1A28,28,0,0,0,24.3,143c32.5,68.4,54.1,97,103.7,97a88.1,88.1,0,0,0,88-88V68A28.1,28.1,0,0,0,188,40Zm12,112a72.1,72.1,0,0,1-72,72c-20.2,0-34.2-5.5-47-18.2S56.3,173,38.7,135.9l-.3-.6a11.6,11.6,0,0,1-1.2-9.1,11.8,11.8,0,0,1,5.6-7.3,12,12,0,0,1,9.1-1.2,11.6,11.6,0,0,1,7.2,5.6l22,38a8.1,8.1,0,0,0,9,3.7,7.9,7.9,0,0,0,5.9-7.7V52a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v84a8,8,0,0,0,16,0V68a12,12,0,0,1,24,0Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M168,68V36a20,20,0,0,0-40,0V52"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M168,68V36a20,20,0,0,0-40,0V52"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.2,0-64-24-96.6-92.7a20,20,0,0,1,34.7-20l21.9,38V52a20,20,0,0,1,40,0v68"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,68V36a20,20,0,0,0-40,0V52"
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
