# Frontend/web/react-graphql
# Setup & Walk through


## Template

--------------------------------

### Name of Technology / Library / Framework
- Technology:
- Reasons for use: 
- Status: Active
- Created on:
- Last updated on: 

### Goals of walk through
- 

### Steps
1.  

--------------------------------

## Actual Entries

--------------------------------

### Apollo Client & GraphQL
- Technology: Apollo Client, GraphQL
- Reasons for use:
    - Apollo Client
        - Reasons
          - Apollo Client is a comprehensive state management library
            for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.
          - https://www.apollographql.com/docs/react/
        - Alternatives
          - Urql
    - Graphql
        - Typed language using TypeScript
- Status: Active
- Created on: 3rd September 2021
- Last updated on:3rd September 2021

### Goals of walk through
- Setup Apollo Client and Graphql

### Steps
1. Follow the steps provided by apollo graphql
   https://www.apollographql.com/docs/react/get-started/ <br>
    **Key Pointers**
   1. Setup Apollo client & Graphql
      ```npm install @apollo/client graphql```
   2. Initialize `ApolloClient`
      In index.js, let's first import the symbols we need from @apollo/client:
      `import {
         ApolloClient,
         InMemoryCache,
         ApolloProvider,
         useQuery,
         gql
       } from "@apollo/client";`
   3. Next we'll initialize ApolloClient, passing its constructor a configuration object with uri and cache fields:
        `  const client = new ApolloClient({
             uri: 'https://48p1r2roz4.sse.codesandbox.io',
             cache: new InMemoryCache()
           });
      `
      1. uri - specifies the URL of the GraphQL Server
      2. cache - is an instance of new InMemoryCache(), which Apollo Client
         uses to cache query results after fetching them.
   

--------------------------------

### React in TypeScript
- Technology: React & Typescript
- Reasons for use:
  - React
    - Key library for Web application be built upon
  - Typescript
    - Typed language using TypeScript
- Status: Active
- Created on: 3rd September 2021
- Last updated on:3rd September 2021

### Goals of walk through
- Setup React
- Setup Typescript with
  - Proper Linting

### Steps
1. Follow the steps on create-react-app package
   https://reactjs.org/docs/create-a-new-react-app.html <br>
   ```npx create-react-app {name-of-app} --template typescript```

--------------------------------
