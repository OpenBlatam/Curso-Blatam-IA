import { Box, Link, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton, useDisclosure, Flex, useColorModeValue } from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
import NextLink from 'next/link';
import { X } from 'lucide-react';

import { PageText } from '..';
import { SidebarLink } from '../../../types';

interface Props {
  sidebarLinks: SidebarLink[];
  sectionsInView: boolean[];
}

export const ApplicantsSidebar: FC<Props> = ({ sidebarLinks, sectionsInView }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeColor = useColorModeValue('brand.accent', 'brand.accent');
  const inactiveColor = useColorModeValue('brand.ready.text', 'brand.ready.text');
  const drawerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);

  // Swipe functionality
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer || !isOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
      currentX.current = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX.current) return;
      
      currentX.current = e.touches[0].clientX - startX.current;
      
      // Only allow swipe to close if swiping left (negative value)
      if (currentX.current < 0) {
        e.preventDefault();
        const translateX = Math.max(currentX.current, -300); // Max swipe distance
        drawer.style.transform = `translateX(${translateX}px)`;
        drawer.style.transition = 'none';
      }
    };

    const handleTouchEnd = () => {
      if (!startX.current) return;
      
      drawer.style.transition = 'transform 0.3s ease-out';
      
      // If swiped more than 100px to the left, close the drawer
      if (currentX.current < -100) {
        drawer.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          onClose();
          drawer.style.transform = '';
        }, 300);
      } else {
        // Reset position
        drawer.style.transform = '';
      }
      
      startX.current = 0;
      currentX.current = 0;
    };

    drawer.addEventListener('touchstart', handleTouchStart, { passive: false });
    drawer.addEventListener('touchmove', handleTouchMove, { passive: false });
    drawer.addEventListener('touchend', handleTouchEnd);

    return () => {
      drawer.removeEventListener('touchstart', handleTouchStart);
      drawer.removeEventListener('touchmove', handleTouchMove);
      drawer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, onClose]);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const renderLink = (link: SidebarLink, idx: number, onClick?: () => void) => {
    const isExternal = ['Inicio', 'Cursos', 'Becas'].includes(link.text);
    const isInternalSection = link.href.includes('#');
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

    if (isInternalSection) {
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
          boxShadow="lg"
          borderRadius="lg"
          _hover={{
            bg: 'gray.50',
            transform: 'scale(1.05)',
            boxShadow: 'xl'
          }}
          transition="all 0.2s ease"
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay bg="rgba(0, 0, 0, 0.6)" backdropFilter="blur(4px)" />
          <DrawerContent 
            ref={drawerRef} 
            maxW="280px" 
            bgGradient="linear(to-b, #667eea 0%, #764ba2 100%)"
            boxShadow="2xl"
            borderRightRadius="xl"
          >
            <DrawerHeader 
              p={6} 
              borderBottomWidth="2px" 
              borderColor="rgba(255, 255, 255, 0.2)"
              position="relative"
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
            >
              <Box fontWeight="bold" fontSize="xl" color="white" textShadow="0 2px 4px rgba(0,0,0,0.3)">
                Navegación
              </Box>
              <IconButton
                aria-label="Cerrar menú"
                icon={<X size={20} />}
                onClick={onClose}
                size="lg"
                position="absolute"
                top={4}
                right={4}
                variant="ghost"
                color="white"
                bg="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(10px)"
                boxShadow="md"
                _hover={{ 
                  bg: 'rgba(255, 255, 255, 0.3)', 
                  color: 'white',
                  transform: 'scale(1.1)',
                  boxShadow: 'lg'
                }}
                _active={{ 
                  bg: 'rgba(255, 255, 255, 0.4)',
                  transform: 'scale(0.95)'
                }}
                transition="all 0.3s ease"
                borderRadius="full"
                w="40px"
                h="40px"
              />
            </DrawerHeader>
            <DrawerBody p={6} bg="transparent">
              <Stack spacing={6} mt={2}>
                {sidebarLinks.map((link, idx) => (
                  <Box 
                    key={link.href}
                    bg="rgba(255, 255, 255, 0.1)"
                    p={3}
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    _hover={{
                      bg: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateX(8px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                    transition="all 0.3s ease"
                  >
                    {renderLink(link, idx, onClose)}
                  </Box>
                ))}
              </Stack>
              
              {/* Swipe indicator */}
              <Box 
                position="absolute" 
                bottom={4} 
                left="50%" 
                transform="translateX(-50%)"
                textAlign="center"
                color="rgba(255, 255, 255, 0.8)"
                fontSize="xs"
                bg="rgba(0, 0, 0, 0.3)"
                px={3}
                py={1}
                borderRadius="full"
                backdropFilter="blur(10px)"
              >
                ← Desliza para cerrar
              </Box>
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
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
      >
        <Stack spacing={4}>
          {sidebarLinks.map((link, idx) => (
            <Box
              key={link.href}
              p={3}
              borderRadius="lg"
              bg="gray.50"
              _hover={{
                bg: 'blue.50',
                transform: 'translateX(4px)',
                boxShadow: 'md'
              }}
              transition="all 0.3s ease"
            >
              {renderLink(link, idx)}
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};
