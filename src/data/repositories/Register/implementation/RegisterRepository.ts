import { getRepository } from 'typeorm'
import { User } from '../../../../domain/entities/User'
import { IRegisterRepository } from '../IRegisterRepository'

export class RegisterRepository implements IRegisterRepository {
    async register(user: User): Promise<User> {

        const repository = getRepository(User)
        const data = await repository.create(user)
        await repository.save(data)
        return data
    }
}
