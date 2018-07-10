import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import config from './config'
import GlobalContext from './Context'
import graphQLSchema from './graphql/schema'
import logger from './libs/logger'
import { injectContext, validateToken } from './middlewares'

createConnection(config.database).then(async (connection) => {
  const app = new Koa()
  const router = new Router()
  app.use(bodyParser())
  app.use(injectContext({
    connection,
  }))
  app.use(validateToken)

  router.post('/graphql', graphqlKoa((ctx) => ({
    schema: graphQLSchema,
    context: new GlobalContext(ctx),
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
