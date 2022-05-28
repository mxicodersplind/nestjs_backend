/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class moleculus_user_wallet {
    @PrimaryColumn({})
    wallet_id: number;

    //Use Foreign Key
    @Column({
        type: 'bigint',
    })
    wallet_user_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        default: '0',
    })
    wallet_balance: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: '0',
    })
    wallet_address: string;

    @Column({
        type: 'text',
    })
    private_key: string;

    @Column({
        type: 'text',
    })
    public_key: string;

    @Column({
        type: 'timestamptz',
    })
    created_time: Date;

    @Column({
        type: 'varchar',
        length: 255,
        default: '0',
    })
    created_ip: string;
}
