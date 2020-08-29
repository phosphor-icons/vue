type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
type Size = string | number;

export interface IconProps {
  weight: Weight;
  size: Size;
  color: string;
  mirrored: boolean;
}

export const PropValidator = {
  color: String,
  size: [String, Number],
  weight: { type: String as () => Weight },
  mirrored: Boolean
};

export interface IconComputed {
  displayWeight: Weight;
  displaySize: Size;
  displayColor: string;
  displayMirrored: string | undefined;
}

export interface IconContext {
  contextWeight?: Weight;
  contextSize?: Size;
  contextColor?: string;
  contextMirrored?: boolean;
}

export const ContextGetter = {
  contextWeight: { from: "weight", default: "regular" },
  contextSize: { from: "size", default: "1em" },
  contextColor: { from: "color", default: "currentColor" },
  contextMirrored: { from: "mirrored", default: false }
};
