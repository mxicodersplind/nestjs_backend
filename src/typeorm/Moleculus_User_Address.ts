/* eslint-disable prettier/prettier */
import { randomInt } from 'crypto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { moleculus_users } from './Moleculus_User';

@Entity()
export class moleculus_user_address {
  @PrimaryColumn({
    type: 'smallint',
    generated: true,
  })
  address_id: number;

  @ManyToOne(() => moleculus_users)
  @JoinColumn()
  @Column({
    type: 'integer',
    default: randomInt(9999 - 1),
  })
  user_address_id: number;

  @Column({
    type: 'text',
    default: '',
  })
  address_line1: string;

  @Column({
    type: 'text',
    default: '',
  })
  address_line2: string;

  @Column({
    type: 'timestamptz',
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
