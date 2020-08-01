import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation Register($data: RegisterInput!) {
  register(
    data: $data
  ) {
    id
  }
}
`
export const LOGIN = gql`
mutation Login($email: String!, $password: String!){
    login(
      email: $email
      password: $password
    ){
      id
      lastName
      firstName
      email        
    }
  }
`;

export const CONFIRM = gql`
mutation confirmUser($token: String!){
  confirmUser(
    token: $token
  )
}`

export const LOGOUT = gql`
mutation logout{
  logout
}`

export const FORGOTPASS = gql`
mutation forgotPassword($email: String!){
  forgotPassword(email: $email)
}
`

export const CHANGEPASS = gql`
mutation changePassword($data: ChangePasswordInput!){
  changePassword(data: $data){
    email
  }
}`