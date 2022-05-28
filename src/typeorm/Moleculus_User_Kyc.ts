/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_user_kyc {

    @PrimaryColumn({
        type: 'bigint',
        generated: true,
    })
    kyc_id: number;

    @Column({
        type: 'bigint',
        default: 0,

    })
    kyc_user_id: number;


}