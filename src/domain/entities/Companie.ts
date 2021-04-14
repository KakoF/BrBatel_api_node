import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { BaseEntity } from './Base'

@Entity('companies')
export class User extends BaseEntity {

  @Column()
  nome: string

  @Column()
  cnpj: string

  @Column("decimal", { precision: 5, scale: 2 })
  demanda: number

  @Column("decimal", { precision: 5, scale: 2 })
  faturamento_anual: number

  constructor(nome: string, cnpj: string, demanda: number, faturamento_anual: number, createAt?: Date, updateAt?: Date, id?: string) {
    super()
    this.nome = nome
    this.cnpj = cnpj
    this.demanda = demanda
    this.faturamento_anual = faturamento_anual
    this.createAt = createAt
    this.updateAt = updateAt
    if (!id) {
      this.id = uuidv4()
    } else {
      this.id = id
    }
  }
}
