import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache
});