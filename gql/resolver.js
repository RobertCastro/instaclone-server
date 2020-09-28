const userController = require("../controllers/user");
const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log("Obteniendo ususario...")
            return null;
        }
    },
    Mutation: {
        // User
        register: async (_, { input }) => userController.register(input),
    },
}

module.exports = resolvers;