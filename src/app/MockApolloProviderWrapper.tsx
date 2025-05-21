// app/MockApolloProviderWrapper.tsx
'use client';

import { MockedProvider } from '@apollo/client/testing';
import { ReactNode } from 'react';
import { mocks } from '@/mocks/courseMocks';

export function MockApolloProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
}