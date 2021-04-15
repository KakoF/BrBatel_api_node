import { getRepository } from "typeorm"
import { Company } from "../../../../../domain/entities/Company"
import { IPaginateCompanyRepository } from "../IPaginateCompanyRepository"

export class PaginateCompanyRepository implements IPaginateCompanyRepository {
    async paginate(page: number, offset: number, perPage: number): Promise<any> {
        const repository = getRepository(Company)
        const paginationCompany = await repository.createQueryBuilder('user').paginate();
        return paginationCompany
    }

}