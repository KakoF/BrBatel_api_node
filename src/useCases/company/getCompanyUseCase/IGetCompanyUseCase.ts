import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IGetCompanyUseCase {
    get(id: string): Promise<CompanyResponseDto>
}