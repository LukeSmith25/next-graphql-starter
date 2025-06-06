// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject> | null = null;

export function getApolloClient() {
  if (client) return client;

  client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:3000/api/graphql',
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
      },
    },
  });

  return client;
}