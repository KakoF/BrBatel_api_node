import { Request, Response } from "express";
import { IPaginateCompanyUseCase } from "../../../../useCases/company/paginateCompanyUseCase/IPaginateCompanyUseCase";

export class PaginateCompanyController {
    private _service: IPaginateCompanyUseCase
    constructor(service: IPaginateCompanyUseCase) {
        this._service = service
    }
    async paginate(req: Request, res: Response) {
        try {
            const data = await this._service.paginate(parseInt(req.params.page), parseInt(req.params.offset), parseInt(req.params.perPage))
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}