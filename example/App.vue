<template>
  <div id="app" style="user-select: none;">
    <section>
      <h1>Passed Props</h1>
      <ph-at :weight="weight" :size="size" :color="color" :mirrored="mirrored" />
      <ph-chart-pie-slice
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-fingerprint
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-map-trifold
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-package
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-pen
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-stack
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-truck
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-circle
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <ph-table
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
    </section>
    <section>
      <h1>Injected Context</h1>
      <ph-at />
      <ph-chart-pie-slice />
      <ph-fingerprint />
      <ph-map-trifold />
      <ph-package />
      <ph-pen />
      <ph-stack />
      <span class="toggleables">
        <ph-truck @click="test" />
      </span>
      <ph-circle />
      <ph-table />
    </section>
    <section class="toggleables">
      <h1>Toggleables</h1>
      <ph-heart
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="check"
      />
      <ph-eye
        v-if="visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <ph-eye-slash
        v-if="!visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <ph-hourglass
        v-if="time === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <ph-hourglass-high
        v-if="time === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <ph-hourglass-medium
        v-if="time === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <ph-hourglass-low
        v-if="time === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <ph-battery-full
        v-if="charge === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-battery-high
        v-if="charge === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-battery-medium
        v-if="charge === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-battery-low
        v-if="charge === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-battery-empty
        v-if="charge === 'empty'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-battery-charging
        v-if="charge === 'charging'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <ph-cell-signal-full
        v-if="signal === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <ph-cell-signal-high
        v-if="signal === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <ph-cell-signal-medium
        v-if="signal === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <ph-cell-signal-low
        v-if="signal === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <ph-cell-signal-none
        v-if="signal === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <ph-folder
        v-if="!open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <ph-folder-open
        v-if="open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <ph-lock-key
        v-if="locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <ph-lock-key-open
        v-if="!locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <ph-microphone
        v-if="!muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <ph-microphone-slash
        v-if="muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <ph-speaker-high
        v-if="volume === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <ph-speaker-low
        v-if="volume === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <ph-speaker-none
        v-if="volume === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <ph-speaker-x
        v-if="volume === 'mute'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <ph-wifi-high
        v-if="wifi === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <ph-wifi-medium
        v-if="wifi === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <ph-wifi-low
        v-if="wifi === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <ph-wifi-none
        v-if="wifi === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
    </section>
    <section>
      <h1>With Children</h1>
      <ph-cube>
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        />
      </ph-cube>
      <ph-lightning>
        <title>HI MOM</title>
      </ph-lightning>
      <span style="display: inline-flex; align-items: center;">
        <ph-diamond>
          <ph-diamond :size="128" :x="64" :y="64">
            <ph-diamond :size="128" :x="64" :y="64">
              <ph-diamond :size="128" :x="64" :y="64">
                <ph-diamond :size="128" :x="64" :y="64" />
              </ph-diamond>
            </ph-diamond>
          </ph-diamond>
        </ph-diamond>
        &lt;-- FOR DEMONSTRATION PURPOSES ONLY
      </span>
    </section>
    <input
      id="show"
      name="show"
      type="checkbox"
      :checked="showAll"
      @change="extend"
    />
    <label for="show">Show All</label>
    <section v-if="showAll">
      <div class="row" v-for="icon in icons" :key="icon">
        <span class="name">{{ icon }}</span>
        <div class="icons" :title="icon">
          <component :is="icon" />
          <component
            :is="icon"
            mirrored
            color="darkorange"
            :size="24"
          />
          <component
            :is="icon"
            mirrored
            color="darkmagenta"
            :size="24"
          />
          <component
            :is="icon"
            mirrored
            color="royalblue"
            :size="24"
          />
          <component :is="icon" :weight="weight" :size="32" />
          <component
            :is="icon"
            :weight="weight"
            color="crimson"
            :size="32"
          />
          <component
            :is="icon"
            :weight="weight"
            color="teal"
            :size="32"
          />
          <component
            :is="icon"
            weight="thin"
            :color="color"
            :size="48"
          />
          <component
            :is="icon"
            weight="light"
            :color="color"
            :size="48"
          />
          <component
            :is="icon"
            weight="regular"
            :color="color"
            :size="48"
          />
          <component
            :is="icon"
            weight="bold"
            :color="color"
            :size="48"
          />
          <component
            :is="icon"
            weight="fill"
            :color="color"
            :size="48"
          />
          <component
            :is="icon"
            weight="duotone"
            :color="color"
            :size="48"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, ToRefs, Ref, provide, reactive } from "vue";
