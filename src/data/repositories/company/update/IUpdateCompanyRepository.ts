import { Company } from "../../../../domain/entities/Company";
import { CompanyRequestDto } from "../../../../useCases/company/dto/company-request.dto";

export interface IUpdateCompanyRepository {
    update(data: CompanyRequestDto): Promise<Company>
}