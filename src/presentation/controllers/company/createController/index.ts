import { CreateCompanyRepository } from "../../../../data/repositories/company/create/implementation/CreateCompanyRepository"
import { Validation } from "../../../../providers/implementations/Validation"
import { CreateCompanyUseCase } from "../../../../useCases/company/createCompanyUseCase/implementation/CreateCompanyUseCase"
import { CreateCompanyController } from "./CreateCompanyController"

const _repository = new CreateCompanyRepository()
const _validation = new Validation()
const _service = new CreateCompanyUseCase(_repository, _validation)
const createCompanyController = new CreateCompanyController(_service)

export { createCompanyController }
