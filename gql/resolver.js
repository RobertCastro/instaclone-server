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
        register: (_, { input }) => {
            console.log("Registrando")
            return null;
        }
    }
}

module.exports = resolvers;