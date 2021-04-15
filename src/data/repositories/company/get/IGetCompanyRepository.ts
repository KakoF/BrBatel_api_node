import { Company } from "../../../../domain/entities/Company";

export interface IGetCompanyRepository {
    get(id: string): Promise<Company>
}