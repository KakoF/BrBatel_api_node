import { Company } from "../../../domain/entities/Company";

export class CompanyResponseDto implements Readonly<CompanyResponseDto> {
    id: string;
    nome: string;
    cnpj: string;
    demanda: number;
    faturamento_anual: number;
    sobre: string;
    createAt: Date;
    updateAt: Date;

    public static from(entity: Company): CompanyResponseDto {
        const response = new CompanyResponseDto();
        response.id = entity.id
        response.nome = entity.nome
        response.cnpj = entity.cnpj
        response.demanda = entity.demanda
        response.faturamento_anual = entity.faturamento_anual
        response.sobre = entity.sobre
        response.createAt = entity.createAt
        response.updateAt = entity.updateAt
        return response
    }
}