import { GlobalContext, SignInBody, SignInPayload, SignUpPayload } from '../../../types'

const authResolvers = {
  Mutation: {
    auth: () => {
      return {
        signIn: ({ payload }: { payload: SignInPayload }, context: GlobalContext): Promise<SignInBody> => {
          return context.app.controllers.auth.signIn(payload)
        },
        signUp: ({ payload }: { payload: SignUpPayload }, context: GlobalContext): Promise<SignInBody> => {
          return context.app.controllers.auth.signUp(payload)
        },
      }
    },
  },
}

export default authResolvers
