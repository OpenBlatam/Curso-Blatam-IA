import { Box, BoxProps, Flex, FlexProps, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { ImportantText } from './UI/headings';

import { useShadowAnimation } from '../hooks';

import planeVectorSVG from '../../public/images/plane-vector.svg';

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

interface Props {
  label: string;
  link: string;
  width: string;
  isApplyButton?: boolean;
}

export const ButtonLink: FC<Props> = ({ label, link, width, isApplyButton }) => {
  const { shadowBoxControl, setButtonHovered } = useShadowAnimation();

  return (
    <Link href={link} _hover={{ textDecoration: 'none' }}>
      <Box position='relative'>
        <MotionBox
          backgroundColor='brand.button.shadow'
          h='56px'
          w={width}
          position='absolute'
          animate={shadowBoxControl}
        />

        <MotionFlex
          backgroundColor='rgba(227, 167, 196, 0.95)'
          w={width}
          py={4}
          justifyContent='center'
          alignItems='center'
          position='relative'
          _hover={{ bg: 'brand.hover' }}
          whileHover={{ x: -1.5, y: -1.5 }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          backdropFilter="blur(8px)"
          boxShadow="0 4px 15px rgba(227, 167, 196, 0.3)"
        >
          <ImportantText color='white' as='h2' display="flex" alignItems="center" gap={2}>
            {label}
            <HiArrowRight size={20} />
          </ImportantText>

          {isApplyButton && (
            <Flex position='absolute' left={36}>
              <Image src={planeVectorSVG} alt='paper plane vector' height={29} width={32} />
            </Flex>
          )}
        </MotionFlex>
      </Box>
    </Link>
  );
};
