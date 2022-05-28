/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn } from 'typeorm';


import { Column, Entity } from "typeorm";


@Entity()
export class Coin {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,

    })
    name: string;

    @Column({
        type: 'varchar',
        length: 15,
        nullable: false,
    })
    symbol: string;

    @Column({
        nullable: false,
        default: 0,

    })
    price: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    description: string;

}