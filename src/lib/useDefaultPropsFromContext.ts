import { computed, inject, Ref, ToRefs, isRef } from "vue";
import { IconProps } from "@/lib/types";

const defaults: IconProps = {
  weight: "regular",
  size: "1em",
  color: "currentColor",
  mirrored: false
};

function unwrapPossibleRef<T>(obj: T | Ref<T>): T {
  if (isRef(obj)) return obj.value;
  return obj;
}

export default function useDefaultPropsFromContext(
  props: Readonly<Partial<IconProps>>
): ToRefs<IconProps> {
  const contextProps: IconProps = {
    weight: unwrapPossibleRef(inject("weight", defaults.weight)),
    size: unwrapPossibleRef(inject("size", defaults.size)),
    color: unwrapPossibleRef(inject("color", defaults.color)),
    mirrored: unwrapPossibleRef(inject("mirrored", defaults.mirrored))
  };

  return {
    weight: computed(() => props.weight ?? contextProps.weight),
    size: computed(() => props.size ?? contextProps.size),
    color: computed(() => props.color ?? contextProps.color),
    mirrored: computed(() => props.mirrored || contextProps.mirrored)
  };
}
