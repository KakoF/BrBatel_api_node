import { UserRepository } from "../../../data/repositories/user/implementation/User"
import { UserUseCase } from "../../../useCases/user/implementation/UserUseCase"
import { UserController } from "./UserController"

const _repository = new UserRepository()
const _service = new UserUseCase(_repository)
const userController = new UserController(_service)

export { userController }
