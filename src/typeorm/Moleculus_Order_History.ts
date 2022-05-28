/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_order_history {
    @PrimaryColumn({
        type: 'bigint',
    })
    order_id

    @Column({
        type: 'bigint',
        default: 0,
    })
    user_id: number;

    @Column({
        type: 'bigint',
        default: 0,
    })
    token_id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    token_name: string;


    @Column({
        type: 'varchar',
        length: 255,
        default: '0',
    })
    token_code: string

    @Column({
        type: 'varchar',
        length: 255,
        default: '0',
    })
    token_order_amount: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    token_current_amount: string;

    @Column({
        type: 'time with time zone',

    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
    })
    created_ip: string;


} 