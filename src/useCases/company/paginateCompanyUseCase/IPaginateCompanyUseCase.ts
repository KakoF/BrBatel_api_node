import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IPaginateCompanyUseCase {
    paginate(page: number, perPage: number, keyword: string): Promise<any[]>
}