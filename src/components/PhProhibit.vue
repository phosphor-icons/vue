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
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="60.11824"
        y1="60.11775"
        x2="195.88274"
        y2="195.88225"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <circle cx="128.00049" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="60.11824"
        y1="60.11775"
        x2="195.88274"
        y2="195.88225"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <g>
        <path
          d="M56.001,128.00012a71.94351,71.94351,0,0,0,116.90527,56.21973L71.78076,83.09485A71.63816,71.63816,0,0,0,56.001,128.00012Z"
        />
        <path
          d="M128.001,56.00012A71.6326,71.6326,0,0,0,83.09521,71.78088l101.12549,101.125A71.94387,71.94387,0,0,0,128.001,56.00012Z"
        />
        <path
          d="M128.001,24.00012a104,104,0,1,0,104,104A104.1179,104.1179,0,0,0,128.001,24.00012Zm62.81543,165.5625a8.06328,8.06328,0,0,1-.58985.6626,8.153,8.153,0,0,1-.6626.58984A87.95214,87.95214,0,0,1,65.18115,66.4425a8.08079,8.08079,0,0,1,.59326-.66748,8.17637,8.17637,0,0,1,.66748-.59375A87.95231,87.95231,0,0,1,190.81641,189.56262Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="60.11824"
        y1="60.11775"
        x2="195.88274"
        y2="195.88225"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="60.11824"
        y1="60.11775"
        x2="195.88274"
        y2="195.88225"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <circle
        cx="128.00049"
        cy="128"
        r="96"
        fill="none"
        :stroke="displayColor"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <line
        x1="60.11824"
        y1="60.11775"
        x2="195.88274"
        y2="195.88225"
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
  name: "PhProhibit",
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
