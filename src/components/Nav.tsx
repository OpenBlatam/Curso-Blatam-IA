import {
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  IconButton,
  Link,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  Stack,
  UnorderedList,
  useDisclosure,
  Text,
  useColorMode,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Star, X } from 'lucide-react';

import { ImportantText } from './UI/headings';
import { CloseIcon, HamburgerIcon, NavLinkIcon } from './UI/icons';
import BlatamLogoText from '@/components/UI/BlatamLogoText';

import { selectedLink } from '../utils';

import logoSVG from '../../public/images/blatam.png';

import { ESP_BLOG_URL, ETHEREUM_ORG_URL, HOME_URL, NAV_LINKS } from '../constants';

interface Props {
  windowSize: {
    width: number;
    height: number;
  };
}

export const Nav: FC<Props> = ({ windowSize }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const drawerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const currentX = useRef<number>(0);
  
  const bgColor = useColorModeValue('background.primary.light', 'background.primary.dark');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const bannerBg = useColorModeValue('background.secondary.light', 'background.secondary.dark');

  // Swipe functionality for mobile menu
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
        const translateX = Math.max(currentX.current, -300);
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

  return (
    <header>
      <Flex 
        justifyContent='space-between' 
        alignItems="center"
        bg={bgColor}
        py={4}
        px={{ base: 4, md: 8 }}
        boxShadow="sm"
        position="sticky"
        top={0}
        zIndex={1000}
        transition="background-color 0.3s ease-in-out"
      >
        <Box
          onClick={isOpen ? undefined : () => router.push(HOME_URL)}
          cursor={isOpen ? 'default' : 'pointer'}
          zIndex={9999}
        >
          <Image src={logoSVG} alt='Blatam logo' height={85} width={100} />
        </Box>

        {/* Promotional Banner */}
        <Flex 
          display={{ base: 'none', md: 'flex' }} 
          alignItems="center" 
          flex={1}
          mx={8}
          justifyContent="center"
        >
          <Text 
            fontSize="sm" 
            fontWeight="medium"
            bg={bannerBg}
            px={4}
            py={2}
            borderRadius="full"
            color={textColor}
            transition="all 0.3s ease-in-out"
          >
            <strong>70% OFF</strong> en cursos
            <Text as="span" mx={2} color="gray.400">|</Text>
            <Text as="span" color="brand.pink" display="flex" alignItems="center" gap={1}>
              🔥 Hasta el 21/08 🔥
            </Text>
          </Text>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}>
          <Button
            variant="ghost"
            onClick={onOpen}
            p={2}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          >
            <HamburgerIcon w={6} h={6} />
          </Button>
        </Box>

        <Drawer onClose={onClose} isOpen={isOpen} size='full'>
          <DrawerContent ref={drawerRef} bgGradient="linear(to-br, #667eea 0%, #764ba2 50%, #f093fb 100%)" position="relative">
            {/* Close button */}
            <IconButton
              aria-label="Cerrar menú"
              icon={<X size={24} />}
              onClick={onClose}
              position="absolute"
              top={6}
              right={6}
              zIndex={10}
              variant="ghost"
              color="white"
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
              _hover={{ 
                bg: 'rgba(255, 255, 255, 0.3)', 
                color: 'white',
                transform: 'scale(1.1)'
              }}
              _active={{ 
                bg: 'rgba(255, 255, 255, 0.4)',
                transform: 'scale(0.95)'
              }}
              transition="all 0.3s ease"
              borderRadius="full"
              w="48px"
              h="48px"
              boxShadow="lg"
            />
            
            <DrawerBody bg="transparent">
              <Stack h='100%' justifyContent='center' alignItems='center' pt={16}>
                <Stack spacing={8}>
                  {NAV_LINKS.map(({ href, text }) => (
                    <Link
                      key={href}
                      as={NextLink}
                      href={href}
                      _hover={{ textDecoration: 'none' }}
                      onClick={onClose}
                    >
                      <Box
                        bg="rgba(255, 255, 255, 0.1)"
                        p={4}
                        borderRadius="xl"
                        backdropFilter="blur(10px)"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.2)"
                        _hover={{
                          bg: 'rgba(255, 255, 255, 0.2)',
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                        }}
                        transition="all 0.3s ease"
                      >
                        <ImportantText 
                          color='white' 
                          textAlign='center' 
                          fontSize='h2'
                          textShadow="0 2px 4px rgba(0,0,0,0.3)"
                          _hover={{
                            color: 'white'
                          }}
                        >
                          {text}
                        </ImportantText>
                      </Box>
                    </Link>
                  ))}

                  <Center>
                    <Divider borderColor='rgba(255, 255, 255, 0.3)' opacity={1} w={72} mt={1} mb={-2} />
                  </Center>

                  <Link
                    as={NextLink}
                    href={ETHEREUM_ORG_URL}
                    isExternal
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.1)"
                      p={3}
                      borderRadius="lg"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      _hover={{
                        bg: 'rgba(255, 255, 255, 0.2)',
                        transform: 'scale(1.02)'
                      }}
                      transition="all 0.3s ease"
                    >
                      <ImportantText color='white' textAlign='center' textShadow="0 1px 2px rgba(0,0,0,0.3)">
                        <BlatamLogoText as="span" display="inline" color='white'>Blatam</BlatamLogoText>.org
                      </ImportantText>
                    </Box>
                  </Link>

                  <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    size="lg"
                    color="white"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    _hover={{
                      bg: 'rgba(255, 255, 255, 0.2)',
                      transform: 'scale(1.1)'
                    }}
                    transition="all 0.3s ease"
                    borderRadius="full"
                  />
                </Stack>
                
                {/* Swipe indicator */}
                <Box 
                  position="absolute" 
                  bottom={8} 
                  left="50%" 
                  transform="translateX(-50%)"
                  textAlign="center"
                  color="rgba(255, 255, 255, 0.8)"
                  fontSize="sm"
                  bg="rgba(0, 0, 0, 0.3)"
                  px={4}
                  py={2}
                  borderRadius="full"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                >
                  ← Desliza para cerrar
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex display={{ base: 'none', md: 'flex' }} zIndex={1} alignItems="center">
          <UnorderedList display="flex" alignItems="center" m={0}>
            {NAV_LINKS.map((nav, idx) => (
              <ListItem 
                key={nav.text} 
                display='inline' 
                mx={2}
                sx={{
                  ...(selectedLink(router.pathname, nav.href) && {
                    borderLeft: '4px solid',
                    borderLeftColor: 'brand.accent',
                    paddingLeft: '8px',
                  }),
                }}
              >
                {idx > 0 && <ListIcon as={NavLinkIcon} display='inline-block' pb={1} />}
                <Link
                  as={NextLink}
                  href={nav.href}
                  target={nav.href === ESP_BLOG_URL ? '_blank' : '_self'}
                  rel={nav.href === ESP_BLOG_URL ? 'noopener noreferrer' : undefined}
                  _hover={{ textDecoration: 'none' }}
                >
                  <ImportantText
                    color={textColor}
                    display='inline'
                    transition="color 0.3s ease-in-out"
                  >
                    {nav.text}
                  </ImportantText>
                </Link>
              </ListItem>
            ))}
          </UnorderedList>

          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="lg"
            ml={4}
            color={textColor}
            _hover={{
              bg: 'background.secondary.dark',
            }}
          />
        </Flex>
      </Flex>
    </header>
  );
};
