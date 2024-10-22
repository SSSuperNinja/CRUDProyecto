const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://joderoblespe:tilines123@clustergraphql.pfkwu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGraphQL');
    const server = new 
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();
