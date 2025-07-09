import { Box, Center, Divider, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id='footer'
      bgGradient='linear(to-br, #0f0e1c 10%, #1a1a2e 100%)'
      color="white"
      py={{ base: 10, md: 12 }}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        w="100%"
      >
        <Text fontSize="md" mb={{ base: 4, md: 0 }}>
          © {currentYear} Blatam. Todos los derechos reservados.
        </Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://twitter.com" isExternal color="white">Twitter</Link>
          <Link href="https://facebook.com" isExternal color="white">Facebook</Link>
          <Link href="https://blatam.org" isExternal color="white">Sitio web</Link>
        </Stack>
      </Flex>
    </Box>
  );
}; 