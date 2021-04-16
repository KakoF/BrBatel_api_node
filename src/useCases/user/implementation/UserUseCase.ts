import { ILoginRepository } from "../../../data/repositories/login/ILogin"
import { IUserRepository } from "../../../data/repositories/user/IUser"
import { IBcrypt } from "../../../providers/IBcrypt"
import { IToken } from "../../../providers/IToken"
import { UserResponseDto } from "../dto/user-response.dto"
import { IUserUseCase } from "../IUserUseCase"

export class UserUseCase implements IUserUseCase {
  private _repository: IUserRepository
  constructor(repository: IUserRepository) {
    this._repository = repository
  }

  async user(id: string): Promise<UserResponseDto> {
    const user = UserResponseDto.from(await this._repository.user(id))
    return user
  }
}
