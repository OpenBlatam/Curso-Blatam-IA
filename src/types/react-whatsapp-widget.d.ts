declare module 'react-whatsapp-widget' {
  import { FC } from 'react';

  interface WhatsAppWidgetProps {
    phoneNumber: string;
    companyName?: string;
    message?: string;
    sendButton?: string;
    textReplyTime?: string;
    inputPlaceHolder?: string;
  }

  const WhatsAppWidget: FC<WhatsAppWidgetProps>;
  export default WhatsAppWidget;
} 