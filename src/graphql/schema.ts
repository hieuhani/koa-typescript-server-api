import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
