import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  breakpoints: ["400px", "48px", "62px", "80px"],
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontSizes: {
    xs: "16px",
    sm: "20px",
    md: "24px",
    lg: "32px",
    xl: "38px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "40px",
    "5xl": "48px",
    "6xl": "64px",
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "24px",
    short: "20px",
    base: "",
    tall: "1.625",
    taller: "2",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700,
  },
  letterSpacings: {
    tighter: "-1,2",
    tight: "-1",
    normal: "-0,8",
    wide: "-0,6",
    wider: "0.05em",
    widest: "0.1em",
  },
  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      500:'#E63888',
    },
    gray: {
      ...theme.colors.gray,
      100: '#ffffff',
      200: 'rgba(255,255,255,0.80)',
      300: 'rgba(0,0,0,0.44)',
      600: 'rgba(0,0,0,0.60)',
      700: 'rgba(0,0,0,0.80)',
    },
  },
}

export default customTheme;
