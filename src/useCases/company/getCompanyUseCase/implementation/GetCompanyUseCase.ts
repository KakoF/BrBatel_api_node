import { IGetCompanyRepository } from "../../../../data/repositories/company/get/IGetCompanyRepository";
import { CompanyResponseDto } from "../../dto/company-response.dto";
import { IGetCompanyUseCase } from "../IGetCompanyUseCase";

export class GetCompanyUseCase implements IGetCompanyUseCase {
    private _repository: IGetCompanyRepository
    constructor(repository: IGetCompanyRepository) {
        this._repository = repository
    }
    async get(id: string): Promise<CompanyResponseDto> {
        return await this._repository.get(id);
    }

}
