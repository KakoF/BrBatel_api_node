import { IReadCompanyRepository } from "../../../../data/repositories/company/read/IReadCompanyRepository";
import { CompanyResponseDto } from "../../dto/company-response.dto";
import { IReadCompanyUseCase } from "../IReadCompanyUseCase";

export class ReadCompanyUseCase implements IReadCompanyUseCase {
    private _repository: IReadCompanyRepository
    constructor(repository: IReadCompanyRepository) {
        this._repository = repository
    }
    async read(): Promise<CompanyResponseDto[]> {
        const data = await this._repository.read()
        return data;
    }

}