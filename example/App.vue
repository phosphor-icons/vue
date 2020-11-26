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
      <div class="row" v-for="icon in icons" :key="icon.options.name">
        <span class="name">{{ icon.options.name }}</span>
        <div class="icons" :title="icon.options.name">
          <component :is="icon.options.name" />
          <component
            :is="icon.options.name"
            mirrored
            color="darkorange"
            :size="24"
          />
          <component
            :is="icon.options.name"
            mirrored
            color="darkmagenta"
            :size="24"
          />
          <component
            :is="icon.options.name"
            mirrored
            color="royalblue"
            :size="24"
          />
          <component :is="icon.options.name" :weight="weight" :size="32" />
          <component
            :is="icon.options.name"
            :weight="weight"
            color="crimson"
            :size="32"
          />
          <component
            :is="icon.options.name"
            :weight="weight"
            color="teal"
            :size="32"
          />
          <component
            :is="icon.options.name"
            weight="thin"
            :color="color"
            :size="48"
          />
          <component
            :is="icon.options.name"
            weight="light"
            :color="color"
            :size="48"
          />
          <component
            :is="icon.options.name"
            weight="regular"
            :color="color"
            :size="48"
          />
          <component
            :is="icon.options.name"
            weight="bold"
            :color="color"
            :size="48"
          />
          <component
            :is="icon.options.name"
            weight="fill"
            :color="color"
            :size="48"
          />
          <component
            :is="icon.options.name"
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
import Vue from "vue";
import * as Phosphor from "@/entry";
import { ExtendedVue } from "vue/types/vue";
import { IconProps, IconComputed } from "@/lib/types";

type VueIcon = ExtendedVue<Vue, {}, {}, IconComputed, IconProps> & {
  options: { name: string };
};

function isIcon(candidate: any): candidate is VueIcon {
  return candidate.options && candidate.options.name;
}

const Icon = Object.values(Phosphor).reduce((components, Icon) => {
  if (isIcon(Icon)) return { ...components, [Icon.options!!.name]: Icon };
  return components;
}, {});

const icons = Object.values(Icon);

if (process.env.NODE_ENV === "development") {
  console.log(`${icons.length} icons`);
}

interface AppData {
  icons: any[];
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
  showAll: boolean;
}

export default Vue.extend({
  name: "ServeDev",
  components: Icon,
  data(): AppData {
    return {
      icons,
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
    };
  },
  computed: {
    filled() {
      const { checked } = this as AppData;
      return checked ? "fill" : "regular";
    }
  },
  provide() {
    return {
      weight: "duotone",
      size: 64,
      color: "darkorchid",
      mirrored: false
    };
  },
  methods: {
    extend() {
      this.showAll = !this.showAll;
    },
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
    }
  }
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
