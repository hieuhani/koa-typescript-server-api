import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import * as Koa from 'koa'
import { Context } from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

import config from './config'
import graphQLSchema from './graphql/schema'
import logger from './libs/logger'

createConnection(config.database).then(async (connection) => {
  const app = new Koa()
  const router = new Router()
  app.use(bodyParser())

  router.get('/', (ctx: Context) => {
    ctx.body = 'Hello world'
  })

  router.post('/graphql', graphqlKoa({ schema: graphQLSchema }));
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
