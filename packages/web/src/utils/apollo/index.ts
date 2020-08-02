import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

const uri = (process.env.NODE_ENV === "production") ? process.env.APOLLO_URL : 'http://localhost:4000/graphql'

export const apolloClient = new ApolloClient({
  uri,
  cache
});