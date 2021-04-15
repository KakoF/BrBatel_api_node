import { CompanyRequestDto } from "../dto/company-request.dto";
import { CompanyResponseDto } from "../dto/company-response.dto";

export interface ICreateCompanyUseCase {
    create(data: CompanyRequestDto): Promise<CompanyResponseDto>
}
