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
  >
    <g v-if="displayWeight === 'bold'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <line
        x1="68"
        y1="32"
        x2="134"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <rect
        x="68"
        y="32"
        width="66"
        height="132"
        stroke-width="24"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M134,164v66a66,66,0,0,1-66-66"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M134,164h8a66,66,0,0,0,0-132h-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <polygon points="68 32 68 164 134 164 68 32" opacity="0.2" />
      <line
        x1="68"
        y1="32"
        x2="134"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <rect
        x="68"
        y="32"
        width="66"
        height="132"
        stroke-width="16"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M134,164v66a66,66,0,0,1-66-66"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M134,164h8a66,66,0,0,0,0-132h-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path d="M134,164h8a66,66,0,0,0,0-132h-8Z" opacity="0.2" />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <path
        d="M142,24H68c-.06836,0-.13477.00855-.20264.01026-.16162.004-.32275.01056-.48486.02447-.11377.00971-.22607.02387-.33838.03833-.14307.0185-.28613.039-.42871.06543-.13232.02429-.26221.05359-.39209.08435-.11865.02826-.23682.05725-.35449.09113-.15088.04315-.29883.09216-.4458.14386-.09668.034-.19287.06769-.28907.10565-.16113.06366-.31787.134-.47363.20764-.05566.02625-.11279.046-.168.07361-.03027.0152-.05761.03412-.08789.04968-.14795.0766-.2915.15979-.43408.24512-.0918.05481-.18457.10828-.27393.16626-.11572.07574-.22607.15729-.33789.23871-.10644.07776-.21435.15423-.3164.23657-.084.06811-.16309.14117-.24463.21258-.11719.10267-.23438.20472-.34473.31336-.06543.06445-.12549.13342-.18847.20007-.11426.12036-.228.2403-.3335.36682-.064.07611-.12158.15693-.18213.23542-.09424.12188-.18945.24267-.27637.36926-.07129.10406-.13476.21338-.20166.321-.06591.10669-.13427.21155-.19482.321-.0752.13513-.14111.27551-.2085.41528-.04248.08838-.08838.17493-.12744.26471-.0664.15186-.123.30841-.18017.465-.03125.08538-.06543.16943-.09375.25586-.04834.14813-.08741.2998-.127.45159-.02685.10328-.05664.20563-.07959.31-.02832.13-.04931.26233-.07129.39453-.02246.134-.04541.2674-.06152.40259-.01221.10742-.01855.21619-.02637.32483-.01269.16376-.023.32745-.0249.49225C60.00488,31.93187,60,31.96537,60,32V164a74.08385,74.08385,0,0,0,74,74,8.00008,8.00008,0,0,0,8-8V172a74,74,0,0,0,0-148ZM126,130.11137,80.94434,40H126ZM76.55176,172H126v49.4502A58.12735,58.12735,0,0,1,76.55176,172ZM142,156V40a58,58,0,0,1,0,116Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <line
        x1="68"
        y1="32"
        x2="134"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <rect
        x="68"
        y="32"
        width="66"
        height="132"
        stroke-width="12"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M134,164v66a66,66,0,0,1-66-66"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M134,164h8a66,66,0,0,0,0-132h-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <line
        x1="68"
        y1="32"
        x2="134"
        y2="164"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <rect
        x="68"
        y="32"
        width="66"
        height="132"
        stroke-width="8"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M134,164v66a66,66,0,0,1-66-66"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M134,164h8a66,66,0,0,0,0-132h-8"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <rect x="-0.00002" width="256.00004" height="256.00004" fill="none" />
      <g>
        <line
          x1="68"
          y1="32"
          x2="134"
          y2="164"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <rect
          x="68"
          y="32"
          width="66"
          height="132"
          stroke-width="16"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <path
          d="M134,164v66a66,66,0,0,1-66-66"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <path
          d="M134,164h8a66,66,0,0,0,0-132h-8"
          fill="none"
          :stroke="displayColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter
} from "@/lib/types";
export default defineComponent({
  name: "PhPhosphorLogo",
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
