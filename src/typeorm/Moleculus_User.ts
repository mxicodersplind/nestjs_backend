/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export enum is_email_verified_Enum {
    Yes = 'Yes',
    No = 'No',
}

export enum is_phone_verified_Enum {
    Yes = 'Yes',
    No = 'No',
}

export enum status_Enum {
    Enable = 'Enable',
    Disable = 'Disable',
}

export enum is_deleted_Enum {
    Yes = 'Yes',
    No = 'No',
}

export enum dark_mode_Enum {
    On = 'On',
    Off = 'Off',
}

export enum biometric_Enum {
    On = 'On',
    Off = 'Off',
}

export enum google_auth_enabled_Enum {
    Enable = 'Enable',
    Disable = 'Disable',
}

export enum user_login_type_Enum {
    Normal = 'Normal',
    Apple = 'Apple',
    Google = 'Google',
    Facebook = 'Facebook',
    Twitter = 'Twitter',
}

@Entity()
export class moleculus_users {
    @PrimaryColumn({
        type: 'bigint',
        generated: true,
    })
    user_id: number;

    @Column()
    fullname: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    email_id: string;

    @Column({
        nullable: true,
        default: null,
    })
    password: string;

    @Column({
        type: 'int',
        default: 0
    })
    country_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    country_name: string;

    @Column({
        type: 'int',
        nullable: true,
    })
    state_id: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    state_name: string;

    @Column({
        type: 'smallint',
        nullable: true,
    })
    phone_code: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    phone_number: string;


    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    otp: number;


    @Column({
        type: 'enum',
        enum: is_email_verified_Enum,
        default: is_email_verified_Enum.No,

    })
    is_email_verify: is_email_verified_Enum;


    @Column({
        type: 'enum',
        enum: is_phone_verified_Enum,
        default: is_phone_verified_Enum.No,
    })
    is_phone_verify: is_phone_verified_Enum;


    @Column({
        type: 'varchar',
        length: 255,
        default: null,

    })
    dob: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    tin: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    citizenship: string;


    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    city: string;


    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    zipcode: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    wallet_balance: number;

    @Column({
        type: 'enum',
        enum: status_Enum,
        default: status_Enum.Disable,
    })
    status: status_Enum;

    @Column({
        type: 'enum',
        enum: is_deleted_Enum,
        default: is_deleted_Enum.No,
    })
    is_deleted: is_deleted_Enum;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    default_currency: string;

    @Column({
        type: 'enum',
        enum: dark_mode_Enum,
        default: dark_mode_Enum.Off,
    })
    dark_mode: dark_mode_Enum;

    @Column({
        type: 'enum',
        enum: biometric_Enum,
        default: biometric_Enum.Off,

    })
    biometric: biometric_Enum;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    passcode: string;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    created_ip: string;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP + INTERVAL \'1 DAY\'',
    })
    modified_datetime: Date;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    modified_ip: string;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    google_auth_code: string;

    @Column({
        type: 'enum',
        enum: google_auth_enabled_Enum,
        default: google_auth_enabled_Enum.Disable,
    })
    google_auth_enabled: google_auth_enabled_Enum;

    @Column({
        type: 'enum',
        enum: user_login_type_Enum,
        default: user_login_type_Enum.Normal,
    })
    user_login_type: user_login_type_Enum;

    @Column({
        type: 'varchar',
        length: 255,
        default: null,
    })
    secondary_email: string;

}
