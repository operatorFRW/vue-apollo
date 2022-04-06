const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const paramsDataSource = require('./dataSource');
const resolvers = require('./resolvers');

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => paramsDataSource
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port http://localhost:4000/
  `);
});
