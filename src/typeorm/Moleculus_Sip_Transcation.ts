/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { moleculus_users } from './Moleculus_User';
import { moleculus_user_sip } from './Moleculus_User_Sip';

export enum tra_satus_enum {
  Pendding = 'Pendding',
  Completed = 'Completed',
}

@Entity()
export class moleculus_sip_transaction {
  @PrimaryColumn({
    type: 'int',
  })
  sip_tra_id: number;

  //foreign KEy-> moleculus_user_sip
  @OneToOne(() => moleculus_user_sip)
  @JoinColumn()
  @Column({
    type: 'int',
    default: 0,
  })
  sip_id: number;

  //foreign key ->moleculus users
  @ManyToOne(() => moleculus_users)
  @JoinColumn()
  @Column({
    type: 'bigint',
    default: 0,
  })
  tra_user_id: number;

  @Column({
    type: 'varchar',
    length: '255',
    default: '0',
  })
  transaction_price: string;

  @Column({
    type: 'varchar',
    length: '255',
  })
  tra_currency: string;

  @Column({
    type: 'varchar',
    length: '255',
  })
  token_name: string;

  @Column({
    type: 'enum',
    enum: tra_satus_enum,
    default: tra_satus_enum.Pendding,
  })
  tra_satus: tra_satus_enum;

  @Column({
    type: 'date',
  })
  created_datetime: Date;
}
