import { CompanyResponseDto } from "../dto/company-response.dto";

export interface IPaginateCompanyUseCase {
    paginate(page: number, offset: number, perPage: number): Promise<any[]>
}