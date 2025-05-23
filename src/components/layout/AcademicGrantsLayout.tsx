import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { AcademicGrantsHero } from '../UI';

interface AcademicGrantsLayoutProps {
  children: ReactNode;
  windowSize: {
    width: number;
    height: number;
  };
}

export const AcademicGrantsLayout: FC<AcademicGrantsLayoutProps> = ({ children, windowSize }) => {
  return (
    <Stack>
      <AcademicGrantsHero title='Academic Grants Round' windowSize={windowSize}>
        The Ethereum Foundation is sponsoring a wave of grants to support Ethereum-related academic
        work. This grants round has up to $750,000 in total available. Proposals are due{' '}
        <strong>May 8, 2022</strong>. All of the details you&apos;ll need to apply can be found
        below.
      </AcademicGrantsHero>

      <Stack>{children}</Stack>
    </Stack>
  );
};
