import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from "@taiwan-ig-ui/tokens";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  }
})