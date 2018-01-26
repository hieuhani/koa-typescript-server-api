import * as assert from 'assert'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as Knex from 'knex'
import task from './task'

let nodeEnv: string
if (process.env.NODE_ENV) {
  nodeEnv = process.env.NODE_ENV
} else {
  // tslint:disable-next-line
  console.warn('NODE_ENV is not set, automatically infered to development')
  nodeEnv = 'development'
}
dotenv.config({ path: `.env.${nodeEnv}` })

const commands = ['make_migration', 'migrate']
const command = process.argv[2];

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  debug: process.env.DEBUG_SQL === 'true',
  migrations: {
    tableName: 'migrations',
  },
}

function padDate(segment): string {
  segment = segment.toString();
  return segment[1] ? segment : `0${segment}`;
}

function yyyymmddhhmmss(): string {
  const d = new Date()
  return `${d.getFullYear().toString()
    }${padDate(d.getMonth() + 1)
    }${padDate(d.getDate())
    }${padDate(d.getHours()) + padDate(d.getMinutes())
    }${padDate(d.getSeconds())}`
}

export default task('database', async () => {
  if (!~commands.indexOf(command)) {
    throw new Error(`Unknown command ${command}.`)
  }
  let db: Knex
  try {
    switch (command) {
      case 'make_migration': {
        const migrationName = process.argv[3]
        if (!migrationName) {
          throw new Error('Migration name must be specified: yarn make:migration create_users for example')
        }
        fs.writeFileSync(
          `migrations/${yyyymmddhhmmss()}_${migrationName}.ts`,
          `import * as Knex from 'knex'
exports.up = function up(knex: Knex): Promise<any> {
}

exports.down = function down(knex: Knex): Promise<any> {
}`,
          'utf8',
        )
        break
      }
      case 'migrate': {
        db = Knex(knexConfig)
        await db.migrate.latest()
        break
      }
      default:
        break
    }
  } finally {
    if (db) {
      await db.destroy()
    }
  }
})
