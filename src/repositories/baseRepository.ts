import { Repository } from 'typeorm'
import { Base } from '../models/base'

export class BaseRepository<T extends Base> extends Repository<T> {
}
