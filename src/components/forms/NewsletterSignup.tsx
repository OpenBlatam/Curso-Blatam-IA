import React, { useState, useCallback, useMemo } from 'react';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { EmailIcon } from '@chakra-ui/icons';

import { ImportantText } from '../UI/headings';
import { PageText } from '../UI/text';

import { api } from './api';
import { NewsletterFormData } from '../../types';

import { TOAST_OPTIONS } from '../../constants';

// Componente de loading optimizado
const NewsletterLoading = memo(() => (
  <Box
    bg="purple.50"
    p={{ base: 4, md: 8 }}
    borderRadius="xl"
    h="200px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text color="gray.500">Cargando newsletter...</Text>
  </Box>
));

NewsletterLoading.displayName = 'NewsletterLoading';

// Botón optimizado con memo
const SubmitButton = memo<{
  isValid: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}>(({ isValid, isHovered, onMouseEnter, onMouseLeave }) => (
  <Center>
    <Box position="relative">
      <Box
        backgroundColor="brand.button.shadow"
        h="56px"
        w="148px"
        position="absolute"
        transform={isHovered ? 'translate(3px, 3px)' : 'translate(6px, 6px)'}
        transition="transform 0.2s ease"
        opacity={!isValid ? 0 : 1}
      />

      <Button
        backgroundColor="brand.accent"
        w="148px"
        py={7}
        borderRadius={0}
        justifyContent="center"
        alignItems="center"
        type="submit"
        isDisabled={!isValid}
        _hover={{ 
          bg: 'brand.hover',
          transform: 'translate(-1.5px, -1.5px)'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        pointerEvents={!isValid ? 'none' : 'auto'}
        transition="all 0.2s ease"
      >
        <ImportantText color="white">SUSCRIBIRME</ImportantText>
      </Button>
    </Box>
  </Center>
));

SubmitButton.displayName = 'SubmitButton';

export const NewsletterSignup: FC = memo(() => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset
  } = useForm<NewsletterFormData>({
    mode: 'onChange'
  });
  
  const toast = useToast();
  const [isHovered, setIsHovered] = useState(false);

  // Memoizar el handler de submit para evitar re-renders
  const onSubmit = useCallback(async (data: NewsletterFormData) => {
    if (errors.email) {
      toast({
        ...TOAST_OPTIONS,
        title: 'El correo electrónico no es válido, inténtalo de nuevo.',
        status: 'error'
      });
      reset();
      return;
    }

    try {
      const res = await api.newsletter.submit(data);
      
      if (res.ok) {
        toast({
          ...TOAST_OPTIONS,
          title: '¡Gracias por registrarte!',
          status: 'success'
        });
        reset();
      } else {
        const errorText = await res.text();
        
        if (res.status >= 400 && res.status <= 499) {
          toast({
            ...TOAST_OPTIONS,
            title: errorText,
            status: 'error'
          });
        } else {
          throw new Error(errorText);
        }
        reset();
      }
    } catch (err: any) {
      toast({
        ...TOAST_OPTIONS,
        title: 'Algo salió mal durante el envío, inténtalo de nuevo.',
        status: 'error'
      });
      console.error('Newsletter submission error:', err.message);
      reset();
    }
  }, [errors.email, toast, reset]);

  // Memoizar los handlers de mouse
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Memoizar las opciones de registro
  const emailRegisterOptions = useMemo(() => ({
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Correo invalido'
    }
  }), []);

  return (
    <Flex
      id="newsletter"
      direction={{ base: 'column', lg: 'row' }}
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-br, brand.newsletter.bgGradient.start 10%, brand.newsletter.bgGradient.end 100%)"
      px={{ base: 10, md: 20, lg: 32, xl: 48 }}
      py={8}
    >
      <Stack mt={2} mb={{ base: 6, lg: 0 }} mr={{ base: 0, lg: 12 }}>
        <ImportantText color="brand.ready.text" textAlign={{ base: 'center', lg: 'left' }} as="h3">
          Suscríbete a nuestro newsletter
        </ImportantText>

        <PageText textAlign={{ base: 'center', lg: 'left' }} fontSize="input">
          Estas por unirte a la comunidad más grande de profesionales referentes en el ecosistema blockchain y IA de Latinoamérica
        </PageText>
      </Stack>

      <Stack w={{ base: '100%', md: '85%' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <FormControl id="email-control" isRequired mb={{ base: 3, md: 0 }}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Ingresa tu email"
                  bg="white"
                  borderRadius={0}
                  borderColor="brand.border"
                  h="56px"
                  maxW={{ base: '100%' }}
                  {...register('email', emailRegisterOptions)}
                />
              </InputGroup>
            </FormControl>

            <SubmitButton
              isValid={isValid}
              isHovered={isHovered}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Flex>
        </form>
      </Stack>
    </Flex>
  );
});

NewsletterSignup.displayName = 'NewsletterSignup';

// Export para lazy loading
export { NewsletterLoading };