import { ApolloClient, createHttpLink } from '@apollo/client';
import { cache } from "./cache"

const link = createHttpLink({
    uri: 'http://192.168.1.45:4000/graphql',
    credentials: 'same-origin'
});

export const apolloClient = new ApolloClient({
    link,
    cache
});