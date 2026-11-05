export type PhosphorIconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface PhosphorIconProps {
  weight?: PhosphorIconWeight;
  size?: string | number;
  color?: string;
  mirrored?: boolean;
}

/**
 * The type of any Phosphor icon component, e.g. for accepting one as a prop.
 *
 * Don't replace this with `DefineComponent<PhosphorIconProps>`: real icons aren't
 * assignable to it, because it also compares component internals (`setup`, `data`, etc.)
 * with their generated declarations. This type only checks `$props`.
 */
export type PhosphorIcon = new (...args: any[]) => {
  $props: PhosphorIconProps;
};
