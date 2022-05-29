/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, BaseEntity } from 'typeorm';

export enum setting_status_enum {
  Enable = 'Enable',
  Disable = 'Disable',
}
@Entity()
export class moleculus_settings extends BaseEntity {
  @PrimaryColumn({
    type: 'bigint',
    generated: true,
  })
  setting_id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  setting_name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  setting_value: string;

  @Column({
    type: 'enum',
    enum: setting_status_enum,
    default: setting_status_enum.Enable,
  })
  setting_status: setting_status_enum;

  @Column({
    type: 'timestamptz',
  })
  created_datetime: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  created_ip: string;
}
