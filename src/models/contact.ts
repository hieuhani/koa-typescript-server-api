import * as lodash from 'lodash'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ContactType } from '../types'
import { Base } from './base'
import { User } from './user'

@Entity()
export class Contact extends Base {
  @ManyToOne((type) => User, (user) => user.contacts)
  user: User;

  @Column({
    enum: lodash.values(ContactType),
  })
  type: string

  @Column()
  contact: string

  @Column({
    default: false,
  })
  verified: boolean
}
