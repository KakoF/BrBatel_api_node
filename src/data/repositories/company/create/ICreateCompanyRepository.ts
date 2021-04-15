import { Company } from "../../../../domain/entities/Company";

export interface ICreateCompanyRepository {
    create(data: Company): Promise<Company>
}