import * as Phosphor from "@/entry";
import { PhosphorIcon, PhosphorVuePlugin } from "@/lib/types";

function isIcon(obj: PhosphorVuePlugin | PhosphorIcon) {
  return (obj as PhosphorVuePlugin).install === undefined;
}

const iconNames = Object.entries(Phosphor)
  .filter(([_, obj]) => isIcon(obj))
  .map(([iconName, _]) => iconName);

if (process.env.NODE_ENV === "development") {
  console.log(`${iconNames.length} icons`);
}

interface AppData {
  icons: string[];
  weight: string;
  size: number | string;
  color: string;
  mirrored: boolean;
  checked: boolean;
  time: "high" | "medium" | "low" | "none";
  visible: boolean;
  charge: "full" | "high" | "medium" | "low" | "empty" | "charging";
  signal: "full" | "high" | "medium" | "low" | "none";
  open: boolean;
  locked: boolean;
  muted: boolean;
  volume: "high" | "low" | "none" | "mute";
  wifi: "high" | "medium" | "low" | "none";
  showAll: boolean;
}

export default defineComponent({
  name: "ServeDev",
  setup() {
    const toggle = (ref: Ref<boolean>) => ref.value = !ref.value;

    const data: ToRefs<AppData> = toRefs(reactive({
      icons: iconNames,
      weight: "regular",
      size: 64,
      color: "darkorange",
      mirrored: false,
      checked: false,
      time: "none",
      visible: true,
      charge: "full",
      signal: "full",
      open: false,
      locked: true,
      muted: false,
      volume: "high",
      wifi: "high",
      showAll: false
    }));

    const filled = computed(() => data.checked.value ? "fill" : "regular");

    const extend = () => toggle(data.showAll);
    const test = () => console.log(`HI MOM! It's ${new Date().toLocaleTimeString()}`);
    const check = () => toggle(data.checked);
    const elapse = () => {
      switch (data.time.value) {
        case "none":
          data.time.value = "high";
          break;
        case "high":
          data.time.value = "medium";
          break;
        case "medium":
          data.time.value = "low";
          break;
        case "low":
          data.time.value = "none";
          break;
      }
    };
    const hide = () => toggle(data.visible);
    const discharge = () => {
      switch (data.charge.value) {
        case "full":
          data.charge.value = "high";
          break;
        case "high":
          data.charge.value = "medium";
          break;
        case "medium":
          data.charge.value = "low";
          break;
        case "low":
          data.charge.value = "empty";
          break;
        case "empty":
          data.charge.value = "charging";
          break;
        case "charging":
          data.charge.value = "full";
          break;
      }
    };
    const changeSignal = () => {
      switch (data.signal.value) {
        case "full":
          data.signal.value = "high";
          break;
        case "high":
          data.signal.value = "medium";
          break;
        case "medium":
          data.signal.value = "low";
          break;
        case "low":
          data.signal.value = "none";
          break;
        case "none":
          data.signal.value = "full";
          break;
      }
    };
    const changeOpen = () => toggle(data.open);
    const changeLock = () => toggle(data.locked);
    const changeMute = () => toggle(data.muted);
    const changeVolume = () => {
      switch (data.volume.value) {
        case "high":
          data.volume.value = "low";
          break;
        case "low":
          data.volume.value = "none";
          break;
        case "none":
          data.volume.value = "mute";
          break;
        case "mute":
          data.volume.value = "high";
          break;
      }
    };
    const changeWifi = () => {
      switch (data.wifi.value) {
        case "high":
          data.wifi.value = "medium";
          break;
        case "medium":
          data.wifi.value = "low";
          break;
        case "low":
          data.wifi.value = "none";
          break;
        case "none":
          data.wifi.value = "high";
          break;
      }
    };

    provide('weight', "duotone");
    provide('size', 64);
    provide('color', "darkorchid");
    provide('mirrored', false);

    return {
      ...data,
      filled,
      extend,
      test,
      check,
      elapse,
      hide,
      discharge,
      changeSignal,
      changeOpen,
      changeLock,
      changeMute,
      changeVolume,
      changeWifi,
    };
  },
});
</script>

<style>
body {
  color: white;
  margin: 0;
  padding: 0 32px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #242424;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.row {
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 8px 0;
}

.toggleables svg {
  cursor: pointer;
}

.name {
  text-align: start;
  width: 240px;
}
</style>
