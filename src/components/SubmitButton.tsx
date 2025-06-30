import { FC, useState } from 'react';
import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import Image from 'next/image';
import { ImportantText } from './UI/headings';

// SVG path for Turbopack compatibility
const PLANE_VECTOR_SVG = '/images/plane-vector.svg';

interface Props {
  id?: string;
  isValid: boolean;
  isSubmitting: boolean;
  isNewsletter?: boolean;
  height: string;
  width: string;
  text: string;
}

export const SubmitButton: FC<Props> = ({
  id = 'submit-application',
  isValid,
  isSubmitting,
  isNewsletter = false,
  height,
  width,
  text
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box id={id} position='relative'>
      <Box
        backgroundColor='brand.button.shadow'
        h={height}
        w={width}
        position='absolute'
        transform={isHovered ? 'translate(3px, 3px)' : 'translate(6px, 6px)'}
        transition="transform 0.2s ease"
        opacity={!isValid ? 0 : 1}
      />

      <Button
        backgroundColor='brand.accent'
        w={width}
        py={7}
        borderRadius={0}
        type='submit'
        isDisabled={!isValid || isSubmitting}
        _hover={{ 
          bg: 'brand.hover',
          transform: 'translate(-1.5px, -1.5px)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        pointerEvents={!isValid ? 'none' : 'auto'}
        transition="all 0.2s ease"
      >
        <ImportantText as='h3' color='white'>
          {isSubmitting ? 'Submitting' : text}
        </ImportantText>

        <Flex pl={5}>
          {!isSubmitting && !isNewsletter && (
            <Image src={PLANE_VECTOR_SVG} alt='paper plane vector' height={29} width={32} />
          )}
          {isSubmitting && <Spinner color='white' />}
        </Flex>
      </Button>
    </Box>
  );
};
