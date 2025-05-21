// app/ApolloProviderWrapper.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { getApolloClient } from '@/lib/apolloClient';

export function ApolloProviderWrapper({ children }: { children: ReactNode }) {
  const client = getApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}