export default `
type SignInBody {
  token: String!
}

enum ContactType {
  GOOGLE
  FACEBOOK
  PHONE
  EMAIL
}

input SignUpPayload {
  firstName: String!,
  lastName: String!,
  contact: String!,
  password: String!,
  type: ContactType,
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
