const db = require("../../../db");
const bcrypt = require("bcrypt");

// Generator of hash
const encripta = async value => {
  let saltRounds = 10;
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = await bcrypt.hashSync(value, salt);
  return hash;
};

// Define resolvers
module.exports = {
  Query: {
    // Fetch all users
    async allUsers() {
      return await db("users");
    },
    // Get a user by its ID
    async getUser(_, { id }) {
      return await db("users").where({ id: id }).first();
    }
  },

  Mutation: {
    //  login
    async login(_, { email, password }) {
      await db("users").where({ email: email, password: password }).first();
    },

    // add new user
    async addUser(_, { name, email, date_of_birth, password }) {
      await db("users").insert({
        name: name,
        email: email,
        date_of_birth: date_of_birth,
        password: await encripta(password),
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      });
      return await db("users").where({ name: name }).first();
    }
  }
};
