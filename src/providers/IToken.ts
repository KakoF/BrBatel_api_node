import { LoginResponseDto } from "../useCases/Login/dto/login-response.dto";

export interface IToken {
    generateAccess(user: LoginResponseDto): any
}