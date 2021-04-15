import { ILoginRepository } from "../../../data/repositories/login/ILogin"
import { IBcrypt } from "../../../providers/IBcrypt"
import { IToken } from "../../../providers/IToken"
import { LoginRequestDto } from "../dto/login-request.dto"
import { LoginResponseDto } from "../dto/login-response.dto"
import { ILoginUseCase } from "../ILoginUseCase"

export class LoginUseCase implements ILoginUseCase {
  private _repository: ILoginRepository
  private _bcrypt: IBcrypt
  private _token: IToken
  constructor(repository: ILoginRepository, bcrypt: IBcrypt, token: IToken) {
    this._repository = repository
    this._bcrypt = bcrypt
    this._token = token
  }

  async login(data: LoginRequestDto): Promise<any> {
    const dto = await LoginRequestDto.from(data)
    const user = await this._repository.login(dto.email)
    if (!user) throw new Error('Usuário inválido')

    const isValidPassword = await this._bcrypt.compare(user.senha, data.senha)
    if (!isValidPassword) throw new Error('Senha inválida')
    const dataUser = LoginResponseDto.from(user)
    var token = await this._token.generateAccess({ id: dataUser.id, nome: dataUser.nome, email: dataUser.email })
    return { user: dataUser, token }
  }
}
