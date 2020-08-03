# CRA-and-Expo-app-with-TypeGraphQL-Auth

Template repository that contains a Yarn Workspace in which it's set up React.js web and Expo React Native app and both consume an Apollo Server GraphQL API. The API exposes an authentication service and it also has the tests for the reducers.

# How it´s organized

I divided the Yarn Workspace into packages. In the server folder is the Apollo Server that has the resolvers and entities to work with GraphQL and also contains the tests for those resolvers. There are also the controller and common packages that have the shared resources that the app and web use.

# Features

- React.js
- React Native (expo)
- Material UI for web and UI Kitten for Expo
- Controller package that has the wrappers to consume Apollo Client
- Common package with Yup Schemas for validation
- GraphQL with TypeGraphQL to enhance TypeScript
- Confirmation and Forgot Password Emails 

Note: I did all the React.js and React Native code with arrow functions only for preference.

# What I use

- Apollo Server 
- Apollo Client
- TypeGraphQL
- TypeORM 
- Redis 
- TypeScript
- NodeMailer
- Yup
- Jest
- Postgress
- Formik
- Material UI to style React.js 
- UIKitten to style React Native 
- Reactive variables and Cache (Apollo client)
