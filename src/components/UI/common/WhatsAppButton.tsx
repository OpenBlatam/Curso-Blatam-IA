import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 100, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(0, 100, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 100, 0, 0);
  }
`;

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = 'Hola! ¿Cómo puedo ayudarte?'
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <Box
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex={999}
    >
      <Tooltip label="Chatear por WhatsApp" placement="left">
        <IconButton
          as="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          icon={<FaWhatsapp size="2.5em" />}
          bg="#006400"
          color="white"
          size="xl"
          isRound
          width="70px"
          height="70px"
          boxShadow="2xl"
          animation={`${pulseAnimation} 2s infinite`}
          _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.2s',
            bg: '#004d00',
            animation: 'none'
          }}
        />
      </Tooltip>
    </Box>
  );
}; 