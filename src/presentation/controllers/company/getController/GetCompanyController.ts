import { Request, Response } from "express";
import { IGetCompanyUseCase } from "../../../../useCases/company/getCompanyUseCase/IGetCompanyUseCase";

export class GetCompanyController {
    private _service: IGetCompanyUseCase
    constructor(service: IGetCompanyUseCase) {
        this._service = service
    }
    async get(req: Request, res: Response) {
        try {
            const data = await this._service.get(req.params.id)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}