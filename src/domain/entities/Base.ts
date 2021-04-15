// base.entity.ts

import { PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ObjectIdColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    //@ObjectIdColumn()
    id: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updateAt: Date;

    @BeforeInsert()
    newEntity() {
        this.createAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
        this.updateAt = null;
    }

    @BeforeUpdate()
    updateEntity() {
        this.updateAt = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000)
    }

}