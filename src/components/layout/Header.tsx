// components/Header.tsx
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import styles from './Header.module.css';
import { Box, Button, Flex, Link as ChakraLink, useColorModeValue, useBreakpointValue, keyframes, Tooltip, Container, Text } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Icons for the "Comprar ahora" button - ensure these return a single element like <span>
const FireIcon = () => <span className={styles.ctaIcon}>🔥</span>;
const ArrowIcon = () => <span className={styles.ctaIcon}>→</span>;

const MotionButton = motion(Button);

// Animación sutil tipo Vogue
const subtleShine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBg = useColorModeValue('blue.500', 'blue.400');
  const buttonHoverBg = useColorModeValue('blue.600', 'blue.500');
  
  // Responsive values
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonPadding = useBreakpointValue({ base: '4', md: '8' });
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const [priceText, setPriceText] = useState('');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 21.9);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    // Detectar el país del visitante
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code;
        
        // Mapeo de países y sus monedas
        const priceMap: { [key: string]: { currency: string, amount: number } } = {
          'AR': { currency: 'ARS', amount: 150000 }, // Argentina
          'BR': { currency: 'BRL', amount: 1500 },   // Brasil
          'CL': { currency: 'CLP', amount: 150000 }, // Chile
          'CO': { currency: 'COP', amount: 1500000 }, // Colombia
          'MX': { currency: 'MXN', amount: 1500 },   // México
          'PE': { currency: 'PEN', amount: 600 },    // Perú
          'UY': { currency: 'UYU', amount: 6000 },   // Uruguay
          'VE': { currency: 'USD', amount: 150 },    // Venezuela
        };

        const defaultPrice = { currency: 'MXN', amount: 1500 };
        const { currency, amount } = priceMap[country] || defaultPrice;

        setPriceText(`12 pagos mensuales de ${currency} ${(amount/12).toFixed(2)}`);
      } catch (error) {
        // En caso de error, mostrar precio en MXN
        setPriceText('12 pagos mensuales de MXN 125.00');
      }
    };

    detectCountry();
  }, []);

  // Memoize the header class to prevent unnecessary recalculations
  const headerClass = useMemo(() => 
    `${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`,
    [isScrolled]
  );

  const showBuyNowButton = router.pathname === '/applicants';

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <Box 
      as="header" 
      position="fixed" 
      w="100vw" 
      left={0}
      top={0}
      zIndex={1000} 
      bg="linear-gradient(120deg, rgba(255,255,255,0.65) 60%, rgba(236, 72, 153, 0.10) 100%)"
      backdropFilter="blur(16px)"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 0 rgba(236, 72, 153, 0.10)"
      borderBottom="1.5px solid rgba(255, 255, 255, 0.25)"
      m={0}
      p={0}
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      <Container maxW="100vw" p={{ base: 2, md: 4 }} m={0}>
        <Flex justify="space-between" align="center" py={2} w="100%">
          <Link href="/" passHref>
            <Box as="a" display="block">
              <Text
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight="extrabold"
                bgGradient="linear(to-r, pink.500, pink.300, purple.400)"
                bgClip="text"
                color="transparent"
                letterSpacing="tight"
                textShadow="0 2px 8px rgba(236,72,153,0.10)"
                _hover={{ filter: 'brightness(1.2)' }}
                transition="all 0.3s"
                fontFamily="'Montserrat', 'Inter', sans-serif"
              >
                Blatam
              </Text>
            </Box>
          </Link>

          <Flex gap={{ base: 2, md: 4 }} align="center" ml="auto">
            {priceText && (
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                color="gray.700"
                fontWeight="medium"
                textAlign="center"
                lineHeight="1.2"
                bg="rgba(255, 255, 255, 0.45)"
                px={3}
                py={1}
                borderRadius="lg"
                boxShadow="0 2px 8px rgba(236,72,153,0.08)"
                border="1px solid rgba(255, 255, 255, 0.25)"
                backdropFilter="blur(4px)"
                style={{ WebkitBackdropFilter: 'blur(4px)' }}
              >
                {priceText}
              </Text>
            )}
            <Link href="https://blatam.org/en/login" passHref>
              <MotionButton
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                bgGradient="linear(to-r, pink.400, pink.500)"
                color="white"
                size="md"
                px={6}
                py={3}
                borderRadius="0"
                fontWeight="400"
                fontSize="0.95rem"
                letterSpacing="0.1em"
                textTransform="none"
                rightIcon={<FiArrowRight size="1em" />}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                _hover={{
                  bgGradient: 'linear(to-r, pink.500, pink.600)',
                  color: 'white',
                  _before: {
                    transform: 'scaleX(1)',
                    opacity: 1,
                  },
                }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                transition="all 0.3s ease"
                role="button"
                aria-label="Acceder a la plataforma de Blatam"
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="pink.300"
                _before={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'white',
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.3s ease',
                  opacity: 0.7,
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  backgroundSize: '200% 100%',
                  animation: `${subtleShine} 3s infinite linear`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                sx={{
                  '&:hover': {
                    '&::after': {
                      opacity: 1,
                    },
                  },
                }}
              >
                Acceder
              </MotionButton>
            </Link>
            {showBuyNowButton && (
              <Link href="https://blatam.gumroad.com/l/ia">
                <span className={styles.buyNowButton}>
                  <FireIcon />
                  Comprar ahora
                  <ArrowIcon />
                </span>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;