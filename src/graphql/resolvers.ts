import * as GraphQLToolsTypes from 'graphql-tools-types'
import { mergeResolvers } from 'merge-graphql-schemas'
import authResolvers from './auth/resolvers'

const rootResolver = {
  Date: GraphQLToolsTypes.Date({ name: 'Date' }),
}

const helloResolver = {
  Query: {
    hello: () => {
      return 'World'
    },
  },
}

const resolvers = [
  rootResolver,
  helloResolver,
  authResolvers,
]

export default mergeResolvers(resolvers)
