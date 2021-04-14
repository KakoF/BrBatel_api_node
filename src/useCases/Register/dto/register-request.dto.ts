//import { IsEmail, IsNotEmpty } from 'class-validator';

import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterRequestDto implements Readonly<RegisterRequestDto> {

    @IsEmail({}, { message: "E-mail deve ser válido" })
    email: string;

    @IsNotEmpty({ message: "Nome é campo obrigatório" })
    nome: string;

    @IsNotEmpty({ message: "Senha é campo obrigatório" })
    senha: string;

}
