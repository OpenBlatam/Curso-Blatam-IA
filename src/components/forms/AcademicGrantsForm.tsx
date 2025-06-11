import {
  Box,
  Center,
  Fade,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useToast
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { FC, useState, useCallback } from 'react';
import { Controller, FormProvider, useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { MouseEvent } from 'react';

import { DropdownIndicator, PageText } from '../UI';
import { SubmitButton } from '../SubmitButton';
import { Captcha } from '.';

import { api } from './api';
import { chakraStyles } from './selectStyles';
import {
  ACADEMIC_GRANTS_PROJECT_CATEGORY_OPTIONS,
  APPLYING_AS_OPTIONS,
  COUNTRY_OPTIONS,
  HOW_DID_YOU_HEAR_ABOUT_GRANTS_WAVE,
  OTHER,
  TIMEZONE_OPTIONS,
  WOULD_YOU_SHARE_YOUR_RESEARCH_OPTIONS
} from './constants';
import { ACADEMIC_GRANTS_THANK_YOU_PAGE_URL, TOAST_OPTIONS } from '../../constants';

import { AcademicGrantsFormData, SelectOption } from '../../types';

type FormFieldProps = {
  register: UseFormRegister<AcademicGrantsFormData>;
  errors: FieldErrors<AcademicGrantsFormData>;
};

const FormField: FC<FormFieldProps & { name: keyof AcademicGrantsFormData; label: string; type?: string }> = ({
  register,
  errors,
  name,
  label,
  type = 'text'
}) => (
  <FormControl id={`${name}-control`} isRequired mb={8}>
    <FormLabel htmlFor={name}>
      <PageText display='inline' fontSize='input'>
        {label}
      </PageText>
    </FormLabel>
    <Input
      id={name}
      type={type}
      bg='white'
      borderRadius={0}
      borderColor='brand.border'
      h='56px'
      _placeholder={{ fontSize: 'input' }}
      color='brand.paragraph'
      fontSize='input'
      {...register(name, { required: true })}
    />
    {errors?.[name]?.type === 'required' && (
      <Box mt={1}>
        <PageText as='small' fontSize='helpText' color='red.500'>
          {label} is required.
        </PageText>
      </Box>
    )}
  </FormControl>
);

export const AcademicGrantsForm: FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [referralSource, setReferralSource] = useState<SelectOption>({
    value: '',
    label: ''
  });

  const methods = useForm<AcademicGrantsFormData>({
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
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setValue('projectPreviousWork', base64String, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
      toast({
        ...TOAST_OPTIONS,
        title: 'Proposal uploaded!',
        status: 'success'
      });
    },
    [setValue, toast]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onSubmit = useCallback(async (data: AcademicGrantsFormData) => {
    try {
      const res = await api.academicGrants.submit(data);
      if (res.ok) {
        reset();
        router.push(ACADEMIC_GRANTS_THANK_YOU_PAGE_URL);
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
  }, [reset, router, toast]);

  const handleReferralSource = useCallback((source: SelectOption) => {
    setReferralSource(source);
    setValue('howDidYouHearAboutGrantsWave', source);
  }, [setValue]);

  const handleRemoveFile = useCallback((e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setSelectedFile(null);
    setValue('projectPreviousWork', '');
  }, [setValue]);

  return (
    <Box
      w='100%'
      bg='brand.newsletter.bgGradient.start'
      p={8}
      borderRadius='md'
    >
      <FormProvider {...methods}>
        <form id='academic-grants-form' onSubmit={handleSubmit(onSubmit)}>
          <FormField register={register} errors={errors} name="firstName" label="First name" />
          <FormField register={register} errors={errors} name="lastName" label="Last name" />
          <FormField register={register} errors={errors} name="email" label="Email" type="email" />
          <SubmitButton
            isValid={isValid}
            isSubmitting={isSubmitting}
            text='Submit Application'
            height='56px'
            width='100%'
          />
        </form>
      </FormProvider>
    </Box>
  );
};

// Add display name for better debugging
AcademicGrantsForm.displayName = 'AcademicGrantsForm';
