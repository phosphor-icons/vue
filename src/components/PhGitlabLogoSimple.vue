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
    <slot />
    <g v-if="displayWeight === 'bold'">
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        opacity="0.2"
      />
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M231.92773,169.78029l-94.82031,65.64454a16.07612,16.07612,0,0,1-18.21484,0L24.07227,169.78029a16.03981,16.03981,0,0,1-6.35254-17.27783L45.04883,50.0176a12.00012,12.00012,0,0,1,22.831-1.12109L88.544,104h78.9121l20.66407-55.10449a12.00021,12.00021,0,0,1,22.83056,1.12109l27.32959,102.48584A16.03981,16.03981,0,0,1,231.92773,169.78029Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <path
        d="M83,112h90l22.61071-60.29524a4,4,0,0,1,7.61026.37384l27.32935,102.4851a8,8,0,0,1-3.1762,8.63883l-94.82044,65.64492a8,8,0,0,1-9.10736,0L28.62588,163.20255a8,8,0,0,1-3.1762-8.63883L52.779,52.07862a4,4,0,0,1,7.61026-.37384Z"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
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
  name: "PhGitlabLogoSimple",
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
