import { Company } from "../../../domain/entities/Company";


export class CompanyUserResponseDto implements Readonly<CompanyUserResponseDto> {
    id: string;
    nome: string;
    cnpj: string;
    demanda: number;
    faturamento_anual: number;
    sobre: string;
    createAt: Date;
    updateAt: Date;
    user: Object;

    public static from(entity: Company): CompanyUserResponseDto {
        const { senha: omitted, ...userP } = entity.user;
        const response = new CompanyUserResponseDto();
        response.id = entity.id
        response.nome = entity.nome
        response.cnpj = entity.cnpj
        response.demanda = entity.demanda
        response.faturamento_anual = entity.faturamento_anual
        response.sobre = entity.sobre
        response.createAt = entity.createAt
        response.updateAt = entity.updateAt
        response.user = userP
        return response
    }
}
