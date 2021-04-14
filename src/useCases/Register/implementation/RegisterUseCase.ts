import { IRegisterRepository } from "../../../data/repositories/Register/IRegisterRepository"
import { User } from "../../../domain/entities/User"
import { IBcrypt } from "../../../providers/IBcrypt"
import { RegisterRequestDto } from "../dto/register-request.dto"
import { RegisterResponseDto } from "../dto/register-response.dto"
import { IRegisterUseCase } from "../IRegisterUseCase"

export class RegisterUseCase implements IRegisterUseCase {
  private _repository: IRegisterRepository
  private _bcrypt: IBcrypt
  constructor(repository: IRegisterRepository, bcrypt: IBcrypt) {
    this._repository = repository
    this._bcrypt = bcrypt
  }

  async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    const user = await RegisterRequestDto.from(data)
    const newUser = new User(user.nome, user.email, this._bcrypt.crypt(user.senha))
    const register = await this._repository.register(newUser)
    return RegisterResponseDto.from(register)
  }
}
