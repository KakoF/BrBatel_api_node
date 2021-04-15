import { LoginRepository } from "../../../data/repositories/login/implementation/Login"
import { Bcrypt } from "../../../providers/implementations/Bcrypt"
import { Token } from "../../../providers/implementations/Token"
import { LoginUseCase } from "../../../useCases/login/implementation/LoginUseCase"
import { LoginController } from "./LoginController"

const _repository = new LoginRepository()
const _bcrypt = new Bcrypt()
const _token = new Token()
const _service = new LoginUseCase(_repository, _bcrypt, _token)
const loginController = new LoginController(_service)

export { loginController }
