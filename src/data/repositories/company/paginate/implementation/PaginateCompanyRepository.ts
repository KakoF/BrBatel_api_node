import { getRepository, Like } from "typeorm"
import { Company } from "../../../../../domain/entities/Company"
import { IPaginateCompanyRepository } from "../IPaginateCompanyRepository"

export class PaginateCompanyRepository implements IPaginateCompanyRepository {
    async paginate(page: number, perPage: number, keyword: string): Promise<any> {
        keyword = keyword || ''
        const jumpRegister = page * perPage
        const repository = getRepository(Company)
        const [result, total] = await repository.findAndCount(
            {
                relations: ["user"],
                where: { nome: Like('%' + keyword + '%') }, order: { nome: "ASC" },
                take: perPage,
                skip: jumpRegister
            },
        )

        return { result, total }
    }

}