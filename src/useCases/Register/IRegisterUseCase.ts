import { RegisterRequestDto } from "./dto/register-request.dto";
import { RegisterResponseDto } from "./dto/register-response.dto";

export interface IRegisterUseCase {

    register(data: RegisterRequestDto): Promise<RegisterResponseDto>
}