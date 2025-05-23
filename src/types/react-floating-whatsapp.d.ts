declare module 'react-floating-whatsapp' {
  import { ComponentType, CSSProperties } from 'react';

  export interface FloatingWhatsAppProps {
    phoneNumber: string;
    accountName: string;
    allowEsc?: boolean;
    allowClickAway?: boolean;
    notification?: boolean;
    notificationSound?: boolean;
    avatar?: string;
    statusMessage?: string;
    chatMessage?: string;
    placeholder?: string;
    messageDelay?: number;
    onClose?: () => void;
    onNotification?: () => void;
    onLoopDone?: () => void;
    onClick?: () => void;
    onSubmit?: (event: any) => void;
    style?: CSSProperties;
  }

  const FloatingWhatsApp: ComponentType<FloatingWhatsAppProps>;
  export default FloatingWhatsApp;
} 