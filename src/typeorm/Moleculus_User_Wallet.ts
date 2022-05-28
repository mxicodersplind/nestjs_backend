/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class moleculus_user_wallet {
    @PrimaryColumn({})
    wallet_id: number

}