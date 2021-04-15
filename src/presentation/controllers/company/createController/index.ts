import { CreateCompanyRepository } from "../../../../data/repositories/company/create/implementation/CreateCompanyRepository"
import { CreateCompanyUseCase } from "../../../../useCases/company/createCompanyUseCase/implementation/CreateCompanyUseCase"
import { CreateCompanyController } from "./CreateCompanyController"

const _repository = new CreateCompanyRepository()
const _service = new CreateCompanyUseCase(_repository)
const createCompanyController = new CreateCompanyController(_service)

export { createCompanyController }
