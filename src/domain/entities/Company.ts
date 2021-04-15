import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { BaseEntity } from './Base'
import { User } from './User'

@Entity('companies')
export class Company extends BaseEntity {

  @Column()
  nome: string

  @Column()
  cnpj: string

  @Column("decimal", { precision: 12, scale: 2 })
  demanda: number

  @Column("decimal", { precision: 12, scale: 2 })
  faturamento_anual: number

  @ManyToOne(type => User, user => user.company) user: User;

  @Column()
  userId: string;


  constructor(userId: string, nome: string, cnpj: string, demanda: number, faturamento_anual: number, createAt?: Date, updateAt?: Date, id?: string) {
    super()
    this.nome = nome
    this.cnpj = cnpj
    this.userId = userId
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
