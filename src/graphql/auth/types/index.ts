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

type AuthMutations {
  signIn(account: String!, password: String!): SignInBody
  signUp(payload: SignUpPayload!): SignInBody
}
`
