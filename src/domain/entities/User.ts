import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { BaseEntity } from './Base'

@Entity('users')
export class User extends BaseEntity {

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  senha: string

  @BeforeInsert()
  newUser() {
    this.createAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
    //this.senha = bcrypt.hashSync(this.senha, 12)
  }

  @BeforeUpdate()
  updateUser() {
    this.updateAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
    //this.senha = bcrypt.hashSync(this.senha, 12)
  }

  constructor(nome: string, email: string, senha: string, createAt?: Date, updateAt?: Date, id?: string) {
    super()
    this.nome = nome
    this.email = email
    this.createAt = createAt
    this.updateAt = updateAt
    this.senha = senha
    if (!id) {
      this.id = uuidv4()
    } else {
      this.id = id
    }
  }
}
