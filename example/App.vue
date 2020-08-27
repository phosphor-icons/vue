<template>
  <div id="app" style="user-select: none;">
    <section>
      <h1>Passed Props</h1>
      <At :weight="weight" :size="size" :color="color" :mirrored="mirrored" />
      <ChartPieSlice
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <FingerprintDense
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <MapTrifold
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <Package
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <Pen :weight="weight" :size="size" :color="color" :mirrored="mirrored" />
      <StackIsometric
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
      <Truck
        :weight="weight"
        :size="size"
        :color="color"
        :mirrored="mirrored"
      />
    </section>
    <section>
      <h1>Injected Context</h1>
      <At />
      <ChartPieSlice />
      <FingerprintDense />
      <MapTrifold />
      <Package />
      <Pen />
      <StackIsometric />
      <Truck @click="test" />
    </section>
    <section>
      <h1>Toggleables</h1>
      <Heart
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="check"
      />
      <Eye
        v-if="visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <EyeSlash
        v-if="!visible"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="hide"
      />
      <Hourglass
        v-if="time === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <HourglassHigh
        v-if="time === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <HourglassMedium
        v-if="time === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <HourglassLow
        v-if="time === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="elapse"
      />
      <BatteryFull
        v-if="charge === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <BatteryHigh
        v-if="charge === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <BatteryMedium
        v-if="charge === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <BatteryLow
        v-if="charge === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <BatteryEmpty
        v-if="charge === 'empty'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <BatteryCharging
        v-if="charge === 'charging'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="discharge"
      />
      <CellSignalFull
        v-if="signal === 'full'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <CellSignalHigh
        v-if="signal === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <CellSignalMedium
        v-if="signal === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <CellSignalLow
        v-if="signal === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <CellSignalNone
        v-if="signal === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeSignal"
      />
      <Folder
        v-if="!open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <FolderOpen
        v-if="open"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeOpen"
      />
      <LockKey
        v-if="locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <LockOpenKey
        v-if="!locked"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeLock"
      />
      <Microphone
        v-if="!muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <MicrophoneOff
        v-if="muted"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeMute"
      />
      <SpeakerHigh
        v-if="volume === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <SpeakerLow
        v-if="volume === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <SpeakerNone
        v-if="volume === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <SpeakerX
        v-if="volume === 'mute'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeVolume"
      />
      <WifiHigh
        v-if="wifi === 'high'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <WifiMedium
        v-if="wifi === 'medium'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <WifiLow
        v-if="wifi === 'low'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
      <WifiNone
        v-if="wifi === 'none'"
        :weight="filled"
        :size="size"
        :color="color"
        :mirrored="mirrored"
        @click="changeWifi"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Android,
  At,
  BatteryFull,
  BatteryHigh,
  BatteryMedium,
  BatteryLow,
  BatteryEmpty,
  BatteryCharging,
  CellSignalFull,
  CellSignalHigh,
  CellSignalMedium,
  CellSignalLow,
  CellSignalNone,
  ChartPieSlice,
  Eye,
  EyeSlash,
  FingerprintDense,
  Folder,
  FolderOpen,
  Heart,
  Hourglass,
  HourglassHigh,
  HourglassMedium,
  HourglassLow,
  LockKey,
  LockOpenKey,
  MapTrifold,
  Microphone,
  MicrophoneOff,
  Package,
  Pen,
  SpeakerHigh,
  SpeakerLow,
  SpeakerNone,
  SpeakerX,
  StackIsometric,
  Truck,
  WifiHigh,
  WifiMedium,
  WifiLow,
  WifiNone,
} from "@/entry";

interface AppData {
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
  volume: string;
  wifi: "high" | "medium" | "low" | "none";
}

export default Vue.extend({
  name: "ServeDev",
  components: {
    Android,
    At,
    BatteryFull,
    BatteryHigh,
    BatteryMedium,
    BatteryLow,
    BatteryEmpty,
    BatteryCharging,
    CellSignalFull,
    CellSignalHigh,
    CellSignalMedium,
    CellSignalLow,
    CellSignalNone,
    ChartPieSlice,
    Eye,
    EyeSlash,
    FingerprintDense,
    Folder,
    FolderOpen,
    Heart,
    Hourglass,
    HourglassHigh,
    HourglassMedium,
    HourglassLow,
    LockKey,
    LockOpenKey,
    MapTrifold,
    Microphone,
    MicrophoneOff,
    Package,
    Pen,
    SpeakerHigh,
    SpeakerLow,
    SpeakerNone,
    SpeakerX,
    StackIsometric,
    Truck,
    WifiHigh,
    WifiMedium,
    WifiLow,
    WifiNone,
  },
  data(): AppData {
    return {
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
    };
  },
  computed: {
    filled() {
      const { checked } = this as AppData;
      return checked ? "fill" : "regular";
    },
  },
  provide() {
    return {
      weight: "duotone",
      size: 64,
      color: "#41B883",
      mirrored: false,
    };
  },
  methods: {
    test() {
      console.log(`HI MOM! It's ${new Date().toLocaleTimeString()}`);
    },
    check() {
      this.checked = !this.checked;
    },
    elapse() {
      switch (this.time) {
        case "none":
          this.time = "high";
          break;
        case "high":
          this.time = "medium";
          break;
        case "medium":
          this.time = "low";
          break;
        case "low":
          this.time = "none";
          break;
      }
    },
    hide() {
      this.visible = !this.visible;
    },
    discharge() {
      switch (this.charge) {
        case "full":
          this.charge = "high";
          break;
        case "high":
          this.charge = "medium";
          break;
        case "medium":
          this.charge = "low";
          break;
        case "low":
          this.charge = "empty";
          break;
        case "empty":
          this.charge = "charging";
          break;
        case "charging":
          this.charge = "full";
          break;
      }
    },
    changeSignal() {
      switch (this.signal) {
        case "full":
          this.signal = "high";
          break;
        case "high":
          this.signal = "medium";
          break;
        case "medium":
          this.signal = "low";
          break;
        case "low":
          this.signal = "none";
          break;
        case "none":
          this.signal = "full";
          break;
      }
    },
    changeOpen() {
      this.open = !this.open;
    },
    changeLock() {
      this.locked = !this.locked;
    },
    changeMute() {
      this.muted = !this.muted;
    },
    changeVolume() {
      switch (this.volume) {
        case "high":
          this.volume = "low";
          break;
        case "low":
          this.volume = "none";
          break;
        case "none":
          this.volume = "mute";
          break;
        case "mute":
          this.volume = "high";
          break;
      }
    },
    changeWifi() {
      switch (this.wifi) {
        case "high":
          this.wifi = "medium";
          break;
        case "medium":
          this.wifi = "low";
          break;
        case "low":
          this.wifi = "none";
          break;
        case "none":
          this.wifi = "high";
          break;
      }
    },
  },
});
</script>
