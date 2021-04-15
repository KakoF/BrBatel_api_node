import { IPaginateCompanyRepository } from "../../../../data/repositories/company/paginate/IPaginateCompanyRepository";
import { CompanyResponseDto } from "../../dto/company-response.dto";
import { ListCompanyUserResponseDto } from "../../dto/list-company-user-response.dto";
import { IPaginateCompanyUseCase } from "../IPaginateCompanyUseCase";

export class PaginateCompanyUseCase implements IPaginateCompanyUseCase {
    private _repository: IPaginateCompanyRepository
    constructor(repository: IPaginateCompanyRepository) {
        this._repository = repository
    }
    async paginate(page: number, perPage: number, keyword: string): Promise<any> {
        const data = await this._repository.paginate(page, perPage, keyword);
        const { result, total } = data;
        const companies = ListCompanyUserResponseDto.from(result)
        return { companies, total }
    }
}