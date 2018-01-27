import * as GraphQLToolsTypes from 'graphql-tools-types'
import { mergeResolvers } from 'merge-graphql-schemas'

const rootResolvers = {
  Date: GraphQLToolsTypes.Date({ name: 'Date' }),
}

const helloResolver = {
  Query: {
    hello: () => {
      return 'World'
    },
  },
}

const resolvers = [helloResolver]

export default mergeResolvers(resolvers)
