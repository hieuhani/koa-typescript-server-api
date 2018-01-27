import { mergeTypes } from 'merge-graphql-schemas'
import authType from './auth/types'

const rootType = `
scalar Date
type Query {
  hello: String
}
type Mutation {
  auth: AuthMutations
}
`
export default mergeTypes([rootType, authType])
