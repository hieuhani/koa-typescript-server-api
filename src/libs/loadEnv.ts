import * as dotenv from 'dotenv'

let nodeEnv: string
if (process.env.NODE_ENV) {
  nodeEnv = process.env.NODE_ENV
} else {
  // tslint:disable-next-line
  console.warn('NODE_ENV is not set, automatically infered to development')
  nodeEnv = 'development'
}
dotenv.config({ path: `.env.${nodeEnv}` })
