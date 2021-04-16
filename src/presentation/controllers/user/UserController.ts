import { Request, Response } from "express";
import { ILoginUseCase } from "../../../useCases/login/ILoginUseCase";
import { IUserUseCase } from "../../../useCases/user/IUserUseCase";

export class UserController {
    private _service: IUserUseCase
    constructor(service: IUserUseCase) {
        this._service = service
    }
    async user(req: Request, res: Response) {
        try {
            console.log('enotr')
            const data = await this._service.user(req.userId)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}