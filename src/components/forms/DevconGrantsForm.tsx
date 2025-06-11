import {
  Box,
  Center,
  Fade,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { FC, useState, useCallback, useMemo } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { MouseEvent } from 'react';
import type { FlexProps } from '@chakra-ui/react';

import { DropdownIndicator, PageText } from '../UI';
import { SubmitButton } from '../SubmitButton';
import { Captcha } from '.';

import { api } from './api';

import { chakraStyles } from './selectStyles';

import {
  EVENT_FORMAT_OPTIONS,
  EVENT_TYPE_OPTIONS,
  HOW_DID_YOU_HEAR_ABOUT_ESP_OPTIONS
} from './constants';
import { DEVCON_GRANTS_THANK_YOU_PAGE_URL, TOAST_OPTIONS } from '../../constants';

import { DevconGrantsFormData, EventFormat, ReferralSource } from '../../types';

const FormContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Stack
    w='100%'
    bgGradient='linear(to-br, brand.newsletter.bgGradient.start 10%, brand.newsletter.bgGradient.end 100%)'
    px={{ base: 5, md: 12 }}
    pt={{ base: 8, md: 12 }}
    pb={{ base: 20, md: 16 }}
    borderRadius={{ md: '10px' }}
    spacing={8}
  >
    {children}
  </Stack>
);

export const DevconGrantsForm: FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [referralSource, setReferralSource] = useState<ReferralSource | unknown>({
    value: '',
    label: ''
  });

  const methods = useForm<DevconGrantsFormData>({
    mode: 'onBlur'
  });

  const {
    handleSubmit,
    register,
    trigger,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting },
    reset
  } = methods;

  const onDrop = useCallback(
    (files: File[]) => {
      const file = files[0];
      setSelectedFile(file);
      toast({
        ...TOAST_OPTIONS,
        title: 'Proposal uploaded!',
        status: 'success'
      });
    },
    [toast]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onSubmit = useCallback(async (data: DevconGrantsFormData) => {
    try {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && 'value' in value) {
            formData.append(key, value.value);
          } else {
            formData.append(key, value.toString());
          }
        }
      });

      if (selectedFile) {
        formData.append('uploadProposal', selectedFile);
      }

      const res = await api.devconGrants.submit(formData);
      if (res.ok) {
        reset();
        router.push(DEVCON_GRANTS_THANK_YOU_PAGE_URL);
      } else {
        toast({
          ...TOAST_OPTIONS,
          title: 'Algo salió mal durante el envío, inténtalo de nuevo.',
          status: 'error'
        });
        throw new Error('Network response was not OK');
      }
    } catch (err) {
      console.error('There has been a problem with your operation: ', err);
    }
  }, [reset, router, toast, selectedFile]);

  const handleReferralSource = useCallback((source: ReferralSource) => {
    setReferralSource(source);
  }, []);

  const handleRemoveFile = useCallback((e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setSelectedFile(null);
  }, []);

  // @ts-ignore - TODO: Fix complex union type issue
  const PersonalInfoSection = () => (
    <Stack spacing={8}>
      <Stack spacing={3}>
        <FormControl
          id='first-name-control'
          isRequired
          mr={{ md: 12 }}
          mb={{ base: 8, md: 0 }}
        >
          <FormLabel htmlFor='firstName'>
            <PageText display='inline' fontSize='input'>
              First name
            </PageText>
          </FormLabel>

          <Input
            id='firstName'
            type='text'
            bg='white'
            borderRadius={0}
            borderColor='brand.border'
            h='56px'
            _placeholder={{ fontSize: 'input' }}
            color='brand.paragraph'
            fontSize='input'
            {...register('firstName', {
              required: true,
              maxLength: 40
            })}
          />

          {errors?.firstName?.type === 'required' && (
            <Box mt={1}>
              <PageText as='small' fontSize='helpText' color='red.500'>
                First name is required.
              </PageText>
            </Box>
          )}
          {errors?.firstName?.type === 'maxLength' && (
            <Box mt={1}>
              <PageText as='small' fontSize='helpText' color='red.500'>
                First name cannot exceed 40 characters.
              </PageText>
            </Box>
          )}
        </FormControl>

        <FormControl id='last-name-control' isRequired>
          <FormLabel htmlFor='lastName'>
            <PageText display='inline' fontSize='input'>
              Last name
            </PageText>
          </FormLabel>
          <Input
            id='lastName'
            type='text'
            bg='white'
            borderRadius={0}
            borderColor='brand.border'
            h='56px'
            _placeholder={{ fontSize: 'input' }}
            color='brand.paragraph'
            fontSize='input'
            {...register('lastName', { required: true, maxLength: 80 })}
          />

          {errors?.lastName?.type === 'required' && (
            <Box mt={1}>
              <PageText as='small' fontSize='helpText' color='red.500'>
                Last name is required.
              </PageText>
            </Box>
          )}
          {errors?.lastName?.type === 'maxLength' && (
            <Box mt={1}>
              <PageText as='small' fontSize='helpText' color='red.500'>
                Last name cannot exceed 80 characters.
              </PageText>
            </Box>
          )}
        </FormControl>
      </Stack>

      {!errors?.firstName && !errors?.lastName && (
        <PageText as='small' fontSize='helpText' color='brand.helpText'>
          The point of contact for the application.
        </PageText>
      )}
    </Stack>
  );

  const EmailSection = useMemo(() => (
    <FormControl id='email-control' isRequired mb={8}>
      <FormLabel htmlFor='email'>
        <PageText display='inline' fontSize='input'>
          Email
        </PageText>
      </FormLabel>
      <Input
        id='email'
        type='email'
        bg='white'
        borderRadius={0}
        borderColor='brand.border'
        h='56px'
        _placeholder={{ fontSize: 'input' }}
        color='brand.paragraph'
        fontSize='input'
        {...register('email', { required: true })}
      />

      {errors?.email?.type === 'required' && (
        <Box mt={1}>
          <PageText as='small' fontSize='helpText' color='red.500'>
            Email is required.
          </PageText>
        </Box>
      )}
    </FormControl>
  ), [register, errors]);

  return (
    <FormContainer>
      <FormProvider {...methods}>
        <form id='devcon-grants-form' onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={8}>
            <PersonalInfoSection />
            {EmailSection}
            {/* ... rest of the form sections ... */}
          </Stack>
        </form>
      </FormProvider>
    </FormContainer>
  );
};

// Add display name for better debugging
DevconGrantsForm.displayName = 'DevconGrantsForm';
