import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, fonts, fontSizes, shadows, sizes } from './foundations';
import { Checkbox, Heading, MenuButton, Radio } from './components';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = {
  config,
  breakpoints,
  colors: {
    ...colors,
    brand: {
      ...colors.brand,
      pink: '#C2185B', // Luxury pink
    },
    background: {
      primary: {
        light: 'white',
        dark: '#0A0A0A', // Rich, deep black for main background
      },
      secondary: {
        light: 'gray.50',
        dark: '#121212', // Slightly lighter black for components
      }
    },
    components: {
      dark: {
        bg: '#121212',
        border: '#1E1E1E',
        text: '#FFFFFF',
        muted: '#666666',
      }
    }
  },
  fonts,
  fontSizes,
  shadows: {
    ...shadows,
    dark: {
      sm: '0 2px 4px rgba(0, 0, 0, 0.5)',
      md: '0 4px 8px rgba(0, 0, 0, 0.6)',
      lg: '0 8px 16px rgba(0, 0, 0, 0.7)',
      xl: '0 12px 24px rgba(0, 0, 0, 0.8)',
      '2xl': '0 16px 32px rgba(0, 0, 0, 0.9)',
      inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
      outline: '0 0 0 3px rgba(255, 255, 255, 0.05)',
      luxury: '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    }
  },
  sizes,
  components: {
    Checkbox,
    Heading,
    MenuButton,
    Radio,
    Box: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'background.primary.dark' : 'background.primary.light',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      }),
    },
    Container: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'background.primary.dark' : 'background.primary.light',
      }),
    },
    Card: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'background.secondary.dark' : 'background.secondary.light',
        boxShadow: props.colorMode === 'dark' ? 'dark.luxury' : 'md',
        borderRadius: 'lg',
        transition: 'all 0.3s ease-in-out',
        border: props.colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: props.colorMode === 'dark' ? 'dark.xl' : 'lg',
          border: props.colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }
      }),
    },
    Button: {
      baseStyle: (props: any) => ({
        boxShadow: props.colorMode === 'dark' ? 'dark.luxury' : 'sm',
        transition: 'all 0.3s ease-in-out',
        border: props.colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        _hover: {
          transform: 'translateY(-1px)',
          boxShadow: props.colorMode === 'dark' ? 'dark.md' : 'md',
          border: props.colorMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }
      }),
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        transition: 'background-color 0.3s ease-in-out',
        bg: props.colorMode === 'dark' ? 'background.primary.dark' : 'background.primary.light',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        backgroundImage: props.colorMode === 'dark' ? 'linear-gradient(to bottom, #0A0A0A, #121212)' : 'none',
      },
      '*': {
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
      }
    })
  }
};

const theme = extendTheme(overrides);

export default theme;
