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
      <line
        x1="92"
        y1="136"
        x2="164"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M164,164V128a40,40,0,1,1,44,39.8025V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V167.8025A40.00143,40.00143,0,1,1,92,128v36"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48,88.19819V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V88.19792"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <g opacity="0.2">
        <path
          d="M208,159.98766V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V160a32,32,0,0,1,0-64V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96a32,32,0,0,1,0,64Z"
        />
      </g>
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40"
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
          d="M48,80a48.07871,48.07871,0,0,1,47.3335,40h65.333A47.95539,47.95539,0,0,1,216,80.6792V72a40.04521,40.04521,0,0,0-40-40H80A40.04521,40.04521,0,0,0,40,72v8.6792A48.11745,48.11745,0,0,1,48,80Z"
        />
        <path
          d="M239.93188,126.01025c-.02233-.36181-.04809-.72265-.08251-1.08154-.01563-.165-.03455-.3291-.05274-.49316q-.05933-.53247-.135-1.05957c-.02124-.14551-.04248-.291-.06555-.43555q-.09558-.59985-.21338-1.19141c-.01758-.08886-.03332-.17773-.05164-.26611A32.00094,32.00094,0,0,0,176,128v40a8,8,0,0,1-16,0V136H96v32a8,8,0,0,1-16,0V128a32.00094,32.00094,0,0,0-63.331-6.51709c-.01832.08838-.03406.17725-.05164.26611q-.11773.5918-.21338,1.19141c-.02307.14453-.04443.29-.06555.43555q-.07655.52661-.135,1.05957c-.01819.16406-.03711.32812-.05274.49316-.03442.35889-.06018.71973-.08251,1.08154-.00928.15137-.022.30176-.02906.45362C16.01477,126.97314,16,127.48486,16,128a32.01333,32.01333,0,0,0,24,30.9917V200a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V158.9917A32.01319,32.01319,0,0,0,240,128c0-.51514-.01477-1.02686-.03906-1.53613C239.95386,126.312,239.94116,126.16162,239.93188,126.01025Z"
        />
      </g>
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <line
        x1="80"
        y1="136"
        x2="176"
        y2="136"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M48,96V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M80,168V128a32,32,0,1,0-32,32v40a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V160a32,32,0,1,0-32-32v40"
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
  name: "PhArmchair",
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
