// components/BlatamBanner.tsx
import { Box, Text, Stack, Flex } from '@chakra-ui/react';
import { Rocket, Flame } from 'lucide-react';

const BlatamBanner = () => (
  <Box
    bg="linear-gradient(135deg, #FFEB3B 0%, #C5E1A5 100%)"
    py={4}
    px={4}
    position="relative"
    overflow="hidden"
    boxShadow="0 4px 12px rgba(0,0,0,0.1)"
  >
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      maxW="1200px"
      mx="auto"
      gap={4}
    >
      {/* Badge izquierdo */}
      <Flex
        align="center"
        bg="black"
        color="white"
        fontWeight="bold"
        fontSize={{ base: "sm", md: "md" }}
        px={4}
        py={2}
        borderRadius="full"
        boxShadow="0 2px 8px rgba(0,0,0,0.2)"
        minW="fit-content"
      >
        <Rocket className="w-5 h-5 mr-2" />
        BLATAM WEEK
      </Flex>

      {/* Texto principal */}
      <Stack 
        spacing={1} 
        align={{ base: 'center', md: 'flex-start' }}
        flex={1}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text
          color="black"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="bold"
          lineHeight="1.2"
        >
          Aprovecha hasta <Text as="span" color="red.600">70% OFF</Text> y hasta{' '}
          <Text as="span" color="red.600">12 meses sin intereses</Text> en{' '}
          <Text as="span" textTransform="uppercase" fontWeight="extrabold">
            CURSOS y CARRERAS
          </Text>
        </Text>
      </Stack>

      {/* Fecha límite */}
      <Flex
        align="center"
        bg="rgba(0,0,0,0.1)"
        color="black"
        fontWeight="bold"
        fontSize={{ base: "sm", md: "md" }}
        px={4}
        py={2}
        borderRadius="full"
        minW="fit-content"
        backdropFilter="blur(10px)"
      >
        Hasta el 21/08
        <Flame className="w-5 h-5 ml-2" />
      </Flex>
    </Flex>
  </Box>
);

export default BlatamBanner;