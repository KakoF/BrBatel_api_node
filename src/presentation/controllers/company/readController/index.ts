import { ReadCompanyRepository } from "../../../../data/repositories/company/read/implementation/ReadCompanyRepository"
import { ReadCompanyUseCase } from "../../../../useCases/company/readCompanyUseCase/implementation/ReadCompanyUseCase"
import { ReadCompanyController } from "./ReadCompanyController"

const _repository = new ReadCompanyRepository()
const _service = new ReadCompanyUseCase(_repository)
const readCompanyController = new ReadCompanyController(_service)

export { readCompanyController }
