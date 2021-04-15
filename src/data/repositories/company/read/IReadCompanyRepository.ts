import { Company } from "../../../../domain/entities/Company";

export interface IReadCompanyRepository {
    read(): Promise<Company[]>
}