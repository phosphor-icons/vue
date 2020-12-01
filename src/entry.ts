import { App } from "vue";
import * as components from "@/lib/index";
import { PhosphorVuePlugin } from "./lib/types";

export const PhosphorVue: PhosphorVuePlugin = {
  install(app: App) {
    if (this.installed) return;
    this.installed = true;
    Object.entries(components).forEach(([componentName, component]) =>
      app.component(componentName, component)
    );
  },
};

// Default export is library as a whole, registered via app.use()
export default PhosphorVue;

// To allow individual component use, re-export components which can
// each be registered via app.component()
export * from "@/lib/index";
