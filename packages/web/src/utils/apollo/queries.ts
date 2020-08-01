import { gql } from "@apollo/client";

export const USER = gql`
query getUser {
    user @client{
        isAuth
    }
}
`