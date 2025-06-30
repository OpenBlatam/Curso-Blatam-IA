// @ts-nocheck
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { ImportantText } from './UI/headings';

// SVG path for Turbopack compatibility
const PLANE_VECTOR_SVG = '/images/plane-vector.svg';

interface Props {
  label: string;
  link: string;
  width: string;
  isApplyButton?: boolean;
}

export const ButtonLink: FC<Props> = ({ label, link, width, isApplyButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Box position='relative'>
        <Box
          backgroundColor='brand.button.shadow'
          h='56px'
          w={width}
          position='absolute'
          transform={isHovered ? 'translate(3px, 3px)' : 'translate(6px, 6px)'}
          transition="transform 0.2s ease"
        />

        <Flex
          backgroundColor='rgba(227, 167, 196, 0.95)'
          w={width}
          py={4}
          justifyContent='center'
          alignItems='center'
          position='relative'
          _hover={{ 
            bg: 'brand.hover',
            transform: 'translate(-1.5px, -1.5px)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          backdropFilter="blur(8px)"
          boxShadow="0 4px 15px rgba(227, 167, 196, 0.3)"
          transition="all 0.2s ease"
          cursor="pointer"
        >
          <ImportantText color='white' as='h2' display="flex" alignItems="center" gap={2}>
            {label}
            <HiArrowRight size={20} />
          </ImportantText>

          {isApplyButton && (
            <Flex position='absolute' left={36}>
              <Image src={PLANE_VECTOR_SVG} alt='paper plane vector' height={29} width={32} />
            </Flex>
          )}
        </Flex>
      </Box>
    </Link>
  );
};
