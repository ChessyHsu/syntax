export const Color = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  BRANDED: "branded",
  DESTRUCTIVE_PRIMARY: "destructive-primary",
  DESTRUCTIVE_SECONDARY: "destructive-secondary",
  DESTRUCTIVE_TERTIARY: "destructive-tertiary",
  SUCCESS: "success",
  GRAY200: "gray200",
  GRAY700: "gray700",
  GRAY800: "gray800",
  GRAY900: "gray900",
  WHITE: "white",
  INHERIT: "inherit",
} as const;

export type ColorKeys = keyof typeof Color;
export type ColorValue = (typeof Color)[ColorKeys];

export const Size = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export type SizeKeys = keyof typeof Size;
export type SizeValue = (typeof Size)[SizeKeys];

export const Orientation = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;