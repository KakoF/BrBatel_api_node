import { getRepository } from "typeorm";
import { Company } from "../../../../../domain/entities/Company";
import { IGetCompanyRepository } from "../IGetCompanyRepository";

export class GetCompanyRepository implements IGetCompanyRepository {
    async get(id: string): Promise<Company> {
        const repository = getRepository(Company)
        const data = await repository.findOne(id, { relations: ["user"] })
        return data
    }

}