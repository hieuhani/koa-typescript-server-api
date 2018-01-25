export interface IConfig {
  port: number,
  env: string,
}

const config: IConfig = {
  port: Number(process.env.PORT || 3000),
  env: process.env.NODE_ENV,
}

export default config
