import * as assert from 'assert'

assert(process.env.DATABASE_URL, 'DATABASE_URL must be set')

export interface IConfig {
  port: number,
  env: string,
  databaseUrl: string,
}

const config: IConfig = {
  port: Number(process.env.NODE_ENV || 3000),
  env: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
}

export default config
