import { getRepository } from "typeorm";
import { Company } from "../../../../../domain/entities/Company";
import { CompanyRequestDto } from "../../../../../useCases/company/dto/company-request.dto";
import { IUpdateCompanyRepository } from "../IUpdateCompanyRepository";

export class UpdateCompanyRepository implements IUpdateCompanyRepository {
    async update(data: CompanyRequestDto): Promise<Company> {
        const repository = getRepository(Company)
        const updateCompany = await repository.save(data)
        return updateCompany
    }

}