import { getRepository } from "typeorm";
import { Company } from "../../../../../domain/entities/Company";
import { IReadCompanyRepository } from "../IReadCompanyRepository";

export class ReadCompanyRepository implements IReadCompanyRepository {
    async read(): Promise<Company[]> {
        const repository = getRepository(Company)
        const companies = await repository.find()
        return companies
    }

}
