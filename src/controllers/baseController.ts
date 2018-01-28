import { Context } from 'koa'
import AppCache from '../cache'
import { AppContext, Controllers, Repositories } from '../types'

export default class BaseController {
  get appContext(): AppContext {
    return AppCache.get('context')
  }
}
