import { Company } from "../../../domain/entities/Company";


export class ListCompanyUserResponseDto implements Readonly<ListCompanyUserResponseDto> {
    id: string;
    nome: string;
    cnpj: string;
    demanda: number;
    faturamento_anual: number;
    sobre: string;
    createAt: Date;
    updateAt: Date;
    user: Object;

    public static from(entity: Company[]): ListCompanyUserResponseDto[] {
        return entity.map(company => {
            const { senha: omitted, ...userP } = company.user;
            const response = new ListCompanyUserResponseDto();
            response.id = company.id
            response.nome = company.nome
            response.cnpj = company.cnpj
            response.demanda = company.demanda
            response.faturamento_anual = company.faturamento_anual
            response.sobre = company.sobre
            response.createAt = company.createAt
            response.updateAt = company.updateAt
            response.user = userP
            return response
        })


    }
}
