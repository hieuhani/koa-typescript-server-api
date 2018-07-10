import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from '../types'
import { Base } from './base'
import { Contact } from './contact'

@Entity()
export class User extends Base {
  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column({
    default: 1,
  })
  public rolesMask: number

  @OneToMany((type) => Contact, (contact) => contact.user)
  public contacts: Contact[]

  @Column()
  public passwordHash: string

  public get roles() {
    const roles = []
    if (this.rolesMask & UserRole.Normal) {
      roles[roles.length] = 'Normal User'
    }
    if (this.rolesMask & UserRole.Administrator) {
      roles[roles.length] = 'Administrator'
    }
    return roles
  }

  public hasRole(role: UserRole) {
    return !!(this.rolesMask & role)
  }

  public isAdmin() {
    return this.hasRole(UserRole.Administrator)
  }
}
