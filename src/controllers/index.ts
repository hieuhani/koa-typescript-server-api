import AuthController from './authController'
import ProfileController from './profileController'

export default function getControllers() {
  return {
    auth: new AuthController(),
    profile: new ProfileController(),
  }
}

export interface Controllers {
  auth: AuthController,
  profile: ProfileController,
}
