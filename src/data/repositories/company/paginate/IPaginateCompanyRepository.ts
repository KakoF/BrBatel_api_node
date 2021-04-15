import { Company } from "../../../../domain/entities/Company";

export interface IPaginateCompanyRepository {
    paginate(page: number, offset: number, perPage: number): Promise<Company[]>
}