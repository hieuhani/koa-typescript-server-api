import * as Koa from 'koa'
import { Context } from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import config from './config'

const app = new Koa()
const router = new Router()
app.use(bodyParser())

router.post('/echo', (ctx: Context) => {
  ctx.body = ctx.request.body
})

router.get('/', (ctx: Context) => {
  ctx.body = 'Hello world?'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(config.port)
