import { Box, Center, Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';

const PageNotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página no encontrada | Blatam Academy </title>
        <meta name='description' content='Page Not Found' />
      </Head>

      <Center textAlign='center' my={32}>
        <Box>
          <Heading as='h1' color='brand.heading' fontSize='h1' fontWeight={100}>
            404.
          </Heading>

          <Heading as='h4' color='brand.heading' fontSize='h4' fontWeight={700} lineHeight='24px'>
            Página no encontrada.
          </Heading>

          <Text
            mt={9}
            color='brand.paragraph'
            fontSize='paragraph'
            fontWeight={300}
            lineHeight='24px'
          >
            Please go back to{' '}
            <NextLink href='/' passHref>
              <Link fontWeight={700} color='brand.orange.100' _hover={{ textDecoration: 'none' }}>
                nuestra página principal
              </Link>
            </NextLink>{' '}
            para empezar.
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default PageNotFound;
