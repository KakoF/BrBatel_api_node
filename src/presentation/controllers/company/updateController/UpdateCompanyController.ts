import { Request, Response } from "express";
import { ICreateCompanyUseCase } from "../../../../useCases/company/createCompanyUseCase/ICreateCompanyUseCase";
import { IUpdateCompanyUseCase } from "../../../../useCases/company/updateCompanyUseCase/IUpdateCompanyUseCase";

export class UpdateCompanyController {
    private _service: IUpdateCompanyUseCase
    constructor(service: IUpdateCompanyUseCase) {
        this._service = service
    }
    async update(req: Request, res: Response) {
        try {
            const data = await this._service.update(req.userId, req.body.id, req.body)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}