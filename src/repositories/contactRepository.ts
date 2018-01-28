import { EntityRepository } from 'typeorm'
import { Contact } from '../models/contact'
import { BaseRepository } from './baseRepository'

@EntityRepository(Contact)
export class ContactRepository extends BaseRepository<Contact> {
}
