import { getRepository } from 'typeorm'
import { User } from '../../../../domain/entities/User'
import { IUserRepository } from '../IUser'

export class UserRepository implements IUserRepository {
    async user(id: string): Promise<User> {
        const repository = getRepository(User)
        const user = await repository.findOne(id)
        return user
    }
}
