/* eslint-disable prettier/prettier */
import {
  BaseEntity,
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
export class moleculus_sip_transaction extends BaseEntity {
  @PrimaryColumn({
    type: 'int',
  })
  sip_tra_id: number;

  //foreign KEy-> moleculus_user_sip
  @OneToOne(() => moleculus_user_sip)
  @JoinColumn({ name: 'sip_id' })
  sip_id: moleculus_user_sip;

  //foreign key ->moleculus users
  @ManyToOne(
    () => moleculus_users,
    (tra_user_id) => tra_user_id.Moleculus_sip_transaction,
  )
  @JoinColumn({ name: 'tra_user_id' })
  tra_user_id: moleculus_users;

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
