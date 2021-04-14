import { LoginRequestDto } from "./dto/login-request.dto";
import { LoginResponseDto } from "./dto/login-response.dto";

export interface ILoginUseCase {

    login(user: LoginRequestDto): Promise<LoginResponseDto>
}