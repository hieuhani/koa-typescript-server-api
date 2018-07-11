import { Context } from 'koa'
import AppCache from './cache'
import getControllers from './controllers'
import getRepositories from './repositories'
import { AppContext, InjectContextOptions } from './types'

export function injectContext(options: InjectContextOptions) {
  return async (ctx: Context, next: () => Promise<any>) => {
    const appContext: AppContext = {
      repositories: getRepositories(),
      controllers: getControllers(),
      connection: options.connection,
    }
    AppCache.put('context', appContext)
    ctx.state.appContext = appContext
    await next()
  }
}

export async function validateToken(ctx: Context, next: () => Promise<any>) {
  let jwtToken
  if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
    jwtToken = ctx.headers.authorization.split(' ')[1]
  } else if (ctx.query && ctx.query.token) {
    jwtToken = ctx.query.token
  }
  if (jwtToken) {
    const user = await ctx.state.appContext.controllers.auth.verifyToken(jwtToken)
    if (user) {
      AppCache.put('currentUser', user)
      ctx.state.currentUser = user
    }
  }
  await next()
}
