import { ComponentType } from 'react';

declare module 'next/dynamic' {
  interface DynamicOptions<P = {}> {
    ssr?: boolean;
    loading?: () => JSX.Element | null;
  }

  interface Loader<P = {}> {
    (): Promise<ComponentType<P>>;
  }

  function dynamic<P = {}>(
    dynamicOptions: DynamicOptions<P> | Loader<P>,
    options?: DynamicOptions<P>
  ): ComponentType<P>;
} 