import { IBcrypt } from "../IBcrypt";
import { compare, hashSync } from "bcryptjs";
export class Bcrypt implements IBcrypt {
    private readonly salt = 12
    crypt(value: string): string {
        return hashSync(value, this.salt)
    }
    async compare(hash: string, password: string): Promise<boolean> {
        return await compare(password, hash)
    }

}