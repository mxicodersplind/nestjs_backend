/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { moleculus_indextoken } from './Moleculus_Indextoken';
import { moleculus_users } from './Moleculus_User';

@Entity('moleculus_order_history')
export class moleculus_order_history extends BaseEntity {
  @PrimaryColumn({
    type: 'bigint',
  })
  order_id: number;

  @ManyToOne(() => moleculus_users)
  @JoinColumn()
  @Column({
    type: 'bigint',
    default: 0,
  })
  user_id: number;

  @ManyToOne(() => moleculus_indextoken)
  @JoinColumn()
  @Column({
    type: 'bigint',
    default: 0,
  })
  token_id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  token_name: string;

  @Column({
    type: 'varchar',
    length: 255,
    default: '0',
  })
  token_code: string;

  @Column({
    type: 'varchar',
    length: 255,
    default: '0',
  })
  token_order_amount: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  token_current_amount: string;

  @Column({
    type: 'time with time zone',
  })
  created_datetime: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  created_ip: string;
}
