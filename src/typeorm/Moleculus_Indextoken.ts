/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_indextoken {
    @PrimaryColumn({
        type: 'bigint',
    })
    token_id: number;
}