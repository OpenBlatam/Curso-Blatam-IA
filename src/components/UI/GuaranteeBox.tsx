import { Box, Flex, Text } from '@chakra-ui/react';
import { ShieldCheck } from 'lucide-react';

interface GuaranteeBoxProps {
  size?: 'sm' | 'md' | 'lg';
  showTitle?: boolean;
}

const GuaranteeBox = ({ size = 'md', showTitle = true }: GuaranteeBoxProps) => {
  const sizeConfig = {
    sm: {
      fontSize: { base: '2xs', sm: 'xs' },
      titleSize: { base: 'xs', sm: 'sm' },
      padding: { base: 2, sm: 3 },
      iconSize: 16,
      iconPadding: { base: 1, sm: 1.5 },
      spacing: 1
    },
    md: {
      fontSize: { base: 'xs', sm: 'sm' },
      titleSize: { base: 'sm', sm: 'md' },
      padding: { base: 3, sm: 4 },
      iconSize: 20,
      iconPadding: { base: 1.5, sm: 2 },
      spacing: 2
    },
    lg: {
      fontSize: { base: 'sm', sm: 'md' },
      titleSize: { base: 'md', sm: 'lg' },
      padding: { base: 4, sm: 6 },
      iconSize: 24,
      iconPadding: { base: 2, sm: 2.5 },
      spacing: 3
    }
  };

  const config = sizeConfig[size];

  return (
    <Box
      p={config.padding}
      bg="linear-gradient(135deg, #E8F5E8 0%, #F0F8F0 100%)"
      borderRadius={{ base: 'lg', sm: 'xl' }}
      border="2px solid"
      borderColor="green.200"
      fontSize={config.fontSize}
      textAlign="center"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.05)"
      position="relative"
      overflow="hidden"
      maxW="100%"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        bg: 'linear-gradient(90deg, green.400, green.500, green.400)',
      }}
    >
      {showTitle && (
        <Flex 
          align="center" 
          justify="center" 
          mb={config.spacing}
          flexWrap="wrap"
          gap={2}
        >
          <Box
            bg="green.500"
            color="white"
            borderRadius="full"
            p={config.iconPadding}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ShieldCheck 
              width={config.iconSize} 
              height={config.iconSize}
            />
          </Box>
          <Text
            fontSize={config.titleSize}
            fontWeight="bold"
            color="green.700"
            textTransform="uppercase"
            letterSpacing="wide"
            lineHeight="1.2"
          >
            Garantía de Satisfacción
          </Text>
        </Flex>
      )}
      
      <Text 
        color="green.800" 
        lineHeight={{ base: "1.3", sm: "1.4" }} 
        fontWeight="medium"
        px={{ base: 1, sm: 0 }}
      >
        <Text as="span" fontWeight="bold" color="green.700">
          100% de tu dinero de vuelta
        </Text>
        <br />
        Si en las primeras 2 clases del primer curso no alcanzamos tus expectativas, 
        te devolvemos la totalidad del dinero invertido.
      </Text>
      
      <Text
        mt={config.spacing}
        fontSize={{ base: "3xs", sm: "2xs" }}
        color="green.600"
        fontStyle="italic"
        px={{ base: 1, sm: 0 }}
        lineHeight="1.2"
      >
        * Solo aplica para tu primer curso en Blatam
      </Text>
    </Box>
  );
};

export default GuaranteeBox; 