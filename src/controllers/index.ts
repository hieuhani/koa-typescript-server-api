import AuthController from './authController'

export default function getControllers() {
  return {
    auth: new AuthController(),
  }
}
