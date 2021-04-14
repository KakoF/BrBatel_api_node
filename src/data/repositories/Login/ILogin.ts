import { User } from "../../../domain/entities/User";

export interface ILoginRepository {
    login(email: string): Promise<User>
}
