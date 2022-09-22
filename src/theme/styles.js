import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  fontColor: {
    primary: "#006E7D",
    darkMode: "#FFF",
    secondary: "#C2C2C2",
  },
  layout: {
    containerWidth: "1150px",
  },
  navy: {
    700: "#E2EAE8",
    negative700: "#8E7F69",
    800: "#153e75",
    900: "#1a365d",
    1000: "#0E4DA4",
  },
  highlight: {
    navy: "#0591A3",
    negativeNavy: "#FA6E5C",
    emmerald: "#498D84",
    negativeEmmerald: "#B6727B",
    sky: "#4FCCDB",
    negativeSky: "#b03324",
  },
};

const customTheme = {
  colors,
  components: {
    Text: {
      baseStyle: (props) => ({}),
      variants: {
        primary: (props) => ({
          color: mode(
            colors.fontColor.primary,
            colors.fontColor.darkMode
          )(props),
        }),
        secondary: (props) => ({
          color: mode(
            colors.fontColor.secondary,
            colors.fontColor.darkMode
          )(props),
        }),
      },
    },
  },

  styles: {
    global: (props) => ({
      // Optionally set global CSS styles
      body: {},
    }),
  },
};

export default extendTheme(customTheme);
