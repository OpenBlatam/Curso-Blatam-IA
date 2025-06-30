import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

// SVG path for Turbopack compatibility
const STEP_POLYGON_SVG = '/images/step-polygon.svg';

export const StepArrow: FC = () => {
  return (
    <Box mt={{ base: 4, md: 5 }}>
      <Image src={STEP_POLYGON_SVG} alt='next step arrow' height={22} width={30} />
    </Box>
  );
};
