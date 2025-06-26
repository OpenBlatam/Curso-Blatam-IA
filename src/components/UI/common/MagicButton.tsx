import { Button, ButtonProps, keyframes } from '@chakra-ui/react';
import { Sparkles } from 'lucide-react';
import { FC } from 'react';

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const sparkleAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const glassAnimation = keyframes`
  0% { backdrop-filter: blur(8px); }
  50% { backdrop-filter: blur(12px); }
  100% { backdrop-filter: blur(8px); }
`;

interface MagicButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const MagicButton: FC<MagicButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<Sparkles size="1.1em" />}
      variant="outline"
      borderWidth="2px"
      borderColor="purple.400"
      position="relative"
      overflow="hidden"
      bg="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(8px)"
      transform="translateY(-2px)"
      shadow="lg"
      fontWeight="bold"
      
      _hover={{ 
        transform: 'translateY(-4px)',
        shadow: 'xl',
        transition: 'all 0.3s ease-in-out',
        bg: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'purple.500',
        _before: {
          opacity: 0.4
        },
        _after: {
          opacity: 1
        }
      }}
      _active={{
        transform: 'translateY(0px)',
        shadow: 'md'
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        backgroundSize: '400% 400%',
        animation: `${rainbowAnimation} 3s ease infinite`,
        opacity: 0.3,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: 0
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
        backdropFilter: 'blur(8px)',
        animation: `${glassAnimation} 2s ease-in-out infinite`,
        opacity: 0.8,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: 1
      }}
      sx={{
        '& .chakra-button__icon': {
          animation: `${sparkleAnimation} 2s ease-in-out infinite`,
          zIndex: 2
        },
        '& .chakra-button__text': {
          position: 'relative',
          zIndex: 2,
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(255,255,255,0.5)',
          whiteSpace: 'nowrap'
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
}; 