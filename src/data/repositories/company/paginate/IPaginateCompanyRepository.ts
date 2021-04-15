import { Company } from "../../../../domain/entities/Company";

export interface IPaginateCompanyRepository {
    paginate(page: number, perPage: number, keyword: string): Promise<any>
}