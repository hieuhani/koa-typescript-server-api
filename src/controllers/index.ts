import { Context } from 'koa'
import AuthController from './authController'

export default function getControllers() {
  return {
    auth: new AuthController(),
  }
}

export interface Controllers {
  auth: AuthController,
}
