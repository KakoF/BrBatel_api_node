import { Request, Response } from "express";
import { IDeleteCompanyUseCase } from "../../../../useCases/company/deleteCompanyUseCase/IDeleteCompanyUseCase";

export class DeleteCompanyController {
    private _service: IDeleteCompanyUseCase
    constructor(service: IDeleteCompanyUseCase) {
        this._service = service
    }
    async delete(req: Request, res: Response) {
        try {
            const data = await this._service.delete(req.params.id)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}