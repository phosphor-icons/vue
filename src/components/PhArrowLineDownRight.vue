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
  
  <line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="192 104 192 200 96 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="40" x2="208" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-else-if="displayWeight === 'duotone'">
  
  <line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 104 192 200 96 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="40" x2="208" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-else-if="displayWeight === 'fill'">
  
  <g>
    <path d="M192,96a8.00008,8.00008,0,0,0-8,8v76.68585L85.65723,82.34326A8.00018,8.00018,0,1,0,74.34277,93.65674L172.686,192H96a8,8,0,0,0,0,16h96c.26367,0,.52686-.014.78955-.03986.11914-.01171.23486-.03405.353-.051.14013-.02014.28076-.0365.42041-.06415.13428-.02667.26513-.06366.397-.097.12109-.03046.24268-.057.36231-.09308.1289-.039.25341-.08741.37939-.13269.12012-.04309.2417-.08271.35986-.13178.1167-.04828.228-.105.3418-.15851.12354-.058.24756-.113.36865-.17773.10645-.057.20752-.12207.311-.18366.1206-.07189.24267-.14032.36035-.21911.11035-.07379.21387-.15625.32031-.23529.10352-.07678.209-.14874.30908-.23114.16455-.13513.32032-.28028.47364-.42792.03613-.03473.07519-.06433.11084-.09985.03466-.035.064-.07337.09814-.10877.148-.15375.29346-.31006.4292-.47522.084-.10235.15772-.21014.23584-.31555.07764-.10413.1582-.20532.23047-.31329.08057-.11994.1499-.24427.22314-.36737.06006-.10126.124-.20008.17969-.30414.06592-.12256.12158-.24872.18018-.3739.05273-.112.10888-.222.15625-.33686.0498-.12.08984-.24273.1333-.36462.04492-.12439.09277-.24719.13135-.37439.03662-.12189.064-.24567.09472-.36877.03272-.13.06934-.25843.09522-.39081.02832-.14093.04492-.28327.06494-.4253.0166-.11639.03906-.23089.05029-.34887.02588-.26251.04-.52588.04-.78937V104A8.00008,8.00008,0,0,0,192,96Z"/>
    <path d="M208,32H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
  </g>
</g>
    <g v-else-if="displayWeight === 'light'">
  
  <line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="192 104 192 200 96 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="40" x2="208" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-else-if="displayWeight === 'thin'">
  
  <line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="192 104 192 200 96 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="40" x2="208" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-else-if="displayWeight === 'regular'">
  
  <line x1="80" y1="88" x2="192" y2="200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 104 192 200 96 200" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="40" x2="208" y2="40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IconProps,
  PropValidator,
  IconContext,
  ContextGetter,
} from "@/lib/types";
export default defineComponent({
  name: "PhArrowLineDownRight",
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
