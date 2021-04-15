export class CompanyRequestDto implements Readonly<CompanyRequestDto> {
    nome: string
    cnpj: string
    demanda: number
    faturamento_anual: number

    public static from(dto: Partial<CompanyRequestDto>) {
        const it = new CompanyRequestDto();
        it.nome = dto.nome;
        it.cnpj = dto.cnpj;
        it.demanda = dto.demanda;
        it.faturamento_anual = dto.faturamento_anual;
        const re = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        if (!it.nome) throw new Error('Nome é campo obrigatório')
        if (!it.cnpj) throw new Error('CNPJ é campo obrigatório')
        if (!it.demanda) throw new Error('Demanda é campo obrigatório')
        if (!it.faturamento_anual) throw new Error('Faturamento anual é campo obrigatório')
        if (!re.test(String(it.cnpj).toLowerCase())) throw new Error('CNPJ não é válido')
        return it;
    }



}
