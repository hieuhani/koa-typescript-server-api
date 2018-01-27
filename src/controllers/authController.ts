import { SignInBody, SignInPayload } from '../types'

export default class AuthController {
  public signIn(payload: SignInPayload): SignInBody {
    return {
      token: 'handle sign in token here',
    }
  }
}
