import { makeExecutableSchema } from "graphql-tools";
import { ServiceTypeDefs } from "./service/example/serviceSchema";
import ServiceResolvers from "./service/example/serviceResolvers";

export const schema = makeExecutableSchema({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers,
});
