import * as assert from 'assert'
import { ConnectionOptions } from 'typeorm'
import './libs/loadEnv'

assert(process.env.DATABASE_URL, 'DATABASE_URL must be set')

export interface IConfig {
  port: number,
  env: string,
  database: ConnectionOptions,
}

const config: IConfig = {
  port: Number(process.env.PORT || 3000),
  env: process.env.NODE_ENV || 'development',
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      `${__dirname}/models/*.ts`,
    ],
    synchronize: true,
  },
}

export default config
