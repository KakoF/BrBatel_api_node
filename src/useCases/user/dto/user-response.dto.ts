import { User } from "../../../domain/entities/User";

export class UserResponseDto implements Readonly<UserResponseDto> {
    id: string;
    nome: string;
    email: string;

    public static from(entity: User): UserResponseDto {
        const response = new UserResponseDto();
        response.id = entity.id
        response.nome = entity.nome
        response.email = entity.email
        return response
    }
}