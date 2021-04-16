import { User } from "../../../domain/entities/User";

export interface IUserRepository {
    user(id: string): Promise<User>
}
