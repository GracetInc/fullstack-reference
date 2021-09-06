"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_tools_1 = require("graphql-tools");
const serviceSchema_1 = require("./service/example/serviceSchema");
const serviceResolvers_1 = __importDefault(require("./service/example/serviceResolvers"));
exports.schema = (0, graphql_tools_1.makeExecutableSchema)({
    typeDefs: serviceSchema_1.ServiceTypeDefs,
    resolvers: serviceResolvers_1.default,
});
