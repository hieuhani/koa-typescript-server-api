import { Connection } from 'typeorm'
import GlobalContext from '../Context'
import { Controllers } from '../controllers'
import { User } from '../models/user'
import { Repositories } from '../repositories'

export enum ContactType {
  google = 'google',
  facebook = 'facebook',
  phone = 'phone',
  email = 'email',
}

export interface AppContext {
  repositories: Repositories,
  controllers: Controllers,
  connection: Connection,
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

export interface InjectContextOptions {
  connection: Connection,
}

export interface SignInBody {
  token: string,
}

export interface Metadata {
  user: User,
}

export interface JwtToken {
  userId: string,
  contactId: string,
}

export {
  Controllers,
  Repositories,
  User,
  GlobalContext,
}
