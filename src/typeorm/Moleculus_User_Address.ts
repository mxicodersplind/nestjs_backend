/* eslint-disable prettier/prettier */
import { randomInt } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity()
export class moleculus_user_address {
    @PrimaryColumn({
        type: 'smallint',
        generated: true,

    })
    address_id: number;


    @Column({
        type: 'integer',
        default: randomInt(897 - 8)
    })
    user_address_id: number;

    @Column({
        type: 'text',
        default: '',
    })
    address_line1: string;

    @Column({
        type: 'text',
        default: '',
    })
    address_line2: string;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',

    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    created_ip: string;

}