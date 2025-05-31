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
import { FC } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
  
  const bgColor = useColorModeValue('background.primary.light', 'background.primary.dark');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const bannerBg = useColorModeValue('background.secondary.light', 'background.secondary.dark');

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
          sx={isOpen ? { transitionDelay: '0.15s', filter: 'brightness(10)' } : undefined}
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
            Aprovecha hasta <strong>70% OFF</strong> y hasta <strong>12 meses sin intereses</strong> en CURSOS
            <Text as="span" mx={2} color="gray.400">|</Text>
            <Text as="span" color="brand.pink">
              🔥 Hasta el 21 de Agosto 🔥
            </Text>
          </Text>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}>
          <Box mt={2}>
            <Menu id='menu-button'>
              {!isOpen && (
                <MenuButton
                  as={IconButton}
                  aria-label='Menu'
                  variant='transparent'
                  icon={<HamburgerIcon h='25px' w='32px' color='gray.200' />}
                  onClick={onOpen}
                />
              )}

              {isOpen && (
                <MenuButton
                  as={IconButton}
                  aria-label='Close menu'
                  variant='transparent'
                  icon={<CloseIcon h='28px' w='28px' color='white' />}
                  onClick={onClose}
                  zIndex={9999}
                />
              )}
            </Menu>
          </Box>

          <Drawer onClose={onClose} isOpen={isOpen} size='full'>
            <DrawerContent>
              <DrawerBody bg="background.primary">
                <Stack h='100%' justifyContent='center' alignItems='center'>
                  <Stack spacing={6}>
                    {NAV_LINKS.map(({ href, text }) => (
                      <Link
                        key={href}
                        as={NextLink}
                        href={href}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <ImportantText color='gray.200' textAlign='center' fontSize='h2'>
                          {text}
                        </ImportantText>
                      </Link>
                    ))}

                    <Center>
                      <Divider borderColor='gray.700' opacity={1} w={72} mt={1} mb={-2} />
                    </Center>

                    <Link
                      as={NextLink}
                      href={ETHEREUM_ORG_URL}
                      isExternal
                      _hover={{ textDecoration: 'none' }}
                    >
                      <ImportantText color='gray.200' textAlign='center'>
                        <BlatamLogoText as="span" display="inline" color='gray.200'>Blatam</BlatamLogoText>.org
                      </ImportantText>
                    </Link>

                    <IconButton
                      aria-label="Toggle color mode"
                      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      onClick={toggleColorMode}
                      variant="ghost"
                      size="lg"
                      color={textColor}
                      _hover={{
                        bg: 'background.secondary.dark',
                      }}
                    />
                  </Stack>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

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
