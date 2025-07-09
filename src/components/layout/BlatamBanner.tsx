// components/BlatamBanner.tsx
import { Box, Flex, Stack, Text, Badge, Button, Container, SimpleGrid, useToken, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Percent } from 'lucide-react';

const MotionBadge = motion(Badge);

const BlatamBanner = () => {
  // Colores de la paleta
  const accent = '#F50087'; // brand.accent
  const heading = '#e44550'; // brand.heading
  const applicantsBgStart = '#ffe9e0'; // brand.applicants.bgGradient.start
  const applicantsBgEnd = '#edcdf9';   // brand.applicants.bgGradient.end
  return (
    <Container maxW="900px" px={{ base: 4, md: 8 }} py={0} mb={8} mt={2}>
      <Box
        bgGradient={`linear(135deg, ${applicantsBgStart}, ${applicantsBgEnd})`}
        borderRadius="3xl"
        boxShadow="0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.2)"
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 8 }}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          borderRadius: 'inherit',
          pointerEvents: 'none'
        }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} alignItems="center" position="relative" zIndex={1}>
          <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }} w="100%">
            <Flex gap={3} mb={1} flexWrap="wrap">
              <MotionBadge
                bg={accent}
                color="#fff"
                fontWeight="900"
                fontSize={{ base: '1em', md: '1.1em' }}
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="0.08em"
                minW="80px"
                textAlign="center"
                boxShadow="0 4px 12px rgba(245,0,135,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 4px 12px rgba(245,0,135,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    "0 6px 20px rgba(245,0,135,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                    "0 4px 12px rgba(245,0,135,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              >
                70% OFF
              </MotionBadge>
              <Badge
                bg="#232264"
                color="#fff"
                fontWeight="900"
                fontSize={{ base: '0.9em', md: '1em' }}
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="0.08em"
                minW="110px"
                textAlign="center"
                boxShadow="0 4px 12px rgba(35,34,100,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
              >
                12 meses sin intereses
              </Badge>
            </Flex>
            <Text
              fontSize={{ base: '1.8rem', md: '2.2rem', lg: '2.6rem' }}
              fontWeight="900"
              color={heading}
              lineHeight={0.95}
              letterSpacing="-0.02em"
              textAlign={{ base: 'center', md: 'left' }}
              mb={1}
              textShadow="0 2px 4px rgba(0,0,0,0.1)"
            >
              Aprovecha hasta <Box as="span" color={accent}>70% OFF</Box> y hasta <Box as="span" color="#232264">12 meses sin intereses</Box>
            </Text>
            <Text
              as="span"
              textTransform="uppercase"
              fontWeight="900"
              fontSize={{ base: '1rem', md: '1.2rem', lg: '1.3rem' }}
              color={accent}
              letterSpacing="0.12em"
              bg="rgba(255,248,236,0.9)"
              px={3}
              py={1}
              borderRadius="xl"
              mt={1}
              textAlign={{ base: 'center', md: 'left' }}
              display="inline-block"
              boxShadow="0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)"
              backdropFilter="blur(8px)"
            >
              BLATAM WEEK
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default BlatamBanner;