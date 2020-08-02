import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

console.log(process.env.APOLLO_URL);
const uri = (process.env.NODE_ENV === "production") ? "https://testingupdateoptions.herokuapp.com/graphql" : 'http://localhost:4000/graphql'

export const apolloClient = new ApolloClient({
  uri,
  cache
});