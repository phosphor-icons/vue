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
    <g v-if="weight === 'bold'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <circle cx="82" cy="156" r="16" />
      <circle cx="174" cy="156" r="16" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z"
        opacity="0.3"
      />
      <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z" opacity="0.3" />
      <rect x="42" y="72" width="172" height="48" opacity="0.2" />
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="82" cy="156" r="12" />
      <circle cx="174" cy="156" r="12" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M190,32H66A32.03667,32.03667,0,0,0,34,64V216a16.01833,16.01833,0,0,0,16,16H74a16.01833,16.01833,0,0,0,16-16V200h76v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V64A32.03667,32.03667,0,0,0,190,32ZM74,216H50V200H74Zm8-48a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Zm32,48H182V200h24Zm0-96H50V72H206Z"
      />
    </g>
    <g v-else-if="weight === 'light'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <circle cx="82" cy="156" r="9" />
      <circle cx="174" cy="156" r="9" />
    </g>
    <g v-else-if="weight === 'thin'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <circle cx="82" cy="156" r="6" />
      <circle cx="174" cy="156" r="6" />
    </g>
    <g v-else-if="weight === 'regular'">
      <line
        x1="42"
        y1="72"
        x2="214"
        y2="72"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="42"
        y1="120"
        x2="214"
        y2="120"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <circle cx="82" cy="156" r="12" />
      <circle cx="174" cy="156" r="12" />
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
