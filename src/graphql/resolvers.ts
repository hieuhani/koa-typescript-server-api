import * as GraphQLToolsTypes from 'graphql-tools-types'
import { mergeResolvers } from 'merge-graphql-schemas'
import authResolvers from './auth/resolvers'
import profileResolvers from './profile/resolvers'

const rootResolver = {
  Date: GraphQLToolsTypes.Date({ name: 'Date' }),
}

const resolvers = [
  rootResolver,
  profileResolvers,
  authResolvers,
]

export default mergeResolvers(resolvers)
