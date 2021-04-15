import { ICreateCompanyRepository } from "../../../../data/repositories/company/create/ICreateCompanyRepository"
import { Company } from "../../../../domain/entities/Company"
import { CompanyRequestDto } from "../../dto/company-request.dto"
import { CompanyResponseDto } from "../../dto/company-response.dto"
import { ICreateCompanyUseCase } from "../ICreateCompanyUseCase"

export class CreateCompanyUseCase implements ICreateCompanyUseCase {
    private _repository: ICreateCompanyRepository
    constructor(repository: ICreateCompanyRepository) {
        this._repository = repository
    }

    async create(userId: string, data: CompanyRequestDto): Promise<CompanyResponseDto> {
        const company = await CompanyRequestDto.from(userId, data)
        const newCompany = new Company(company.userId, company.nome, company.cnpj, company.demanda, company.faturamento_anual)
        const register = await this._repository.create(newCompany)
        return CompanyResponseDto.from(register)
    }
}
