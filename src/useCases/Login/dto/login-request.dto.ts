export class LoginRequestDto implements Readonly<LoginRequestDto> {
    email: string;
    senha: string;

    public static from(dto: Partial<LoginRequestDto>) {
        const it = new LoginRequestDto();
        it.email = dto.email;
        it.senha = dto.senha;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!it.email) throw new Error('E-mail é campo obrigatório')
        if (!re.test(String(it.email).toLowerCase())) throw new Error('E-mail não é válido')
        if (!it.senha) throw new Error('Senha é campo obrigatório')
        return it;
    }



}
