const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const AbandonedAnimalAPI = require('./datasources/abandoned-animal-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      abandonedAnimalAPI: new AbandonedAnimalAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
