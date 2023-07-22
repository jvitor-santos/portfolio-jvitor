import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,

  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        scrollBehavior: 'smooth',
      },
    },
  },

  colors: {
    primary: {
      darkest: '#170f2e',
      darker: '#312163',
      dark: '#5531a7',
      default: '#9251f7',
      light: '#c696fc',
      lighter: '#efe2f9',
      lightest: '#f8f2fc',
    },

    secondary: {
      darker: '#1f2347',
      dark: '#2a337e',
      default: '#516cf7',
      light: '#95aafb',
      lighter: '#e1e7fe',
      lightest: '#f5f7ff',
    },

    gray: {
      darkest: '#232339',
      darker: '#2E2E48',
      dark: '#47516B',
      default: '#79819A',
      light: '#ACB1C3',
      lighter: '#D9DFE8',
      lightest: '#E2E6EE',
      lightest2: '#F7F9FC',
    },

    status: {
      info: '#22C3F1',
      successLight: '#E7FAE5',
      success: '#4AC06F',
      successDark: '#1F5C43',
      warningLight: '#FEFCBF',
      warning: '#F4CE10',
      warningDark: '#857129',
    },
  },

  fonts: {
    heading: 'Outfit, sans-serif',
    body: 'DM Sans, sans-serif',
  },
})
