/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({
        nullable: false,
        default: "",
    })
    password: string;

}
