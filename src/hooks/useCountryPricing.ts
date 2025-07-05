import { useState, useEffect } from 'react';

interface PricingInfo {
  currency: string;
  originalPrice: number;
  newPrice: number;
  monthlyPayment: number;
  currencySymbol: string;
  countryCode?: string;
  countryFlag?: string;
  countryName?: string;
}

interface CountryPricing {
  [key: string]: PricingInfo;
}

const countryPricing: CountryPricing = {
  // Estados Unidos
  'US': {
    currency: 'USD',
    originalPrice: 76,
    newPrice: 76,
    monthlyPayment: 6.33,
    currencySymbol: '$',
    countryCode: 'US',
    countryFlag: '🇺🇸',
    countryName: 'Estados Unidos'
  },
  // Argentina
  'AR': {
    currency: 'ARS',
    originalPrice: 150000,
    newPrice: 150000,
    monthlyPayment: 12500,
    currencySymbol: '$',
    countryCode: 'AR',
    countryFlag: '🇦🇷',
    countryName: 'Argentina'
  },
  // Brasil
  'BR': {
    currency: 'BRL',
    originalPrice: 1500,
    newPrice: 1500,
    monthlyPayment: 125,
    currencySymbol: 'R$',
    countryCode: 'BR',
    countryFlag: '🇧🇷',
    countryName: 'Brasil'
  },
  // Chile
  'CL': {
    currency: 'CLP',
    originalPrice: 150000,
    newPrice: 150000,
    monthlyPayment: 12500,
    currencySymbol: '$',
    countryCode: 'CL',
    countryFlag: '🇨🇱',
    countryName: 'Chile'
  },
  // Colombia
  'CO': {
    currency: 'COP',
    originalPrice: 1500000,
    newPrice: 1500000,
    monthlyPayment: 125000,
    currencySymbol: '$',
    countryCode: 'CO',
    countryFlag: '🇨🇴',
    countryName: 'Colombia'
  },
  // México
  'MX': {
    currency: 'MXN',
    originalPrice: 4290,
    newPrice: 1502,
    monthlyPayment: 125,
    currencySymbol: '$',
    countryCode: 'MX',
    countryFlag: '🇲🇽',
    countryName: 'México'
  },
  // Perú
  'PE': {
    currency: 'PEN',
    originalPrice: 600,
    newPrice: 600,
    monthlyPayment: 50,
    currencySymbol: 'S/',
    countryCode: 'PE',
    countryFlag: '🇵🇪',
    countryName: 'Perú'
  },
  // Uruguay
  'UY': {
    currency: 'UYU',
    originalPrice: 6000,
    newPrice: 6000,
    monthlyPayment: 500,
    currencySymbol: '$',
    countryCode: 'UY',
    countryFlag: '🇺🇾',
    countryName: 'Uruguay'
  },
  // Venezuela
  'VE': {
    currency: 'USD',
    originalPrice: 76,
    newPrice: 76,
    monthlyPayment: 6.33,
    currencySymbol: '$',
    countryCode: 'VE',
    countryFlag: '🇻🇪',
    countryName: 'Venezuela'
  },
  // Bolivia
  'BO': {
    currency: 'BOB',
    originalPrice: 4290,
    newPrice: 600,
    monthlyPayment: 50,
    currencySymbol: 'Bs',
    countryCode: 'BO',
    countryFlag: '🇧🇴',
    countryName: 'Bolivia'
  }
};

const defaultPricing: PricingInfo = {
  currency: 'MXN',
  originalPrice: 4290,
  newPrice: 1502,
  monthlyPayment: 125,
  currencySymbol: '$',
  countryCode: 'MX',
  countryFlag: '🇲🇽',
  countryName: 'México'
};

export const useCountryPricing = () => {
  const [pricing, setPricing] = useState<PricingInfo>(defaultPricing);
  const [loading, setLoading] = useState(true);
  const [currentCountry, setCurrentCountry] = useState<string>('MX');

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Agregar timeout para evitar que la petición se cuelgue
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 segundos timeout
        
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const country = data.country_code;
        
        if (country && countryPricing[country]) {
          setPricing(countryPricing[country]);
          setCurrentCountry(country);
        } else {
          setPricing(defaultPricing);
          setCurrentCountry('MX');
        }
      } catch (error) {
        console.warn('No se pudo detectar el país, usando precios por defecto:', error instanceof Error ? error.message : 'Unknown error');
        setPricing(defaultPricing);
        setCurrentCountry('MX');
      } finally {
        setLoading(false);
      }
    };

    detectCountry();
  }, []);

  const formatPrice = (price: number, currency: string, symbol: string) => {
    if (currency === 'USD' || currency === 'MXN') {
      return `${symbol}${price.toLocaleString()}`;
    } else if (currency === 'BRL') {
      return `${symbol}${price.toLocaleString('pt-BR')}`;
    } else if (currency === 'ARS' || currency === 'CLP' || currency === 'COP' || currency === 'UYU') {
      return `${symbol}${price.toLocaleString('es-ES')}`;
    } else if (currency === 'PEN') {
      return `${symbol}${price.toLocaleString('es-PE')}`;
    } else if (currency === 'BOB') {
      return `${symbol}${price.toLocaleString('es-BO')}`;
    }
    return `${symbol}${price.toLocaleString()}`;
  };

  const getMonthlyPaymentText = () => {
    const formattedAmount = formatPrice(pricing.monthlyPayment, pricing.currency, pricing.currencySymbol);
    return `12 pagos mensuales de ${formattedAmount} ${pricing.currency}`;
  };

  const getMonthlyPaymentTextWithFlag = () => {
    const formattedAmount = formatPrice(pricing.monthlyPayment, pricing.currency, pricing.currencySymbol);
    return `${pricing.countryFlag} 12 pagos mensuales de ${formattedAmount} ${pricing.currency}`;
  };

  return {
    pricing,
    loading,
    formatPrice,
    getMonthlyPaymentText,
    getMonthlyPaymentTextWithFlag,
    currentCountry
  };
}; 