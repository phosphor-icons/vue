import {
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsMixin,
  DefineComponent,
  PropType,
  ToRefs,
  VNodeProps
} from "vue";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
export type Size = string | number;

export interface IconProps {
  weight: Weight;
  size: Size;
  color: string;
  mirrored: boolean;
}

export type SetupIconProps = Readonly<
  Required<Pick<IconProps, "mirrored">> & Partial<Omit<IconProps, "mirrored">>
>;

export const PropValidator = {
  color: String,
  size: [String, Number] as PropType<Size>,
  weight: String as PropType<Weight>,
  mirrored: Boolean
};

export type PhosphorIcon = DefineComponent<
  typeof PropValidator,
  ToRefs<IconProps>,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  Record<string, any>,
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  SetupIconProps,
  Required<Pick<IconProps, "mirrored">>
>;
