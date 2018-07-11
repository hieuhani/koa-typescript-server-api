import { GlobalContext, Metadata } from '../../../types'

const profileResolvers = {
  Query: {
    profile: () => {
      return {
        metadata: (payload: any, context: GlobalContext): Promise<Metadata> => {
          context.requireUser()
          return context.app.controllers.profile.metadata(context.currentUser)
        },
      }
    },
  },
}

export default profileResolvers
