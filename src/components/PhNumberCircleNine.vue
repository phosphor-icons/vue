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
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="152.24871"
        y1="122.00466"
        x2="121.07448"
        y2="176.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="weight === 'duotone'">
      <circle cx="128" cy="128" r="96" opacity="0.2" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="152.24871"
        y1="122.00466"
        x2="121.07448"
        y2="176.00001"
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
          d="M138,90.6875a19.87769,19.87769,0,0,0-9.96875-2.69531,20.099,20.099,0,0,0-5.20312.69531,20.0058,20.0058,0,1,0,15.17187,2Z"
        />
        <path
          d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm31.17969,102.00781L128.00781,180a8.00128,8.00128,0,1,1-13.85937-8l16.34863-28.31738c-.85547.06152-1.70508.34082-2.55957.34082a36.01849,36.01849,0,1,1,31.24219-18.01563Z"
        />
      </g>
    </g>
    <g v-else-if="weight === 'light'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="152.24871"
        y1="122.00466"
        x2="121.07448"
        y2="176.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </g>
    <g v-else-if="weight === 'thin'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="152.24871"
        y1="122.00466"
        x2="121.07448"
        y2="176.00001"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </g>
    <g v-else-if="weight === 'regular'">
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="16"
      />
      <path
        d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="152.24871"
        y1="122.00466"
        x2="121.07448"
        y2="176.00001"
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
