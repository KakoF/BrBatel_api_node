import { Request, Response } from "express";

export class LoginController {
    async login(req: Request, res: Response) {
        return res.send('Login')
    }
}