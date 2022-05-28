/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum country_status_Enum {
    Enable = 'Enable',
    Disable = 'Disable'
}
@Entity()
export class moleculus_country {

    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    country_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    country_name: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    country_code: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    country_logo: string;

    @Column({
        type: 'enum',
        enum: country_status_Enum,
        default: country_status_Enum.Enable,
    })
    country_status: country_status_Enum;

    @Column({
        type: 'timestamp',
        default: () => ('CURRENT_TIMESTAMP'),
    })
    created_datetime: Date;


    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    created_ip: string;
}
