/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_settings {
    @PrimaryColumn({
        type: 'bigint',
        generated: true,
    })
    setting_id: number;
}