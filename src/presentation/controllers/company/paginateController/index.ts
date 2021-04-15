import { PaginateCompanyRepository } from "../../../../data/repositories/company/paginate/implementation/PaginateCompanyRepository"
import { PaginateCompanyUseCase } from "../../../../useCases/company/paginateCompanyUseCase/implementation/PaginateCompanyUseCase"
import { PaginateCompanyController } from "./PaginateCompanyController"

const _repository = new PaginateCompanyRepository()
const _service = new PaginateCompanyUseCase(_repository)
const paginateCompanyController = new PaginateCompanyController(_service)

export { paginateCompanyController }
