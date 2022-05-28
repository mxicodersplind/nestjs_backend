/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum tra_satus_enum {
    Pendding = 'Pendding',
    Completed = 'Completed',
}

@Entity()
export class moleculus_sip_transaction {
    @PrimaryColumn({
        type: 'int',
    })
    sip_tra_id: number;

    @Column({
        type: 'int',
        default: 0,
    })
    sip_id: number;

    @Column({
        type: 'bigint',
        default: 0,
    })
    tra_user_id: number;

    @Column({
        type: 'varchar',
        length: '255',
        default: '0',
    })
    transaction_price: string;

    @Column({
        type: 'varchar',
        length: '255',
    })
    tra_currency: string;

    @Column({
        type: 'varchar',
        length: '255',
    })
    token_name: string;

    @Column({
        type: 'enum',
        enum: tra_satus_enum,
        default: tra_satus_enum.Pendding,
    })
    tra_satus: tra_satus_enum;

    @Column({
        type: 'date',
    })
    created_datetime: Date;
}
