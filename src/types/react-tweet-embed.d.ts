declare module 'react-tweet-embed' {
  import { ComponentType } from 'react';

  export interface TweetEmbedProps {
    tweetId: string;
    options?: {
      theme?: 'light' | 'dark';
      cards?: 'hidden' | 'visible';
      conversation?: 'none' | 'all';
      width?: number | string;
      align?: 'left' | 'center' | 'right';
      lang?: string;
      dnt?: boolean;
    };
  }

  const TweetEmbed: ComponentType<TweetEmbedProps>;
  export default TweetEmbed;
} 