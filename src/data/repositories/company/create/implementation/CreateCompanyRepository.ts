import { getRepository } from "typeorm";
import { Company } from "../../../../../domain/entities/Company";
import { ICreateCompanyRepository } from "../ICreateCompanyRepository";

export class CreateCompanyRepository implements ICreateCompanyRepository {
    async create(data: Company): Promise<Company> {
        const repository = getRepository(Company)
        const storeCompany = await repository.create(data)
        await repository.save(storeCompany)
        return storeCompany
    }

}