
import { Context } from 'koa'
import { AppContext, User } from './types'

export default class GlobalContext {
  public currentUser: User
  public app: AppContext

  constructor(context: Context) {
    this.currentUser = context.state.currentUser
    this.app = context.state.appContext
  }

  public requireUser() {
    if (!this.currentUser) {
      throw new Error('Require user to be logged in')
    }
  }
}
