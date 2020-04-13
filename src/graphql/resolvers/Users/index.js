const db = require("../../../db");

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
    // Handles user login
    async login(_, { email, password }) {
      return await db("users").where({ email: email, password: password }).first();
    },

    // Create new user
    async addUser(_, { name, email, dateOfBirth, password }) {
      // let user = await db("users")
      //   .where({ email: email })
      //   .first()
      //   .then(res => {
      //     console.log("RESPONSE == ", res);
      //   })
      //   .catch(err => {
      //     console.log("error == ", err);
      //   });
      // console.log("teste", user);

      // if (user) {
      // }
      // return;
      let response;
      await db("users")
        .insert({
          name: name,
          email: email,
          date_of_birth: dateOfBirth,
          password: password,
          role_id: 1
        })
        .then(res => {
          response = res;
        })
        .catch(err => {
          console.log(err.detail);
          response = err.detail;
        });
      return response;
      //const id = result[0];
      //console.log("aaaa", id);
      //return await db("users").where({ id }).first();
    }
  }
};
