const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = require("./src/graphql/types/");
const resolvers = require("./src/graphql/resolvers/");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
app.listen({ port: 3333 }, () => {
  console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`);
});
