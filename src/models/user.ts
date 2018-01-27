import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Base } from './base'
import { Contact } from './contact'

@Entity()
export class User extends Base {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  passwordHash: string

  @OneToMany((type) => Contact, (contact) => contact.user)
  contacts: Contact[];
}
