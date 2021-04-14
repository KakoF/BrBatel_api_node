import { User } from "../../../domain/entities/User";

export class RegisterResponseDto implements Readonly<RegisterResponseDto> {
    id: string;
    nome: string;
    email: string;

    public static from(entity: User): RegisterResponseDto {
        const response = new RegisterResponseDto();
        response.id = entity.id
        response.nome = entity.nome
        response.email = entity.email
        return response
    }
}