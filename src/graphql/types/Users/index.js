// Define our schema using the GraphQL schema language
module.exports = `
    scalar Date
    
    type User {
      id: Int!
      name: String!
      password: String
      email: String!
      date_of_birth: Date!
    }
    
    
    type Query {
      allUsers: [User]
      getUser(id: Int!): User
    }
    type Mutation {
      login (email: String!, password: String!): String
      addUser (name: String!, email: String!, password: String!, date_of_birth: Date): User
    }
  `;
