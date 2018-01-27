import * as bunyan from 'bunyan'

const logger = bunyan.createLogger({
  name: 'server-api',
})

export default logger
