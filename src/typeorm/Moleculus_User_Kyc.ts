/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn,BaseEntity } from 'typeorm';
import { moleculus_users } from './Moleculus_User';

export enum kyc_status_enum {
  Pending = 'Pending',
  Rejected = 'Rejected',
  Completed = 'Completed',
}
@Entity()
export class moleculus_user_kyc extends BaseEntity {
  @PrimaryColumn({
    type: 'bigint',
    generated: true,
  })
  kyc_id: number;

  //FOREIGN KEY -> moleculus_users
  @OneToOne(() => moleculus_users)
  @JoinColumn()
  @Column({
    type: 'bigint',
    default: 0,
  })
  kyc_user_id: number;

  @Column({
    type: 'text',
  })
  api_repsonse: string;

  @Column({
    type: 'enum',
    enum: kyc_status_enum,
    default: kyc_status_enum.Pending,
  })
  kyc_status: kyc_status_enum;

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
