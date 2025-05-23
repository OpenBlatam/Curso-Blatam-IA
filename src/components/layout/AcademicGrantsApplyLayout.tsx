import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Description } from '../UI';

import applicantsHero from '../../../public/images/applicants-hero.png';

interface AcademicGrantsApplyLayoutProps {
  children: ReactNode;
  windowSize: {
    width: number;
    height: number;
  };
}

export const AcademicGrantsApplyLayout: FC<AcademicGrantsApplyLayoutProps> = ({ children, windowSize }) => {
  return (
    <>
      <Stack mb={5} px={{ base: 5, md: 12 }} py={3}>
        <section id='hero'>
          <Description
            title=''
            img={{
              src: applicantsHero,
              alt: 'Kid watching plants grow',
              width: 450,
              height: 248
            }}
            windowSize={windowSize}
          >
            Aprende desde cero todos los conceptos fundamentales de blockchain.
          </Description>
        </section>

        <Stack>
          <Stack mb={8}>{children}</Stack>
        </Stack>
      </Stack>
    </>
  );
};
