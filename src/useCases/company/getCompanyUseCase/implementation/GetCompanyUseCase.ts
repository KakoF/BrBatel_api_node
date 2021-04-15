import { IGetCompanyRepository } from "../../../../data/repositories/company/get/IGetCompanyRepository";
import { CompanyUserResponseDto } from "../../dto/company-user-response.dto";
import { IGetCompanyUseCase } from "../IGetCompanyUseCase";

export class GetCompanyUseCase implements IGetCompanyUseCase {
    private _repository: IGetCompanyRepository
    constructor(repository: IGetCompanyRepository) {
        this._repository = repository
    }
    async get(id: string): Promise<CompanyUserResponseDto> {
        const data = await this._repository.get(id);
        return CompanyUserResponseDto.from(data)
    }

}
