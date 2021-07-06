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
        x1="80"
        y1="176"
        x2="108"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="148"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <polyline
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="16"
        y1="215.98316"
        x2="240"
        y2="215.98316"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M216,136,200.98123,30.86863A8,8,0,0,0,193.06164,24H174.93836a8,8,0,0,0-7.91959,6.86863l-13.47038,94.29266"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </g>
    <g v-else-if="displayWeight === 'duotone'">
      <polygon
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216 216 216"
        opacity="0.2"
      />
      <line
        x1="80"
        y1="176"
        x2="108"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="148"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="215.98316"
        x2="240"
        y2="215.98316"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M216,136,200.98123,30.86863A8,8,0,0,0,193.06164,24H174.93836a8,8,0,0,0-7.91959,6.86863l-13.47038,94.29266"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </g>
    <g v-else-if="displayWeight === 'fill'">
      <path
        d="M240,207.9834H224V136c0-.04785-.00635-.09375-.00708-.14111-.00269-.14307-.01147-.28662-.02173-.43116-.00976-.13769-.021-.2749-.0376-.41064-.00634-.0498-.00659-.09863-.01367-.14844L208.90137,29.73633A16.08054,16.08054,0,0,0,193.06152,16h-18.123a16.08053,16.08053,0,0,0-15.83985,13.7373l-11.55908,80.91749L108.7998,81.6001A7.99978,7.99978,0,0,0,96,88v32L44.7998,81.6001A7.99978,7.99978,0,0,0,32,88V207.9834H16a8,8,0,0,0,0,16H39.6665c.11158.00439.221.0166.3335.0166s.22192-.01221.3335-.0166h175.333c.11158.00439.22095.0166.3335.0166s.22192-.01221.3335-.0166H240a8,8,0,0,0,0-16ZM100,184H72a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm84,0H156a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-13.333-56-8.52832-6.39648L174.93848,32h18.123l13.71411,96Z"
      />
    </g>
    <g v-else-if="displayWeight === 'light'">
      <line
        x1="80"
        y1="176"
        x2="108"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="148"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <polyline
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        x1="16"
        y1="215.98316"
        x2="240"
        y2="215.98316"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <path
        d="M216,136,200.98123,30.86863A8,8,0,0,0,193.06164,24H174.93836a8,8,0,0,0-7.91959,6.86863l-13.47038,94.29266"
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
        y1="176"
        x2="108"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="148"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <polyline
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <line
        x1="16"
        y1="215.98316"
        x2="240"
        y2="215.98316"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
      <path
        d="M216,136,200.98123,30.86863A8,8,0,0,0,193.06164,24H174.93836a8,8,0,0,0-7.91959,6.86863l-13.47038,94.29266"
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
        y1="176"
        x2="108"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="148"
        y1="176"
        x2="176"
        y2="176"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <polyline
        points="216 216 216 136 168 136 104 88 104 136 40 88 40 216"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="16"
        y1="215.98316"
        x2="240"
        y2="215.98316"
        fill="none"
        :stroke="displayColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M216,136,200.98123,30.86863A8,8,0,0,0,193.06164,24H174.93836a8,8,0,0,0-7.91959,6.86863l-13.47038,94.29266"
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
  name: "PhFactory",
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
