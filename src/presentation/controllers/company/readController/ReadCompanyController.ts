import { Request, Response } from "express";
import { IReadCompanyUseCase } from "../../../../useCases/company/readCompanyUseCase/IReadCompanyUseCase";

export class ReadCompanyController {
    private _service: IReadCompanyUseCase
    constructor(service: IReadCompanyUseCase) {
        this._service = service
    }
    async read(req: Request, res: Response) {
        try {
            const data = await this._service.read()
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}