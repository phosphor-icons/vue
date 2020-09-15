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
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="128" cy="24" r="18" />
      <circle cx="54.46089" cy="54.46089" r="18" />
      <circle cx="24" cy="128" r="18" />
      <circle cx="54.46089" cy="201.53911" r="18" />
      <circle cx="128" cy="232" r="18" />
      <circle cx="201.53911" cy="201.53911" r="18" />
      <circle cx="232" cy="128" r="18" />
      <circle cx="201.53911" cy="54.46089" r="18" />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect width="256" height="256" fill="none" />
      <circle cx="128" cy="128" r="64" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="24" r="12" />
      <circle cx="54.46089" cy="54.46089" r="12" />
      <circle cx="24" cy="128" r="12" />
      <circle cx="54.46089" cy="201.53911" r="12" />
      <circle cx="128" cy="232" r="12" />
      <circle cx="201.53911" cy="201.53911" r="12" />
      <circle cx="232" cy="128" r="12" />
      <circle cx="201.53911" cy="54.46089" r="12" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect width="256" height="256" fill="none" />
      <g>
        <circle cx="128" cy="128" r="72" />
        <circle cx="128" cy="24" r="12" />
        <circle cx="54.46088" cy="54.46094" r="12.00006" />
        <circle cx="24" cy="128" r="12" />
        <circle cx="54.46088" cy="201.53906" r="12.00006" />
        <circle cx="128" cy="232" r="12" />
        <circle cx="201.53912" cy="201.53906" r="12.00006" />
        <circle cx="232" cy="128" r="12" />
        <circle cx="201.53912" cy="54.46094" r="12.00006" />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="128" cy="24" r="9" />
      <circle cx="54.46089" cy="54.46089" r="9" />
      <circle cx="24" cy="128" r="9" />
      <circle cx="54.46089" cy="201.53911" r="9" />
      <circle cx="128" cy="232" r="9" />
      <circle cx="201.53911" cy="201.53911" r="9" />
      <circle cx="232" cy="128" r="9" />
      <circle cx="201.53911" cy="54.46089" r="9" />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="128" cy="24" r="6" />
      <circle cx="54.46089" cy="54.46089" r="6" />
      <circle cx="24" cy="128" r="6" />
      <circle cx="54.46089" cy="201.53911" r="6" />
      <circle cx="128" cy="232" r="6" />
      <circle cx="201.53911" cy="201.53911" r="6" />
      <circle cx="232" cy="128" r="6" />
      <circle cx="201.53911" cy="54.46089" r="6" />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="64"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="128" cy="24" r="12" />
      <circle cx="54.46089" cy="54.46089" r="12" />
      <circle cx="24" cy="128" r="12" />
      <circle cx="54.46089" cy="201.53911" r="12" />
      <circle cx="128" cy="232" r="12" />
      <circle cx="201.53911" cy="201.53911" r="12" />
      <circle cx="232" cy="128" r="12" />
      <circle cx="201.53911" cy="54.46089" r="12" />
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
  name: "PhSunDots",
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
