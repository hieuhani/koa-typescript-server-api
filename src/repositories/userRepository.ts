import { EntityRepository } from 'typeorm'
import { User } from '../models/user'
import { BaseRepository } from './baseRepository'

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {

}
