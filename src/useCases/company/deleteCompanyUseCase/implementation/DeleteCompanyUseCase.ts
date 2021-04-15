import { IDeleteCompanyRepository } from "../../../../data/repositories/company/delete/IDeleteCompanyRepository";
import { IDeleteCompanyUseCase } from "../IDeleteCompanyUseCase";

export class DeleteCompanyUseCase implements IDeleteCompanyUseCase {
    private _repository: IDeleteCompanyRepository
    constructor(repository: IDeleteCompanyRepository) {
        this._repository = repository
    }

    async delete(id: string): Promise<boolean> {
        return await this._repository.delete(id);
    }

}