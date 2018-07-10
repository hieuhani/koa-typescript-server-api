import { mergeTypes } from 'merge-graphql-schemas'
import authType from './auth/types'
import profileType from './profile/types'

const rootType = `
scalar Date
type Query {
  profile: ProfileQueries
}
type Mutation {
  auth: AuthMutations
}
`
export default mergeTypes([rootType, authType, profileType])
