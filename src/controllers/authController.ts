import * as bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import * as validator from 'validator'
import config from '../config'
import { ContactType, JwtToken, SignInBody, SignInPayload, SignUpPayload } from '../types'
import BaseController from './baseController'

export default class AuthController extends BaseController {
  public signIn(payload: SignInPayload): SignInBody {
    return {
      token: 'handle sign in token here',
    }
  }

  public async signUp(payload: SignUpPayload): Promise<SignInBody> {
    // TODO: Add body validator
    const currentContact = await this.appContext.repositories.contact.findOne({
      where: {
        contact: payload.contact,
      },
    })
    const contactType = validator.isEmail(payload.contact) ? ContactType.email : ContactType.phone
    if (currentContact) {
      let message: string = ''
      if (currentContact.verified) {
        message = `Your email ${payload.contact} has been registered.`
      } else {
        message = `Your email ${payload.contact} has been registered but unverified,
        you might check your inbox to verify your email`
      }
      throw new Error(message)
    }
    const userRepository = this.appContext.repositories.user
    const contactRepository = this.appContext.repositories.contact

    const user = await userRepository.save(userRepository.create({
      firstName: payload.firstName,
      lastName: payload.lastName,
      passwordHash: await bcrypt.hash(payload.password, 10),
    }))

    const contact = await contactRepository.save(this.appContext.repositories.contact.create({
      user,
      type: contactType,
      verified: false,
      contact: payload.contact,
    }))

    const tokenPayload: JwtToken = {
      userId: user.id,
      contactId: contact.id,
    }
    const signedToken = sign(tokenPayload, config.jwtSecret)

    return {
      token: signedToken,
    }
  }
}
