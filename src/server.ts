import * as Koa from 'koa'
import { Context } from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import config from './config'

createConnection(config.database).then(async (connection) => {
  const app = new Koa()
  const router = new Router()
  app.use(bodyParser())

  router.get('/', (ctx: Context) => {
    ctx.body = 'Hello world?'
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
  app.listen(config.port)
  console.log(`Server is running on port ${config.port}`) // tslint:disable-line no-console
}).catch((error) => console.log(error)) // tslint:disable-line no-console
