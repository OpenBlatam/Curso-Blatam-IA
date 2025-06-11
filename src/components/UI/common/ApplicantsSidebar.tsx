import { Box, Link, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, useDisclosure, Flex, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { CloseIcon } from '@chakra-ui/icons';

import { PageText } from '..';
import { SidebarLink } from '../../../../types';

interface Props {
  sidebarLinks: SidebarLink[];
  sectionsInView: boolean[];
}

export const ApplicantsSidebar: FC<Props> = ({ sidebarLinks, sectionsInView }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeColor = useColorModeValue('brand.accent', 'brand.accent');
  const inactiveColor = useColorModeValue('brand.ready.text', 'brand.ready.text');

  const renderLink = (link: SidebarLink, idx: number, onClick?: () => void) => {
    const isExternal = ['Inicio', 'Cursos', 'Becas'].includes(link.text);
    const isActive = sectionsInView[idx];
    const color = isActive ? activeColor : inactiveColor;

    const linkProps = {
      key: link.href,
      color,
      fontSize: 'input',
      fontWeight: isActive ? 700 : 400,
      _hover: { color: 'brand.accent' },
      onClick,
    };

    if (isExternal) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <PageText {...linkProps}>{link.text}</PageText>
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        as={NextLink}
        href={link.href}
        _hover={{ textDecoration: 'none' }}
        passHref
      >
        <PageText {...linkProps}>{link.text}</PageText>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Drawer */}
      <Box display={{ base: 'block', lg: 'none' }}>
        <IconButton
          aria-label="Abrir menú"
          icon={<Box fontWeight={700} fontSize="1.2em">☰</Box>}
          onClick={onOpen}
          position="fixed"
          top={4}
          left={4}
          zIndex={120}
          bg="white"
          boxShadow="md"
          borderRadius="md"
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader p={4} borderBottomWidth="1px" position="relative">
              <Box fontWeight="bold" fontSize="lg">Menú</Box>
              <IconButton
                aria-label="Cerrar menú"
                icon={
                  <Flex align="center">
                    <CloseIcon boxSize={6} />
                    <Box as="span" ml={2} fontSize="lg" fontWeight="bold">Cerrar</Box>
                  </Flex>
                }
                onClick={onClose}
                variant="ghost"
                size="lg"
                position="absolute"
                top={2}
                right={2}
                color="gray.700"
                _hover={{ bg: 'gray.100' }}
              />
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={4} mt={4}>
                {sidebarLinks.map((link, idx) => renderLink(link, idx, onClose))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Desktop Sidebar */}
      <Box
        position="sticky"
        top={24}
        display={{ base: 'none', lg: 'block' }}
        w="240px"
        h="fit-content"
        mr={12}
      >
        <Stack spacing={4}>
          {sidebarLinks.map((link, idx) => renderLink(link, idx))}
        </Stack>
      </Box>
    </>
  );
};
