// Utility functions for safe theme color access
import { useTheme } from '@chakra-ui/react';

// Fallback gradient colors
const FALLBACK_GRADIENTS = {
  sidebar: {
    start: '#fff3eb',
    end: 'rgba(255, 243, 235, 0)'
  },
  ready: {
    start: '#fff8ec',
    end: '#fee8dc'
  },
  footer: {
    start: '#e07861',
    end: '#e06361'
  },
  newsletter: {
    start: '#fff8ec',
    end: '#fee8dc'
  },
  faq: {
    start: '#ffe5e2',
    end: '#f3d1ee'
  },
  applicants: {
    start: '#ffe9e0',
    end: '#edcdf9'
  },
  about: {
    start: '#e8edff',
    end: '#ffd1e7'
  },
  stats: {
    start: 'rgba(255, 229, 226, 0.3)',
    end: 'rgba(243, 209, 238, 0.3)'
  },
  whoWeSupport: {
    start: '#f0f6fd',
    end: '#ecf2fe'
  },
  howWeSupport: {
    start: '#ffe5e2',
    end: '#f3d1ee'
  }
};

// Hook to safely get gradient colors
export const useGradientColors = (gradientName: keyof typeof FALLBACK_GRADIENTS) => {
  const theme = useTheme();
  
  const gradient = theme?.colors?.brand?.[gradientName]?.bgGradient || FALLBACK_GRADIENTS[gradientName];
  
  return {
    start: gradient.start,
    end: gradient.end,
    linear: (direction: string = 'to-br') => `linear(${direction}, ${gradient.start}, ${gradient.end})`
  };
};

// Function to safely get gradient colors without hook
export const getGradientColors = (gradientName: keyof typeof FALLBACK_GRADIENTS, theme?: any) => {
  const gradient = theme?.colors?.brand?.[gradientName]?.bgGradient || FALLBACK_GRADIENTS[gradientName];
  
  return {
    start: gradient.start,
    end: gradient.end,
    linear: (direction: string = 'to-br') => `linear(${direction}, ${gradient.start}, ${gradient.end})`
  };
};

// Safe gradient string generator
export const getSafeGradient = (gradientName: keyof typeof FALLBACK_GRADIENTS, direction: string = 'to-br') => {
  const gradient = FALLBACK_GRADIENTS[gradientName];
  return `linear(${direction}, ${gradient.start}, ${gradient.end})`;
};
