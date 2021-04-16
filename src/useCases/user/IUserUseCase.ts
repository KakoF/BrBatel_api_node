import { UserResponseDto } from "./dto/user-response.dto";

export interface IUserUseCase {

    user(id: string): Promise<UserResponseDto>
}