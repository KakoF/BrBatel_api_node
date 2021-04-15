import { getRepository } from "typeorm";
import { Company } from "../../../../../domain/entities/Company";
import { IDeleteCompanyRepository } from "../IDeleteCompanyRepository";

export class DeleteCompanyRepository implements IDeleteCompanyRepository {
    async delete(id: string): Promise<boolean> {
        const repository = getRepository(Company)
        const data = await repository.delete(id)
        if (data.affected)
            return true;
        return false;
    }

}