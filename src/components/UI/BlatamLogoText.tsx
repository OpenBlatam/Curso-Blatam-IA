import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

const BlatamLogoText: FC<TextProps> = (props) => {
  return (
    <Text
      fontWeight="bold"
      letterSpacing="tight"
      {...props}
    />
  );
};

export default BlatamLogoText; 