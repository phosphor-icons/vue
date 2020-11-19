import { PropType } from "vue";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
export type Size = string | number;

export interface IconProps {
  weight: Weight;
  size: Size;
  color: string;
  mirrored: boolean;
}

export const PropValidator = {
  color: String,
  size: [String, Number] as PropType<Size>,
  weight: String as PropType<Weight>,
  mirrored: Boolean
};
