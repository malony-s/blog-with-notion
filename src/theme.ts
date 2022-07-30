const colors = {
  primary: "#ed4073",
  secondary: "#19857b",
  error: "#d64061",
  success: "#435F54",
  text: {
    primary: "rgba(0, 0, 0, 0.8)",
    primaryContract: "#fff",
    secondary: "rgba(0, 0, 0, 0.6)",
  },
  divider: "#a5a5a5",
  hoverHex: "#efefef",
  actions: {
    hover: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.26)",
  },
  dark: "#121212",
};
const spacing = (...args: Array<number>) => {
  const SpacingUnit = 8;
  return args.map((value) => `${value * SpacingUnit}px`).join(" ");
};
const theme = {
  palette: {
    ...colors,
  },
  shadows: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  layout: {
    appbar: {
      height: 56,
      padding: spacing(0, 3),
    },
  },
  spacing: spacing,
  shape: {
    borderRadius: 4,
  },
  zIndex: {
    appbar: 1000,
  },
};

export default theme;

export type CustomTheme = typeof theme;
// extends theme...
declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
