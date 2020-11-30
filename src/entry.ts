import { App, Plugin } from "vue";

// Import vue components
import * as components from "@/lib/index";

// Define typescript interfaces for autoinstaller
type PhosphorVuePlugin = Plugin & { installed?: boolean };

const PhosphorVue: PhosphorVuePlugin = {
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

// To allow individual component use, export components
// each can be registered via app.component()
export * from "@/lib/index";
