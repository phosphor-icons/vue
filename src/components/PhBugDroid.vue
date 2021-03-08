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
      <circle cx="156" cy="84" r="16" />
      <circle cx="100" cy="84" r="16" />
      <path
        d="M207.92969,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="207.92969"
        y1="128"
        x2="47.92969"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="55.92969"
        y1="28"
        x2="76.24389"
        y2="46.93601"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="199.92969"
        y1="28"
        x2="179.61507"
        y2="46.93662"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path d="M47.92969,128h160v20a80,80,0,0,1-160,0Z" opacity="0.2" />
      <path
        d="M207.92969,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="207.92969"
        y1="128"
        x2="47.92969"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="155.92969" cy="91.99998" r="12" />
      <circle cx="99.92969" cy="91.99998" r="12" />
      <line
        x1="55.92969"
        y1="28"
        x2="76.24389"
        y2="46.93601"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="199.92969"
        y1="28"
        x2="179.61507"
        y2="46.93662"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M191.28711,46.99316l14.09765-13.14111A8.00027,8.00027,0,0,0,194.47461,22.148L179.11914,36.4624a87.81742,87.81742,0,0,0-102.37891,0L61.38476,22.148a8.00027,8.00027,0,0,0-10.91015,11.7041L64.57226,46.99268A87.69686,87.69686,0,0,0,39.92969,108v40a88,88,0,0,0,176,0V108A87.69484,87.69484,0,0,0,191.28711,46.99316ZM127.92969,36a72.08124,72.08124,0,0,1,72,72v12h-144V108A72.08124,72.08124,0,0,1,127.92969,36Zm16,56a12,12,0,1,1,12,12A12,12,0,0,1,143.92969,92Zm-56,0a12,12,0,1,1,12,12A12,12,0,0,1,87.92969,92Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <circle cx="156" cy="84" r="10" />
      <circle cx="100" cy="84" r="10" />
      <path
        d="M207.92969,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="207.92969"
        y1="128"
        x2="47.92969"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="55.92969"
        y1="28"
        x2="76.24389"
        y2="46.93601"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="199.92969"
        y1="28"
        x2="179.61507"
        y2="46.93662"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle cx="156" cy="84" r="8" />
      <circle cx="100" cy="84" r="8" />
      <path
        d="M207.92969,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="207.92969"
        y1="128"
        x2="47.92969"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="55.92969"
        y1="28"
        x2="76.24389"
        y2="46.93601"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="199.92969"
        y1="28"
        x2="179.61507"
        y2="46.93662"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M208,148a80,80,0,0,1-160,0V108a80,80,0,0,1,160,0Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="208"
        y1="128"
        x2="48"
        y2="128"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="156" cy="91.99998" r="12" />
      <circle cx="100" cy="91.99998" r="12" />
      <line
        x1="56"
        y1="28"
        x2="76.3142"
        y2="46.93601"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="200"
        y1="28"
        x2="179.68538"
        y2="46.93662"
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
  },
});
export default component;
</script>
