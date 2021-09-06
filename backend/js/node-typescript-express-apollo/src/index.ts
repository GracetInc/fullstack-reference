import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { schema } from "./schema";
import {ServiceTypeDefs} from "./service/example/serviceSchema";
import ServiceResolvers from "./service/example/serviceResolvers";

async function startExpressApolloServer() {

    const PORT = process.env.PORT || 3000;

    const server = new ApolloServer({
        typeDefs: ServiceTypeDefs,
        resolvers: ServiceResolvers,
    });
    await server.start();
    const app = express();

    // @ts-ignore
    app.use("*", cors());
    app.use(helmet());
    app.use(compression());

    // server.applyMiddleware({ app, path: '/api/graphql' });
    server.applyMiddleware({ app });

    // server.applyMiddleware({ app, path: "/graphql" });
    const httpServer = createServer(app);
    httpServer.listen({ port: PORT }, (): void =>
        console.log(` 🚀 GraphQL-Server is running on http://localhost:3000${server.graphqlPath}`)
    );
    return { server, app };
}

startExpressApolloServer();

// const server = new ApolloServer({
//     typeDefs: ServiceTypeDefs,
//     resolvers: ServiceResolvers,
// });
//
// const app = express();
// server.applyMiddleware({ app });
//
// app.listen({ port: 3000 }, () =>
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );
