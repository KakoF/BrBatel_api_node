import { Request, Response } from "express";
import { ICreateCompanyUseCase } from "../../../../useCases/company/createCompanyUseCase/ICreateCompanyUseCase";

export class CreateCompanyController {
    private _service: ICreateCompanyUseCase
    constructor(service: ICreateCompanyUseCase) {
        this._service = service
    }
    async create(req: Request, res: Response) {
        try {
            const data = await this._service.create(req.userId, req.body)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}