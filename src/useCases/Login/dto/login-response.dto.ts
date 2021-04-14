import { User } from "../../../domain/entities/User";

export class LoginResponseDto implements Readonly<LoginResponseDto> {
    id: string;
    nome: string;
    email: string;

    public static from(entity: User): LoginResponseDto {
        const response = new LoginResponseDto();
        response.id = entity.id
        response.nome = entity.nome
        response.email = entity.email
        return response
    }
}