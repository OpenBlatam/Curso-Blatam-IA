declare module 'react-floating-whatsapp' {
  import { FC } from 'react';

  interface FloatingWhatsAppProps {
    phoneNumber?: string;
    accountName?: string;
    allowEsc?: boolean;
    allowClickAway?: boolean;
    notification?: boolean;
    notificationSound?: boolean;
    chatMessage?: string;
    statusMessage?: string;
    avatar?: string;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }

  export const FloatingWhatsApp: FC<FloatingWhatsAppProps>;
} 