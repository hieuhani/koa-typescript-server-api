import * as lodash from 'lodash'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ContactType } from '../types'
import { Base } from './base'
import { User } from './user'

@Entity()
export class Contact extends Base {
  @ManyToOne((type) => User, (user) => user.contacts)
  public user: User;

  @Column({ enum: lodash.values(ContactType) })
  public type: string

  @Column()
  public contact: string

  @Column({
    default: false,
  })
  public verified: boolean
}
