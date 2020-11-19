<template>
  <div id="app" style="user-select: none;">
    <section>
      <h1>Passed Props</h1>
      <PhAt :weight="weight" :size="size" :color="color" :mirrored="mirrored" />
      <PhChartPieSlice
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhFingerprint
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhMapTrifold
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhPackage
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhPen
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhStack
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhTruck
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhCircle
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <PhTable
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
    </section>
    <section>
      <h1>Injected Context</h1>
      <PhAt />
      <PhChartPieSlice />
      <PhFingerprint />
      <PhMapTrifold />
      <PhPackage />
      <PhPen />
      <PhStack />
      <PhTruck @click="test" />
      <PhCircle />
      <PhTable />
    </section>
    <section>
      <h1>Toggleables</h1>
      <PhHeart
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="check"
      />
      <PhEye
        v-if="visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <PhEyeSlash
        v-if="!visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <PhHourglass
        v-if="time === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <PhHourglassHigh
        v-if="time === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <PhHourglassMedium
        v-if="time === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <PhHourglassLow
        v-if="time === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <PhBatteryFull
        v-if="charge === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhBatteryHigh
        v-if="charge === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhBatteryMedium
        v-if="charge === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhBatteryLow
        v-if="charge === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhBatteryEmpty
        v-if="charge === 'empty'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhBatteryCharging
        v-if="charge === 'charging'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <PhCellSignalFull
        v-if="signal === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <PhCellSignalHigh
        v-if="signal === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <PhCellSignalMedium
        v-if="signal === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <PhCellSignalLow
        v-if="signal === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <PhCellSignalNone
        v-if="signal === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <PhFolder
        v-if="!open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <PhFolderOpen
        v-if="open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <PhLockKey
        v-if="locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <PhLockKeyOpen
        v-if="!locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <PhMicrophone
        v-if="!muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <PhMicrophoneSlash
        v-if="muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <PhSpeakerHigh
        v-if="volume === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <PhSpeakerLow
        v-if="volume === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <PhSpeakerNone
        v-if="volume === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <PhSpeakerX
        v-if="volume === 'mute'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <PhWifiHigh
        v-if="wifi === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <PhWifiMedium
        v-if="wifi === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <PhWifiLow
        v-if="wifi === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <PhWifiNone
        v-if="wifi === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
    </section>
    <input name="show" type="checkbox" :checked="showAll" @change="extend" />
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

// Technically more fragile than the former type guard, but Vue 3 does a lot of
// typing magic in `defineComponent` that makes it hard to rigorously determine
// the exact type of the component
const { default: _, ...Icon } = Phosphor;
const iconNames = Object.keys(Icon);

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
      color: "indianred",
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
    provide('color', "#41B883");
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
  padding: 0;
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

.name {
  text-align: start;
  width: 240px;
}
</style>
