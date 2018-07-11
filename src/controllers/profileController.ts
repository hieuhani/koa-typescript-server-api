import { Metadata, User } from '../types'
import BaseController from './baseController'

export default class ProfileController extends BaseController {
  public async metadata(currentUser: User): Promise<Metadata> {
    const contacts = await this.appContext.repositories.contact.find({
      where: {
        user: currentUser.id,
      },
    })
    const user = currentUser
    user.contacts = contacts
    return Promise.resolve({
      user,
    })
  }
}
