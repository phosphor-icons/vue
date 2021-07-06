import { computed, inject, isRef, Ref, ToRefs } from "vue";
import { IconProps, SetupIconProps } from "./types";

const defaults: IconProps = {
  weight: "regular",
  size: "1em",
  color: "currentColor",
  mirrored: false
};

function unwrapIfRef<T>(obj: T | Ref<T>): T {
  if (isRef(obj)) return obj.value;
  return obj;
}

function useDefaultPropsFromContext(props: SetupIconProps): ToRefs<IconProps> {
  const contextProps: IconProps = {
    weight: unwrapIfRef(inject("weight", defaults.weight)),
    size: unwrapIfRef(inject("size", defaults.size)),
    color: unwrapIfRef(inject("color", defaults.color)),
    mirrored: unwrapIfRef(inject("mirrored", defaults.mirrored))
  };

  return {
    weight: computed(() => props.weight ?? contextProps.weight),
    size: computed(() => props.size ?? contextProps.size),
    color: computed(() => props.color ?? contextProps.color),
    mirrored: computed(() => props.mirrored || contextProps.mirrored)
  };
}
export default useDefaultPropsFromContext;
