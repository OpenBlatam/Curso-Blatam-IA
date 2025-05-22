import { FC, ReactNode } from 'react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Banner } from './Banner';

interface Props {
  to: string;
  children: ReactNode;
}

export const BannerClickeable: FC<Props> = ({ children, to, ...props }) => {
  return (
    <NextLink href={to} passHref legacyBehavior={false}>
      <Banner {...props}>{children}</Banner>
    </NextLink>
  );
};
