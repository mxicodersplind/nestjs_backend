/* eslint-disable prettier/prettier */
import { JoinColumn } from 'typeorm';

import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { moleculus_users } from './Moleculus_User';

export enum country_status_Enum {
  Enable = 'Enable',
  Disable = 'Disable',
}
@Entity('moleculus_country')
export class moleculus_country extends BaseEntity {
  @OneToMany(
    () => moleculus_users,
    (Moleculus_user) => Moleculus_user.Moleculus_country,
  )
  @JoinColumn({ name: 'country_id' })
  Moleculus_user: moleculus_users[];

  @OneToMany(
    () => moleculus_users,
    (Moleculus_user_) => Moleculus_user_.Moleculus_country_,
  )
  Moleculus_user_: moleculus_users[];

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
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_datetime: Date;

  @Column({
    type: 'varchar',
    length: 255,
    default: '',
  })
  created_ip: string;
}
