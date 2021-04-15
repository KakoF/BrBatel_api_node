import { LoginResponseDto } from "../useCases/login/dto/login-response.dto";

export interface IToken {
    generateAccess(user: LoginResponseDto): any
}