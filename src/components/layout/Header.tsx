// components/Header.tsx
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import { Box, Button, Flex, keyframes, Container, Text } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { useCountryPricing } from '../../hooks/useCountryPricing';

// Animación sutil tipo Vogue
const subtleShine = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Header: React.FC = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pricing, loading, formatPrice, getMonthlyPaymentTextWithFlag } = useCountryPricing();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setMounted(false);
    };
  }, []);

  // Memoize the header class to prevent unnecessary recalculations
  const headerClass = useMemo(() => 
    `${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`,
    [isScrolled]
  );

  // Generate price text based on country
  const priceText = loading 
    ? 'Cargando...' 
    : getMonthlyPaymentTextWithFlag();

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
              <Flex direction="column" align="center" gap={1}>
                <Image
                  src="/images/blatam.png"
                  alt="Blatam Logo"
                  width={40}
                  height={40}
                  style={{ 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(236,72,153,0.15))'
                  }}
                />
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  bgGradient="linear(to-r, pink.500, pink.300, purple.400)"
                  bgClip="text"
                  color="transparent"
                  letterSpacing="tight"
                  textShadow="0 2px 8px rgba(236,72,153,0.10)"
                  _hover={{ filter: 'brightness(1.2)' }}
                  transition="all 0.3s"
                  fontFamily="'Montserrat', 'Inter', sans-serif"
                  lineHeight="1"
                  mt={-1}
                >
                  blatam
                </Text>
              </Flex>
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
            <Link href="https://blatam.gumroad.com/l/ia" passHref>
              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                bgGradient="linear(to-r, #e91e63, #c2185b, #ad1457)"
                color="white"
                size="md"
                px={6}
                py={3}
                borderRadius="8px"
                fontWeight="500"
                fontSize="0.95rem"
                letterSpacing="0.05em"
                textTransform="none"
                rightIcon={<FiArrowRight size="1em" />}
                boxShadow="0 4px 20px rgba(233, 30, 99, 0.3)"
                _hover={{
                  bgGradient: 'linear(to-r, #c2185b, #ad1457, #880e4f)',
                  color: 'white',
                  boxShadow: "0 6px 30px rgba(233, 30, 99, 0.4)",
                  transform: 'scale(1.02)',
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
                aria-label="Comprar curso de IA en Gumroad"
                position="relative"
                overflow="hidden"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
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
                Comprar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;