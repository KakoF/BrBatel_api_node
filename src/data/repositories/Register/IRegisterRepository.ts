import { User } from "../../../domain/entities/User";

export interface IRegisterRepository {
    register(user: User): Promise<User>
}
