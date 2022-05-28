/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class moleculus_user_notification {
    @PrimaryColumn({
        type: 'int',
        generated: true,
    })
    noti_id: number;

}