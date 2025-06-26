import { Box, Text, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const TopPromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100); // Hide after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      bg="linear-gradient(135deg, #FFEB3B 0%, #C5E1A5 100%)"
      py={{ base: 0.5, sm: 1, md: 1 }}
      px={{ base: 1, sm: 2, md: 3 }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1001}
      boxShadow="0 1px 4px rgba(0,0,0,0.1)"
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease"
      minH={{ base: "28px", sm: "32px", md: "36px" }}
    >
    <Flex
      direction={{ base: 'row', md: 'row' }}
      align="center"
      justify="space-between"
      maxW="100%"
      mx="auto"
      gap={{ base: 0.5, sm: 1, md: 2 }}
      fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
      wrap="nowrap"
      overflow="hidden"
    >
      {/* Badge izquierdo */}
      <Flex
        align="center"
        bg="black"
        color="white"
        fontWeight="bold"
        fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
        px={{ base: 1.5, sm: 2, md: 3 }}
        py={{ base: 0.5, sm: 0.5, md: 1 }}
        borderRadius="full"
        boxShadow="0 1px 4px rgba(0,0,0,0.2)"
        minW="fit-content"
        flexShrink={0}
      >
        <Text as="span" fontSize={{ base: "2xs", sm: "xs", md: "sm" }} mr={{ base: 0.5, sm: 1 }}>🚀</Text>
        <Text display={{ base: "none", sm: "inline" }}>BLATAM WEEK</Text>
        <Text display={{ base: "inline", sm: "none" }}>BLATAM</Text>
      </Flex>

      {/* Texto principal */}
      <Text
        color="black"
        fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
        fontWeight="bold"
        lineHeight={{ base: "1.0", sm: "1.1", md: "1.2" }}
        textAlign="center"
        flex={1}
        px={{ base: 1, sm: 2 }}
        noOfLines={1}
      >
        <Text as="span" display={{ base: "none", sm: "inline" }}>
          Aprovecha hasta <Text as="span" color="red.600">70% OFF</Text> y hasta{' '}
        </Text>
        <Text as="span" color="red.600">
          {/* Móvil muy pequeño */}
          <Text as="span" display={{ base: "inline", sm: "none" }}>70% OFF</Text>
          {/* Pantallas normales */}
          <Text as="span" display={{ base: "none", sm: "inline" }}>12 meses sin intereses</Text>
        </Text>
        <Text as="span" display={{ base: "none", sm: "inline" }}> en </Text>
        <Text as="span" textTransform="uppercase" fontWeight="extrabold">
          <Text as="span" display={{ base: "inline", sm: "none" }}>CURSOS</Text>
          <Text as="span" display={{ base: "none", sm: "inline" }}>CURSOS y CARRERAS</Text>
        </Text>
      </Text>

      {/* Fecha límite */}
      <Flex
        align="center"
        bg="rgba(0,0,0,0.1)"
        color="black"
        fontWeight="bold"
        fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
        px={{ base: 1.5, sm: 2, md: 3 }}
        py={{ base: 0.5, sm: 0.5, md: 1 }}
        borderRadius="full"
        minW="fit-content"
        backdropFilter="blur(10px)"
        flexShrink={0}
      >
        <Text display={{ base: "none", sm: "inline" }}>Hasta el </Text>
        <Text display={{ base: "inline", sm: "none" }}>31/12</Text>
        <Text display={{ base: "none", sm: "inline" }}>31/12</Text>
        <Text as="span" fontSize={{ base: "2xs", sm: "xs", md: "sm" }} ml={{ base: 0.5, sm: 1 }}>🔥</Text>
      </Flex>
          </Flex>
    </Box>
  );
};

export default TopPromoBanner; 