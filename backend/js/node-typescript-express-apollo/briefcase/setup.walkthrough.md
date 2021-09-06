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


### Typescript / NodeJS / Express / GraphQL / Apollo Server
- Technology: NodeJS, Express, GraphQL, Apollo Server in TypeScript
- Reasons for use:
  - Creating a Rest API server that is built on GraphQL
- Status: Active
- Created on: 3rd September 2021
- Last updated on: 3rd September 2021

### Goals of walk through
- Setup NodeJS, Express, GraphQL, Apollo Server in TypeScript

### Steps
1. Follow through the tutorial highlighted
   - **https://mbbaig.blog/apollo-server-typescript/**
   - **Key Steps**
     1. Initializing the file with package.json
        ```npm init --yesInstall```
     2. Setting up TypeScript
        1. Install Typescript, Nodemon
           ```npm i typescript nodemon ts-node --save-dev```
             - nodemon to compile our code on change, and 
             - ts-node to exec TypeScript files.
        2. Generate tsconfig.json
           ```npx tsc --init --rootDir src --outDir dist --lib dom,es6 --module commonjs --removeComments```
     3. Setting up Express, Apollo and creating a simple GraphQL API
        1. Installing express
           ```npm i apollo-server-express helmet compression cors express graphql http ncp graphql-tools```
        2. Installing typescript Types for code completion
           ```npm i @types/compression @types/express @types/graphql @types/node --save-dev```
        3. Create a /src directory with a index.ts file.
           ```mkdir src && cd src && touch index.ts```
     4. [Sample] Creating GraphQL schema and resolvers
        1. Create a sample src/service/serviceSchema
        2. Create a sample src/service/serviceResolver.ts
     5. Setup server with express & apollo server
        - Complete setup with index.ts
     6. Compile the code
        - Adding the scripts in package.json
2. 
