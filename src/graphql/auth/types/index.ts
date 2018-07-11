export default `
type SignInBody {
  token: String!
}

enum ContactType {
  google
  facebook
  phone
  email
}

input SignUpPayload {
  firstName: String!,
  lastName: String!,
  contact: String!,
  password: String!,
}

input SignInPayload {
  account: String!,
  password: String!,
}

type AuthMutations {
  signIn(payload: SignInPayload!): SignInBody
  signUp(payload: SignUpPayload!): SignInBody
}
`
