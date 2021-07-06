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
    <slot />
    <g v-if="weight === 'bold'">
      <circle
        cx="152"
        cy="56"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M48,109.551s32-29.551,80,8c50.46853,39.48219,80,24,80,24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M110.64453,161.16016C128.46874,164.96875,176,180,176,232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M131.742,120.40547C121.75874,149.3673,91.80634,205.98063,32,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="152" cy="56" r="24" opacity="0.2" />
      <circle
        cx="152"
        cy="56"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,101.551s32-29.551,80,8c50.46853,39.48219,80,24,80,24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M135.07558,108.83476C130.73311,129.2401,101.55844,206.95584,32,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.64453,161.16016C128.46874,164.96875,176,180,176,232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M120,56a32,32,0,1,1,32,32A32.03667,32.03667,0,0,1,120,56Zm104,77.551a7.99494,7.99494,0,0,0-11.71338-7.08265l-.00146-.00256.11621-.05957c-.06348.03027-6.48926,3.05566-18.22754,1.85059-11.165-1.13965-29.46582-6.4043-53.24463-25.00684-14.99365-11.73047-38.3457-24.65918-64.44092-19.63672C60.7041,86.65039,51.563,94.75879,50.57227,95.67383a7.99984,7.99984,0,0,0,10.80957,11.7959c1.07714-.96436,25.82421-22.34973,64.61084,4.636a149.52,149.52,0,0,1-21.84522,44.39148c-.02588.03552-.05273.06946-.07812.10559-.77246,1.05445-1.56006,2.104-2.374,3.14331C82.8125,183.85742,59.63184,194.71777,32.7959,192.04A7.99965,7.99965,0,1,0,31.2041,207.96q4.87208.4878,9.50195.48145c32.63331,0,56.58155-17.4513,73.14649-38.29175C133.30127,175.27991,168,190.28955,168,232a8,8,0,0,0,16,0c0-24.65332-10.08008-45.35254-29.15039-59.85938a104.37686,104.37686,0,0,0-31.29541-15.8081,165.70877,165.70877,0,0,0,16.08447-34.14417c25.72168,17.94129,46.18653,22.30079,59.99414,22.29993,12.4209-.001,19.458-3.52539,20.082-3.85254l-.00146-.0022A7.99461,7.99461,0,0,0,224,133.551Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="152"
        cy="56"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M56,101.551s32-29.551,80,8c50.46853,39.48219,80,24,80,24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M135.07558,108.83476C130.73311,129.2401,101.55844,206.95584,32,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M110.64453,161.16016C128.46874,164.96875,176,180,176,232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="152"
        cy="56"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M56,101.551s32-29.551,80,8c50.46853,39.48219,80,24,80,24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M135.07558,108.83476C130.73311,129.2401,101.55844,206.95584,32,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M110.64453,161.16016C128.46874,164.96875,176,180,176,232"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="152"
        cy="56"
        r="24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M56,101.551s32-29.551,80,8c50.46853,39.48219,80,24,80,24"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M135.07558,108.83476C130.73311,129.2401,101.55844,206.95584,32,200"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M110.64453,161.16016C128.46874,164.96875,176,180,176,232"
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
import { SetupIconProps, PropValidator, PhosphorIcon } from "@/lib/types";
import useDefaultPropsFromContext from "@/lib/useDefaultPropsFromContext";

const component: PhosphorIcon = defineComponent({
  props: PropValidator,
  setup(props: SetupIconProps) {
    return { ...useDefaultPropsFromContext(props) };
  }
});
export default component;
</script>
