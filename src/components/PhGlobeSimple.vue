/* GENERATED FILE */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    :width="displaySize"
    :height="displaySize"
    :fill="displayColor"
    :transform="displayMirrored"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <g v-if="displayWeight === 'bold'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <g>
        <path
          d="M96.37207,135.99963c1.81152,28.7522,13.17871,55.71,31.62793,74.44532,18.44922-18.73535,29.81641-45.69312,31.62793-74.44532Z"
        />
        <path
          d="M159.62793,119.99939C157.81641,91.24744,146.44922,64.28967,128,45.55432c-18.44922,18.73535-29.81641,45.69312-31.62793,74.44507Z"
        />
        <path
          d="M175.60449,119.99939h55.98926a104.0692,104.0692,0,0,0-103.55566-95.9978L133.25,28.54651C158.56738,50.61,173.64062,83.63025,175.60449,119.99939Z"
        />
        <path
          d="M122.75,28.54651l5.21191-4.54492a104.06919,104.06919,0,0,0-103.55566,95.9978H80.39551C82.35937,83.63025,97.43262,50.61,122.75,28.54651Z"
        />
        <path
          d="M80.396,135.99988l-55.98975-.00025a104.06922,104.06922,0,0,0,103.55566,95.99805L122.75,227.45276C97.43262,205.38928,82.35937,172.369,80.396,135.99988Z"
        />
        <path
          d="M133.25,227.45276l-5.21191,4.54492a104.06873,104.06873,0,0,0,103.55517-95.9978l-55.98877-.00025C173.64062,172.369,158.56738,205.38928,133.25,227.45276Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect x="0.00049" width="255.99951" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {
  IconComputed,
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhGlobeSimple",
  props: PropValidator,
  inject: ContextGetter,
  computed: {
    displayWeight() {
      const { weight, contextWeight } = this as IconProps & IconContext;
      return weight ?? contextWeight;
    },
    displaySize() {
      const { size, contextSize } = this as IconProps & IconContext;
      return size ?? contextSize;
    },
    displayColor() {
      const { color, contextColor } = this as IconProps & IconContext;
      return color ?? contextColor;
    },
    displayMirrored() {
      const { mirrored, contextMirrored } = this as IconProps & IconContext;
      return mirrored ?? contextMirrored ? "scale(-1, 1)" : undefined;
    }
  }
});
</script>
