import { Request, Response } from "express";
import { ILoginUseCase } from "../../../useCases/login/ILoginUseCase";

export class LoginController {
    private _service: ILoginUseCase
    constructor(service: ILoginUseCase) {
        this._service = service
    }
    async login(req: Request, res: Response) {
        const { email, senha } = req.body
        try {
            const data = await this._service.login({ email, senha })
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}