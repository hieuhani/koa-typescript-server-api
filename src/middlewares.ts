import { Context } from 'koa'
import AppCache from './cache'
import getControllers from './controllers'
import logger from './libs/logger'
import getRepositories from './repositories'
import { AppContext } from './types'

export async function injectContext(ctx: Context, next: () => Promise<any>) {
  const appContext: AppContext = {
    repositories: getRepositories(),
    controllers: getControllers(),
  }
  AppCache.put('context', appContext)
  ctx.state.appContext = appContext
  await next()
}

export async function validateToken(ctx: Context, next: () => Promise<any>) {
  const authHeader = ctx.headers.authorization
  if (authHeader) {
    const jwtToken = authHeader.split(' ')[1]
    const user = await ctx.state.appContext.controllers.auth.verifyToken(jwtToken)
    if (user) {
      ctx.state.currentUser = user
    }
  }
  await next()
}
