import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import * as Koa from 'koa'
import { Context } from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import AppCache from './cache'
import { AppContext } from './types'

import config from './config'
import getControllers from './controllers'
import graphQLSchema from './graphql/schema'
import logger from './libs/logger'
import getRepositories from './repositories'

createConnection(config.database).then(async (connection) => {
  const app = new Koa()
  const router = new Router()
  app.use(bodyParser())

  app.use(async (ctx, next) => {
    const appContext: AppContext = {
      repositories: getRepositories(),
      controllers: getControllers(),
    }
    AppCache.put('context', appContext)
    await next()
  })

  router.post('/graphql', graphqlKoa((ctx) => ({
    schema: graphQLSchema,
    context: AppCache.get('context'),
  })))

  router.get(
    '/graphiql',
    graphiqlKoa({
      endpointURL: '/graphql',
    }),
  )

  app.use(router.routes())
  app.use(router.allowedMethods())
  app.listen(config.port)
  logger.info(`Server is running on port ${config.port}`)
}).catch((error) => logger.error(error))
