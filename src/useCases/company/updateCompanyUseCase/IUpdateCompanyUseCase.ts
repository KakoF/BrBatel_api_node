import { CompanyRequestDto } from "../dto/company-request.dto";
import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IUpdateCompanyUseCase {
    update(userId: string, id: string, data: CompanyRequestDto): Promise<CompanyResponseDto>
}