"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const ServiceResolvers = {
    Query: {
        getAllUsers: async (_, args) => {
            try {
                const mockUsers = [{ name: "xyz" }, { name: "abc" }];
                return mockUsers;
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error);
            }
        },
    },
};
exports.default = ServiceResolvers;
