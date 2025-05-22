import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

import { PageText } from '..';

import { SidebarLink } from '../../../types';

interface Props {
  sidebarLinks: SidebarLink[];
  sectionsInView: boolean[];
}

export const ApplicantsSidebar: FC<Props> = ({ sidebarLinks, sectionsInView }) => {
  return (
    <Box
      as='nav'
      position='sticky'
      top={8}
      display={{ base: 'none', lg: 'block' }}
      w='240px'
      h='fit-content'
    >
      <Flex direction='column' gap={4}>
        {sidebarLinks.map(({ href, text }, idx) => (
          <NextLink key={href} href={href} passHref legacyBehavior={false}>
            <Link
              href={href}
              _hover={{ textDecoration: 'none' }}
              color={sectionsInView[idx] ? 'brand.accent' : 'brand.ready.text'}
              fontWeight={sectionsInView[idx] ? 700 : 400}
            >
              <PageText>{text}</PageText>
            </Link>
          </NextLink>
        ))}
      </Flex>
    </Box>
  );
};
