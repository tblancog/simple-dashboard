// import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";
// let styles;
// styles = {
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: true,
//   },
//   colors: {
//     // primary: "#006E7D",
//     primary: mode("red", "blue"),
//     secondary: "#C2C2C2",
//     highlight: {
//       navy: "#0591A3",
//       emmerald: "#498D84",
//       sky: "#4FCCDB",
//     },
//   },
//   typography: {
//     primary: "#263238",
//     secondary: "#006E7D",
//   },
//   navy: {
//     700: "#E2EAE8",
//     800: "#153e75",
//     900: "#1a365d",
//     1000: "#0E4DA4",
//   },
// };
// export default extendTheme(styles);

// // 1. Import `extendTheme`
// import { extendTheme, mode, theme as baseTheme } from "@chakra-ui/react"

// // 2. Objects can be created inside the extendTheme function or elsewhere and imported
// const colors = {
//   primaryFontColor: {
//     lightMode: baseTheme.gray["700"],
//     darkMode: baseTheme.gray["200"],
//   },
//   secondaryFontColor: {
//     lightMode: baseTheme.gray["600"],
//     darkMode: baseTheme.gray["400"],
//   },
//   plainOldBlue: "blue"
// }

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Objects can be created inside the extendTheme function or elsewhere and imported
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
  // primaryFontColor: {
  //   // lightMode: baseTheme.gray["700"],
  //   // darkMode: baseTheme.gray["200"],
  //   lightMode: "blue",
  //   darkMode: "red",
  // },
  secondaryFontColor: {
    // lightMode: baseTheme.gray["600"],
    // darkMode: baseTheme.gray["400"],
    lightMode: "violet",
    darkMode: "orange",
  },
  plainOldBlue: "blue",
};

// 3. Call `extendTheme` and pass your custom values
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
    InfoCard: {
      Flex: {
        baseStyle: (props) => ({
          backgroundColor: "red",
        }),
      },
    },
  },

  styles: {
    global: (props) => ({
      // Optionally set global CSS styles
      body: {
        // color: mode(colors.links.primary, colors.links.darkMode)(props),
      },
    }),
  },
};

export default extendTheme(customTheme);
