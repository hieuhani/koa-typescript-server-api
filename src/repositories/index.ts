import { getCustomRepository } from 'typeorm'
import { ContactRepository } from './contactRepository'
import { UserRepository } from './userRepository'

export default function getRepositories() {
  return {
    user: getCustomRepository(UserRepository),
    contact: getCustomRepository(ContactRepository),
  }
}

export interface Repositories {
  user: UserRepository,
  contact: ContactRepository,
}
