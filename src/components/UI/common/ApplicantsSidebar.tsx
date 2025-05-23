import { Box, Link, Stack } from '@chakra-ui/react';
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
      position='sticky'
      top={24}
      display={{ base: 'none', lg: 'block' }}
      w='240px'
      h='fit-content'
      mr={12}
    >
      <Stack spacing={4}>
        {sidebarLinks.map(({ href, text }, idx) => (
          <Link
            key={href}
            as={NextLink}
            href={href}
            _hover={{ textDecoration: 'none' }}
            color={sectionsInView[idx] ? 'brand.accent' : 'brand.ready.text'}
            passHref
          >
            <PageText
              fontSize='input'
              fontWeight={sectionsInView[idx] ? 700 : 400}
              _hover={{ color: 'brand.accent' }}
            >
              {text}
            </PageText>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
