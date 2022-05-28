/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum state_status_Enum {
    Enable = 'Enable',
    Disable = 'Disable',
}

@Entity()
export class moleculus_state {
    @PrimaryColumn({
        type: 'smallint',
        generated: true,
    })
    state_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        default: '',
    })
    state_name: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: "",
    })
    state_country_id: string;

    @Column({
        type: 'enum',
        enum: state_status_Enum,
        default: state_status_Enum.Enable,
    })
    state_status: state_status_Enum;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
        default: "",
    })
    created_ip: string;

}