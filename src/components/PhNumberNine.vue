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
      <path
        d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="176.49427"
        y1="116.00932"
        x2="114.14986"
        y2="224.00003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="176.49427"
        y1="116.00932"
        x2="114.14986"
        y2="224.00003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M189.81543,71.44531a63.97085,63.97085,0,1,0-61.91895,80.59131,64.36221,64.36221,0,0,0,16.667-2.208c1.30151-.34863,2.57934-.74926,3.8457-1.17382L107.2207,220a8.00044,8.00044,0,1,0,13.85742,8l62.34473-107.99072A63.58244,63.58244,0,0,0,189.81543,71.44531Zm-49.39258,62.92823A47.99971,47.99971,0,0,1,115.57715,41.645a48.25383,48.25383,0,0,1,12.501-1.65625,48.01153,48.01153,0,0,1,12.34473,94.38477Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="176.49427"
        y1="116.00932"
        x2="114.14986"
        y2="224.00003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="176.49427"
        y1="116.00932"
        x2="114.14986"
        y2="224.00003"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="176.49427"
        y1="116.00932"
        x2="114.14986"
        y2="224.00003"
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
