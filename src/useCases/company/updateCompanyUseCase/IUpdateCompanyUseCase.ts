import { CompanyRequestDto } from "../dto/company-request.dto";
import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IUpdateCompanyUseCase {
    update(id: string, data: CompanyRequestDto): Promise<CompanyResponseDto>
}