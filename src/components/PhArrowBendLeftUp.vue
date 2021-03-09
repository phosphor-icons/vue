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
      <polyline
        points="152 80 104 32 56 80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M200,224a96,96,0,0,1-96-96V32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polyline
        points="152 80 104 32 56 80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,224a96,96,0,0,1-96-96V32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M200,216a88.09957,88.09957,0,0,1-88-88V51.31372l34.34277,34.34351a8.00053,8.00053,0,0,0,11.31446-11.31446l-48-48c-.05347-.05322-.11158-.09863-.166-.1499-.13623-.12891-.27222-.25781-.417-.377-.10449-.0857-.21411-.16065-.32178-.24024-.10229-.07617-.2019-.15551-.3081-.22656-.11817-.0791-.24073-.14795-.36206-.22-.10352-.06177-.20459-.12671-.311-.18359-.11816-.06324-.23975-.11695-.36035-.17383-.1167-.05518-.23169-.11328-.35132-.16284-.11255-.04663-.22754-.084-.3418-.12525-.13256-.04785-.26367-.09839-.39917-.1394-.10962-.0332-.22094-.05713-.3313-.08521-.14233-.03637-.2832-.07592-.42846-.10473-.12134-.02393-.24414-.0376-.36621-.05567-.136-.02051-.27027-.04565-.40845-.05908-.2019-.01977-.40454-.02612-.60718-.03076C104.11743,24.00757,104.05981,24,104,24s-.11743.00757-.177.00879c-.20264.00464-.40528.011-.60718.03076-.13818.01343-.27246.03857-.40845.05908-.12207.01807-.24487.03174-.36621.05567-.14526.02881-.28613.06836-.42846.10473-.11036.02808-.22168.052-.3313.08521-.1355.041-.26661.09155-.39917.1394-.11426.04126-.22925.07862-.3418.12525-.11963.04956-.23462.10766-.35132.16284-.1206.05688-.24219.11059-.36035.17383-.10645.05688-.20752.12182-.311.18359-.12133.072-.24389.14087-.36206.22-.1062.071-.20581.15039-.3081.22656-.10767.07959-.21729.15454-.32178.24024-.14477.11914-.28076.248-.417.377-.05444.05127-.11255.09668-.166.1499l-48,48A8.00053,8.00053,0,0,0,61.65723,85.65723L96,51.31372V128A104.11791,104.11791,0,0,0,200,232a8,8,0,0,0,0-16Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <polyline
        points="152 80 104 32 56 80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M200,224a96,96,0,0,1-96-96V32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="displayWeight === 'thin'">
      <polyline
        points="152 80 104 32 56 80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M200,224a96,96,0,0,1-96-96V32"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="displayWeight === 'regular'">
      <polyline
        points="152 80 104 32 56 80"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M200,224a96,96,0,0,1-96-96V32"
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
  ContextGetter,
} from "@/lib/types";
export default Vue.extend<{}, {}, IconComputed, IconProps>({
  name: "PhArrowBendLeftUp",
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
    },
  },
});
</script>
