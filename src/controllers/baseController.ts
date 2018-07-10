import AppCache from '../cache'
import { AppContext, User } from '../types'

export default class BaseController {
  get appContext(): AppContext {
    return AppCache.get('context')
  }

  get currentUser(): User {
    return AppCache.get('currentUser')
  }
}
