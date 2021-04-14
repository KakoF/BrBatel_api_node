import { getRepository } from 'typeorm'
import { User } from '../../../../domain/entities/User'
import { ILoginRepository } from '../ILogin'

export class LoginRepository implements ILoginRepository {
    async login(email: string): Promise<User> {
        const repository = getRepository(User)
        const user = await repository.findOne({ where: { email } })
        return user
    }
}
