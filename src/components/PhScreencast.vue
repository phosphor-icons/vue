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
      <path
        d="M35.99414,68V60a8,8,0,0,1,8-8h168a8,8,0,0,1,8,8V196a8,8,0,0,1-8,8h-40"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M35.99414,188a16,16,0,0,1,16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M35.99414,148a56,56,0,0,1,56,56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M35.99414,108a96,96,0,0,1,96,96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M215.99463,47.99561h-176a7.99988,7.99988,0,0,0-8,8V192A15.99986,15.99986,0,0,1,47.9939,207.99561H215.99463a8,8,0,0,0,8-8v-144A7.99989,7.99989,0,0,0,215.99463,47.99561Z"
        opacity="0.2"
      />
      <path
        d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,192a16,16,0,0,1,16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,160a48,48,0,0,1,48,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,128a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <g>
        <path
          d="M31.99414,184a8,8,0,0,0,0,16,8.00917,8.00917,0,0,1,8,8,8,8,0,0,0,16,0A24.02718,24.02718,0,0,0,31.99414,184Z"
        />
        <path
          d="M31.99414,152a8,8,0,0,0,0,16,40.04552,40.04552,0,0,1,40,40,8,8,0,0,0,16,0A56.06322,56.06322,0,0,0,31.99414,152Z"
        />
        <path
          d="M31.99414,120a8,8,0,0,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,31.99414,120Z"
        />
        <path
          d="M215.99414,40h-176a16.01833,16.01833,0,0,0-16,16V96a8.00008,8.00008,0,0,0,8,8,104.11791,104.11791,0,0,1,104,104,8.00008,8.00008,0,0,0,8,8h72a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,215.99414,40Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M31.99414,192a16,16,0,0,1,16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M31.99414,160a48,48,0,0,1,48,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M31.99414,128a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M31.99414,192a16,16,0,0,1,16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M31.99414,160a48,48,0,0,1,48,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M31.99414,128a80,80,0,0,1,80,80"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,192a16,16,0,0,1,16,16"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,160a48,48,0,0,1,48,48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M31.99414,128a80,80,0,0,1,80,80"
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
