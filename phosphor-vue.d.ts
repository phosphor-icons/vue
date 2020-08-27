import Vue, { PluginFunction, VueConstructor } from "vue";
import { IconProps, IconComputed } from "./src/lib/types";
import {} from "./src/lib/index";
import { ExtendedVue } from "vue/types/vue";

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const PhosphorVueTs: { install: InstallFunction };
export default PhosphorVueTs;

export const PhosphorVueTsSample: VueConstructor<Vue>;

//

declare const Android: ExtendedVue<Vue, {}, {}, IconComputed, IconProps>;
export { Android };
