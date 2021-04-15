import { DeleteCompanyRepository } from "../../../../data/repositories/company/delete/implementation/DeleteCompanyRepository"
import { DeleteCompanyUseCase } from "../../../../useCases/company/deleteCompanyUseCase/implementation/DeleteCompanyUseCase"
import { DeleteCompanyController } from "./DeleteCompanyController"

const _repository = new DeleteCompanyRepository()
const _service = new DeleteCompanyUseCase(_repository)
const deleteCompanyController = new DeleteCompanyController(_service)

export { deleteCompanyController }
