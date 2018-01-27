export default `
type SignInBody {
  token: String!
}

type AuthMutations {
  signIn(account: String!, password: String!): SignInBody
}
`
