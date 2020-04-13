const { mergeResolvers } = require("merge-graphql-schemas");

const Users = require("./Users");

const resolvers = [Users];

module.exports = mergeResolvers(resolvers);
