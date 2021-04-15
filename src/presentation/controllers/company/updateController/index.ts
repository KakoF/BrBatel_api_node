import { GetCompanyRepository } from "../../../../data/repositories/company/get/implementation/GetCompanyRepository"
import { UpdateCompanyRepository } from "../../../../data/repositories/company/update/implementation/UpdateCompanyRepository"
import { UpdateCompanyUseCase } from "../../../../useCases/company/updateCompanyUseCase/implementation/UpdateCompanyUseCase"
import { UpdateCompanyController } from "./UpdateCompanyController"

const _repository = new UpdateCompanyRepository()
const _getRepository = new GetCompanyRepository()
const _service = new UpdateCompanyUseCase(_repository, _getRepository)
const updateCompanyController = new UpdateCompanyController(_service)

export { updateCompanyController }
