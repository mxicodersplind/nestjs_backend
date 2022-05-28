/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';
import { moleculus_users } from './Moleculus_User';

export enum balance_email_enum {
    On = 'On',
    Off = 'Off',
}
export enum balance_device_enum {
    On = 'On',
    Off = 'Off',
}
export enum security_email_enum {
    On = 'On',
    Off = 'Off',
}
export enum security_device_enum {
    On = 'On',
    Off = 'Off',
}
export enum price_alert_enum {
    On = 'On',
    Off = 'Off',
}
export enum update_email_enum {
    On = 'On',
    Off = 'Off',
}

export enum update_device_enum {
    On = 'On',
    Off = 'Off',
}

@Entity()
export class moleculus_user_notification {
    @PrimaryColumn({
        type: 'int',
        generated: true,
    })
    noti_id: number;

    //FOREIGN KEY -> moleculus_users
    @ManyToOne(() => moleculus_users)
    // @Column({
    //     type: 'bigint',
    //     default: 0,
    // })
    noti_user_id: number;

    @Column({
        type: 'enum',
        enum: balance_email_enum,
        default: balance_email_enum.Off,
    })
    balance_email: balance_email_enum;

    @Column({
        type: 'enum',
        enum: balance_device_enum,
        default: balance_device_enum.Off,
    })
    balance_device: balance_device_enum;

    @Column({
        type: 'enum',
        enum: security_email_enum,
        default: security_email_enum.Off,
    })
    security_email: security_email_enum;

    @Column({
        type: 'enum',
        enum: security_device_enum,
        default: security_device_enum.Off,
    })
    security_device: security_device_enum;

    @Column({
        type: 'enum',
        enum: price_alert_enum,
        default: price_alert_enum.Off,
    })
    price_alert: price_alert_enum;

    @Column({
        type: 'enum',
        enum: update_email_enum,
        default: update_email_enum.Off,
    })
    update_email: update_email_enum;

    @Column({
        type: 'enum',
        enum: update_device_enum,
        default: update_device_enum.Off,
    })
    update_device: update_device_enum;

    @Column({
        type: 'timestamptz',
    })
    modified_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
    })
    modified_ip: string;
}
