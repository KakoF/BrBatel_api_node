import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IReadCompanyUseCase {
    read(): Promise<CompanyResponseDto[]>
}