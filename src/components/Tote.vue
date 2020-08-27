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
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
</g>
    <g v-if="displayWeight === 'duotone'">
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" opacity="0.2"/>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
</g>
    <g v-if="displayWeight === 'fill'">
  <path d="M234.9834,69.3291A16.01892,16.01892,0,0,0,223.06152,64h-45.7749c-3.98047-22.6709-24.562-40-49.29248-40s-45.312,17.3291-49.29248,40H32.93848A16.00031,16.00031,0,0,0,17.03613,81.7666L31.25781,209.76709A15.98372,15.98372,0,0,0,47.16016,224H208.83984a15.98375,15.98375,0,0,0,15.90235-14.2334l14.22168-128A16.01871,16.01871,0,0,0,234.9834,69.3291ZM127.99414,40c15.814,0,29.14014,10.21387,32.92383,24H95.07031C98.854,50.21387,112.18018,40,127.99414,40Z"/>
</g>
    <g v-if="displayWeight === 'light'">
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
</g>
    <g v-if="displayWeight === 'thin'">
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
</g>
    <g v-if="displayWeight === 'regular'">
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M85.99414,72c0-22.09139,18.804-40,42-40s42,17.90861,42,40" fill="none" :stroke="displayColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
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
  name: "Tote",
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
