import { GetCompanyRepository } from "../../../../data/repositories/company/get/implementation/GetCompanyRepository"
import { GetCompanyUseCase } from "../../../../useCases/company/getCompanyUseCase/implementation/GetCompanyUseCase"
import { GetCompanyController } from "./GetCompanyController"

const _repository = new GetCompanyRepository()
const _service = new GetCompanyUseCase(_repository)
const getCompanyController = new GetCompanyController(_service)

export { getCompanyController }
