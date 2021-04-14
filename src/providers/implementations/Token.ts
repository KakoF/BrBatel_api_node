import jwt from 'jsonwebtoken'
import { LoginResponseDto } from '../../useCases/Login/dto/login-response.dto';
import { IToken } from "../IToken";

export class Token implements IToken {
    generateAccess(user: LoginResponseDto): string {
        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWTSIGNATURE,
            { expiresIn: '1d' }
        )
        return token;
    }

}