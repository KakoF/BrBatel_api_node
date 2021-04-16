export interface IDeleteCompanyUseCase {
    delete(userId: string, id: string): Promise<boolean>
}