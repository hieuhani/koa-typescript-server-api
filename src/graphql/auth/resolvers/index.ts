import { AppContext, SignInBody, SignInPayload } from '../../../types'

const authResolvers = {
  Mutation: {
    auth: () => {
      return {
        signIn: (payload: SignInPayload, context: AppContext): SignInBody => {
          return context.controllers.auth.signIn(payload)
        },
      }
    },
  },
}

export default authResolvers
