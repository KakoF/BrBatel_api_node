export interface IBcrypt {
    crypt(value: string): string
    compare(hash: string, passwor: string): Promise<boolean>
}