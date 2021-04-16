import { cnpj } from 'cpf-cnpj-validator';
import { IValidation } from "../IValidation";
export class Validation implements IValidation {
    isValidCnpj(value: string): void {
        if (!cnpj.isValid(value)) {
            throw new Error('Cnpj é inválido')
        }
    }
}