import { IDeleteCompanyRepository } from "../../../../data/repositories/company/delete/IDeleteCompanyRepository";
import { IGetCompanyRepository } from "../../../../data/repositories/company/get/IGetCompanyRepository";
import { IDeleteCompanyUseCase } from "../IDeleteCompanyUseCase";

export class DeleteCompanyUseCase implements IDeleteCompanyUseCase {
    private _repository: IDeleteCompanyRepository
    private _getCompanyRepository: IGetCompanyRepository
    constructor(repository: IDeleteCompanyRepository, getCompanyRepository: IGetCompanyRepository) {
        this._repository = repository
        this._getCompanyRepository = getCompanyRepository
    }

    async delete(userId: string, id: string): Promise<boolean> {
        var pastCompany = await this._getCompanyRepository.get(id);
        if (pastCompany.user.id != userId)
            throw new Error('Operação não permitida')
        return await this._repository.delete(id);
    }

}