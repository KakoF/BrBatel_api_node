import { IReadCompanyRepository } from "../../../../data/repositories/company/read/IReadCompanyRepository";
import { ListCompanyUserResponseDto } from "../../dto/list-company-user-response.dto";
import { IReadCompanyUseCase } from "../IReadCompanyUseCase";

export class ReadCompanyUseCase implements IReadCompanyUseCase {
    private _repository: IReadCompanyRepository
    constructor(repository: IReadCompanyRepository) {
        this._repository = repository
    }
    async read(): Promise<ListCompanyUserResponseDto[]> {
        const data = await this._repository.read()
        return ListCompanyUserResponseDto.from(data);
    }

}