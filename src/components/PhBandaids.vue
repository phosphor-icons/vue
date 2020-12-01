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
        d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M206.62744,94.62744a32,32,0,0,0-45.25488-45.25488L128,82.74512,173.25488,128Z"
        opacity="0.2"
      />
      <path
        d="M49.37256,161.37256a32,32,0,0,0,45.25488,45.25488L128,173.25488,82.74512,128Z"
        opacity="0.2"
      />
      <path
        d="M94.62744,49.37256A32,32,0,0,0,49.37256,94.62744L82.74512,128,128,82.74512Z"
        opacity="0.2"
      />
      <path
        d="M173.25488,128,128,173.25488l33.37256,33.37256a32,32,0,0,0,45.25488-45.25488Z"
        opacity="0.2"
      />
      <path
        d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <circle cx="128" cy="128" r="12" />
        <path
          d="M184.56836,128l27.71582-27.71558a40,40,0,1,0-56.56836-56.5686L128,71.43164,100.28418,43.71582a39.99987,39.99987,0,1,0-56.56836,56.56836L71.43164,128,43.71582,155.71558a40,40,0,1,0,56.56836,56.5686L128,184.56836l27.71582,27.71582a39.99987,39.99987,0,1,0,56.56836-56.56836ZM128,94.05957,161.94043,128,128,161.94043,94.05957,128ZM167.03027,55.0293a23.99951,23.99951,0,1,1,33.93946,33.9414L173.25439,116.686,139.314,82.74561ZM88.96973,200.9707a23.99951,23.99951,0,1,1-33.93946-33.9414L82.74561,139.314,116.686,173.25439Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="10" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="8" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle
        cx="128"
        cy="128"
        r="4"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        opacity="0.5"
      />
      <circle cx="128" cy="128" r="12" />
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
