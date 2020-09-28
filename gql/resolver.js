const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log("Obteniendo ususario...")
            return null;
        }
    }
}

module.exports = resolvers;