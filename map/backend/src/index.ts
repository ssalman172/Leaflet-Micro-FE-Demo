import { ApolloServer } from 'apollo-server'
import typeDefs from './Schema'
import resolvers from './Resolvers'
import connectDB from './Database/dbconfig';

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});