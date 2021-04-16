import { DeleteCompanyRepository } from "../../../../data/repositories/company/delete/implementation/DeleteCompanyRepository"
import { GetCompanyRepository } from "../../../../data/repositories/company/get/implementation/GetCompanyRepository"
import { DeleteCompanyUseCase } from "../../../../useCases/company/deleteCompanyUseCase/implementation/DeleteCompanyUseCase"
import { DeleteCompanyController } from "./DeleteCompanyController"

const _repository = new DeleteCompanyRepository()
const _getRepository = new GetCompanyRepository()
const _service = new DeleteCompanyUseCase(_repository, _getRepository)
const deleteCompanyController = new DeleteCompanyController(_service)

export { deleteCompanyController }
