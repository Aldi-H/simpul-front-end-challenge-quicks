"use client";

import { createTheme } from "@mui/material/styles";

// custom pallete module
declare module "@mui/material/styles" {
  interface Palette {
    salmon: Palette;

    // Primary COlor
    primaryColorBlur: Palette;
    primaryCharcoalGray: Palette;
    primarySilverGray: Palette;
    primaryLightGray: Palette;

    // Indicator Color
    indicatorSunsetOrange: Palette;
    indicatorAmethystPurple: Palette;
    indicatorCranberryRed: Palette;
    indicatorHoneyYelow: Palette;

    // Chat Color
    chatPeachCream: Palette;
    chatBurntOrange: Palette;
    chatBabyBlue: Palette;
    chatLavenderPurple: Palette;
    chatSeafoamGreen: Palette;
    chatForestGreen: Palette;

    // Sticker COlor
    stickerPaleBlue: Palette;
    stickerCreamsicleOrange: Palette;
    stickerPeachBlush: Palette;
    stickerDustyBlue: Palette;
    stickerMintGreen: Palette;
    stickerLightBlueGray: Palette;
    stickerRosePink: Palette;
  }

  interface PaletteOptions {
    salmon?: PaletteOptions;

    // Primary Color
    primarySkyBlue?: PaletteOptions;
    primaryCharcoalGray?: PaletteOptions;
    primarySilverGray?: PaletteOptions;
    primaryLightGray?: PaletteOptions;

    // Indicator Color
    indicatorSunsetOrange?: PaletteOptions;
    indicatorAmethystPurple?: PaletteOptions;
    indicatorCranberryRed?: PaletteOptions;
    indicatorHoneyYelow?: PaletteOptions;

    // Chat Color
    chatPeachCream?: PaletteOptions;
    chatBurntOrange?: PaletteOptions;
    chatBabyBlue?: PaletteOptions;
    chatLavenderPurple?: PaletteOptions;
    chatSeafoamGreen?: PaletteOptions;
    chatForestGreen?: PaletteOptions;

    // Sticker COlor
    stickerPaleBlue?: PaletteOptions;
    stickerCreamsicleOrange?: PaletteOptions;
    stickerPeachBlush?: PaletteOptions;
    stickerDustyBlue?: PaletteOptions;
    stickerMintGreen?: PaletteOptions;
    stickerLightBlueGray?: PaletteOptions;
    stickerRosePink?: PaletteOptions;
  }
}

// MaterialUI Custom Props
declare module "@mui/material" {
  // SvgIcon Props
  interface SvgIconPropsColorOverrides {
    salmon: true;

    // Primary Color
    primarySkyBlue: true;
    primaryCharcoalGray: true;
    primarySilverGray: true;
    primaryLightGray: true;

    // Indicator Color
    indicatorSunsetOrange: true;
    indicatorAmethystPurple: true;
    indicatorCranberryRed: true;
    indicatorHoneyYelow: true;

    // Chat Color
    chatPeachCream: true;
    chatBurntOrange: true;
    chatBabyBlue: true;
    chatLavenderPurple: true;
    chatSeafoamGreen: true;
    chatForestGreen: true;

    // Sticker COlor
    stickerPaleBlue: true;
    stickerCreamsicleOrange: true;
    stickerPeachBlush: true;
    stickerDustyBlue: true;
    stickerMintGreen: true;
    stickerLightBlueGray: true;
    stickerRosePink: true;
  }

  // FabProps
  interface FabPropsVariantOverrides {
    quicks: true;
  }

  interface FabPropsColorOverrides {
    salmon: true;

    // Primary Color
    primarySkyBlue: true;
    primaryCharcoalGray: true;
    primarySilverGray: true;
    primaryLightGray: true;

    // Indicator Color
    indicatorSunsetOrange: true;
    indicatorAmethystPurple: true;
    indicatorCranberryRed: true;
    indicatorHoneyYelow: true;

    // Chat Color
    chatPeachCream: true;
    chatBurntOrange: true;
    chatBabyBlue: true;
    chatLavenderPurple: true;
    chatSeafoamGreen: true;
    chatForestGreen: true;

