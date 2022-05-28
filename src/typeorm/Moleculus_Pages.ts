/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { moleculus_country } from './Moleculus_Country';

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
    @ManyToMany(() => moleculus_country, (moleculus_country) => moleculus_country)
    @Column({
        type: 'bigint',
        default: 0,
    })
    page_country_id: number;

    //Foreign Key-> moleculus_state
    @Column({
        type: 'text',
    })
    page_state_id: string;
}
