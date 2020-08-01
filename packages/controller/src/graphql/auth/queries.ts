import { gql } from "@apollo/client";

export const USERDATA = gql`
query me{
    me{
      id
      lastName
      firstName
      name
      email    
    }
  }
`;