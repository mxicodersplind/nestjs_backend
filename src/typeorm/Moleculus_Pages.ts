import { JoinColumn, ManyToOne } from 'typeorm';
/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { moleculus_country } from './Moleculus_Country';
import { moleculus_state } from './Moleculus_State';

export enum page_status_enum {
    Enable = 'Enable',
    Disable = 'Disable',
}

@Entity()
export class moleculus_pages {
    @PrimaryColumn({})
    pagetitle_id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    pagetitle: string;

    @Column({
        type: 'text',
    })
    description: string;
    @Column({
        type: 'enum',
        enum: page_status_enum,
        default: page_status_enum.Enable,
    })
    page_status: page_status_enum;

    @Column({
        type: 'timestamptz',
    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
    })
    created_ip: string;

    //Foreign Key to moleculus_country
    @ManyToOne(() => moleculus_country)
    @JoinColumn()
    @Column({
        type: 'bigint',
        default: 0,
    })
    page_country_id: number;

    //Foreign Key-> moleculus_state
    @ManyToOne(() => moleculus_state)
    @JoinColumn()
    @Column({
        type: 'text',
    })
    page_state_id: string;
}
