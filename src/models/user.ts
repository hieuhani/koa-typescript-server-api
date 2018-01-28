import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Base } from './base'
import { Contact } from './contact'

@Entity()
export class User extends Base {
  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @OneToMany((type) => Contact, (contact) => contact.user)
  public contacts: Contact[];

  @Column()
  public passwordHash: string
}
