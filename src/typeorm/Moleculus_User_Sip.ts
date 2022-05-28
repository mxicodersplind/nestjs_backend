import { OneToOne, ManyToOne, JoinColumn } from 'typeorm';
/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { moleculus_users } from './Moleculus_User';

export enum sip_day_enum {
    Daily = 'Daily',
    Weekly = 'Weekly',
    Monthly = 'Monthly',
    Bimonthly = 'Bimonthly',
}

export enum sip_status_enum {
    Active = 'Active',
    Paused = 'Paused',
    Cancelled = 'Cancelled',

}

@Entity()
export class moleculus_user_sip {
    @PrimaryColumn({
        type: 'int',
        generated: true,
    })
    user_sip_id: number;

    @ManyToOne(() => moleculus_users)
    @JoinColumn()
    @Column({
        type: 'int',
        default: 0,
    })
    sip_user_id: number;

    @Column({
        type: 'varchar',
        length: '255',
    })
    token_name: string;

    @Column({
        type: 'varchar',
        length: '255',
        default: '0',
    })
    token_price: string;

    @Column({
        type: 'varchar',
        length: '255',
        default: '0',
    })
    token_current_price: string;

    @Column({
        type: 'enum',
        enum: sip_day_enum,
        default: sip_day_enum.Bimonthly,
    })
    sip_day: sip_day_enum;

    @Column({
        type: 'date',
    })
    sip_start_date: Date;

    @Column({
        type: 'date',
    })
    sip_end_date: Date;

    @Column({
        type: 'date',
    })
    sip_next_date: Date;

    @Column({
        type: 'enum',
        enum: sip_status_enum,
        default: sip_status_enum.Active,
    })
    sip_status: sip_status_enum;

    @Column({
        type: 'text',
    })
    sip_comment: string;

    @OneToOne(() => moleculus_users)
    @JoinColumn()
    @Column({
        type: 'bigint'
    })
    sip_bank_id: number;


    @Column({
        type: 'timestamptz',
    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: '255',
    })
    created_ip: string;
}