    // Sticker COlor
    stickerPaleBlue: true;
    stickerCreamsicleOrange: true;
    stickerPeachBlush: true;
    stickerDustyBlue: true;
    stickerMintGreen: true;
    stickerLightBlueGray: true;
    stickerRosePink: true;
  }
}

// Custom Theme
let theme = createTheme({
  typography: {
    fontFamily: ["lato"].join(","),
  },
  components: {
    MuiFab: {
      variants: [
        {
          props: { variant: "quicks" },
          style: {
            width: 68,
            height: 68,
          },
        },
      ],
    },
  },
});

// Custom Pallete
theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#2F80ED",
      light: "#E0E0E0",
      dark: "#4F4F4F",
      contrasText: "#828282",
    },
    salmon: theme.palette.augmentColor({
      color: {
        main: "#FF5733",
      },
      name: "salmon",
    }),

    // Primary Color
    primarySkyBlue: theme.palette.augmentColor({
      color: {
        main: "#2F80ED",
      },
      name: "primarySkyBlue",
    }),
    primaryCharcoalGray: theme.palette.augmentColor({
      color: {
        main: "#4F4F4F",
      },
      name: "primaryCharcoalGray",
    }),
    primarySilverGray: theme.palette.augmentColor({
      color: {
        main: "#828282",
      },
      name: "primarySilverGray",
    }),
    primaryLightGray: theme.palette.augmentColor({
      color: {
        main: "#E0E0E0",
      },
      name: "primaryLightGray",
    }),

    // Indicator Color
    indicatorSunsetOrange: theme.palette.augmentColor({
      color: {
        main: "#F8B76B",
      },
      name: "indicatorSunsetOrange",
    }),
    indicatorAmethystPurple: theme.palette.augmentColor({
      color: {
        main: "#8785FF",
      },
      name: "indicatorAmethystPurple",
    }),
    indicatorCranberryRed: theme.palette.augmentColor({
      color: {
        main: "#EB5757",
      },
      name: "indicatorCranberryRed",
    }),
    indicatorHoneyYelow: theme.palette.augmentColor({
      color: {
        main: "#F2C94C",
      },
      name: "indicatorHoneyYelow",
    }),

    // Chat Color
    chatPeachCream: theme.palette.augmentColor({
      color: {
        main: "#FCEED3",
      },
      name: "chatPeachCream",
    }),
    chatBurntOrange: theme.palette.augmentColor({
      color: {
        main: "#E5A443",
      },
      name: "chatBurntOrange",
    }),
    chatBabyBlue: theme.palette.augmentColor({
      color: {
        main: "#EEDCFF",
      },
      name: "chatBabyBlue",
    }),
    chatLavenderPurple: theme.palette.augmentColor({
      color: {
        main: "#9B51E0",
      },
      name: "chatLavenderPurple",
    }),
    chatSeafoamGreen: theme.palette.augmentColor({
      color: {
        main: "#D2F2EA",
      },
      name: "chatSeafoamGreen",
    }),
    chatForestGreen: theme.palette.augmentColor({
      color: {
        main: "#43B78D",
      },
      name: "chatForestGreen",
    }),

    // Sticker Color
    stickerPaleBlue: theme.palette.augmentColor({
      color: {
        main: "#E9F3FF",
      },
      name: "stickerPaleBlue",
    }),
    stickerCreamsicleOrange: theme.palette.augmentColor({
      color: {
        main: "#FDCFA4",
      },
      name: "stickerCreamsicleOrange",
    }),
    stickerPeachBlush: theme.palette.augmentColor({
      color: {
        main: "#F9E9C3",
      },
      name: "stickerPeachBlush",
    }),
    stickerDustyBlue: theme.palette.augmentColor({
      color: {
        main: "#AFEBDB",
      },
      name: "stickerDustyBlue",
    }),
    stickerMintGreen: theme.palette.augmentColor({
      color: {
        main: "#CBF1C2",
      },
      name: "stickerMintGreen",
    }),
    stickerLightBlueGray: theme.palette.augmentColor({
      color: {
        main: "#CFCEF9",
      },
      name: "stickerLightBlueGray",
    }),
    stickerRosePink: theme.palette.augmentColor({
      color: {
        main: "#F9E0FD",
      },
      name: "stickerRosePink",
    }),
  },
});

export default theme;
