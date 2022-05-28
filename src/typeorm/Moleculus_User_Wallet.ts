/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { moleculus_users } from './Moleculus_User';


@Entity()
export class moleculus_user_wallet {
    @PrimaryGeneratedColumn({})
    wallet_id: number;

    //Use Foreign Key
    @OneToOne(() => moleculus_users)
    @JoinColumn()
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
