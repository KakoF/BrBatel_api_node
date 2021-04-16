import { ICreateCompanyRepository } from "../../../../data/repositories/company/create/ICreateCompanyRepository"
import { Company } from "../../../../domain/entities/Company"
import { CompanyRequestDto } from "../../dto/company-request.dto"
import { CompanyResponseDto } from "../../dto/company-response.dto"
import { ICreateCompanyUseCase } from "../ICreateCompanyUseCase"
import { IValidation } from "../../../../providers/IValidation"

export class CreateCompanyUseCase implements ICreateCompanyUseCase {
    private _repository: ICreateCompanyRepository
    private _validation: IValidation
    constructor(repository: ICreateCompanyRepository, validation: IValidation) {
        this._repository = repository
        this._validation = validation
    }

    async create(userId: string, data: CompanyRequestDto): Promise<CompanyResponseDto> {
        this._validation.isValidCnpj(data.cnpj)
        const company = await CompanyRequestDto.from(userId, data)
        const newCompany = new Company(company.userId, company.nome, company.cnpj, company.demanda, company.faturamento_anual, company.sobre)
        const register = await this._repository.create(newCompany)
        return CompanyResponseDto.from(register)
    }
}
