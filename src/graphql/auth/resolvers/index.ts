import { AppContext, SignInBody, SignInPayload, SignUpPayload } from '../../../types'

const authResolvers = {
  Mutation: {
    auth: () => {
      return {
        signIn: (payload: SignInPayload, context: AppContext): SignInBody => {
          return context.controllers.auth.signIn(payload)
        },
        signUp: ({ payload }: { payload: SignUpPayload }, context: AppContext): Promise<SignInBody> => {
          return context.controllers.auth.signUp(payload)
        },
      }
    },
  },
}

export default authResolvers
