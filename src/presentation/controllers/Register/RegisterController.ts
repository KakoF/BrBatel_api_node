import { Request, Response } from "express";
import { IRegisterUseCase } from "../../../useCases/register/IRegisterUseCase";

export class RegisterController {
    private _service: IRegisterUseCase
    constructor(service: IRegisterUseCase) {
        this._service = service
    }
    async register(req: Request, res: Response) {
        const { nome, email, senha } = req.body
        try {
            const data = await this._service.register({ nome, email, senha })
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}