// components/BlatamBanner.tsx
import { Box, Text, Stack, Flex } from '@chakra-ui/react';

const backgroundUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Puedes cambiar esta URL por una imagen roja abstracta propia

const BlatamBanner = () => (
  <Box
    minH="180px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgImage={`url(${backgroundUrl})`}
    bgSize="cover"
    bgPosition="center"
    position="relative"
    px={2}
    py={4}
    _before={{
      content: '""',
      pos: 'absolute',
      inset: 0,
      bg: 'linear-gradient(120deg, rgba(255,0,60,0.7) 0%, rgba(255,140,0,0.7) 100%)',
      zIndex: 0,
      filter: 'blur(2px)',
    }}
  >
    <Stack
      spacing={2}
      align="center"
      zIndex={1}
      maxW="lg"
      w="full"
    >
      <Flex
        align="center"
        bg="white"
        color="black"
        fontWeight="extrabold"
        fontSize={{ base: "md", md: "lg" }}
        px={3}
        py={1}
        borderRadius="md"
        boxShadow="md"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        <Text as="span" fontSize="lg" mr={2}>🔥</Text>
        ¡SE PRENDIÓ ESTO!
        <Text as="span" fontSize="lg" ml={2}>🔥</Text>
      </Flex>
      <Text
        bg="white"
        color="gray.800"
        px={3}
        py={1}
        borderRadius="md"
        fontSize="sm"
        fontWeight="medium"
        boxShadow="md"
        textAlign="center"
      >
        Acumula descuentos en el catálogo de Hot Sale. ¡Corre antes de que se apague!
      </Text>
    </Stack>
  </Box>
);

export default BlatamBanner;