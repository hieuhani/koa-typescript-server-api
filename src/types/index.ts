import { Controllers } from '../controllers'
import { Repositories } from '../repositories'

export enum ContactType {
  google = 'google',
  facebook = 'facebook',
  phone = 'phone',
  email = 'email',
}

export enum UserRole {
  Banned = 0,
  Normal = 1,
  Administrator = 8,
}

export interface AppContext {
  repositories: Repositories,
  controllers: Controllers,
}

export interface SignInPayload {
  account: string,
  password: string,
}

export interface SignUpPayload {
  firstName: string,
  lastName: string,
  contact: string,
  password: string,
  type: ContactType,
}

export interface SignInBody {
  token: string,
}

export interface JwtToken {
  userId: string,
  contactId: string,
}

export {
  Controllers,
  Repositories,
}
