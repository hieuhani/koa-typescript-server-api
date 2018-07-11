export default `
type Contact {
  contact: String!
  verified: Boolean!
  type: ContactType!
}

type User {
  id: String!
  firstName: String!
  lastName: String!
  contacts: [Contact]
}

type Metadata {
  user: User!
}

type ProfileQueries {
  metadata: Metadata
}
`
