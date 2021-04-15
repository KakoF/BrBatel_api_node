export interface IDeleteCompanyUseCase {
    delete(id: string): Promise<boolean>
}