/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn,BaseEntity } from 'typeorm';
import { moleculus_country } from './Moleculus_Country';

export enum state_status_Enum {
  Enable = 'Enable',
  Disable = 'Disable',
}

@Entity()
export class moleculus_state extends BaseEntity {
  @PrimaryColumn({
    type: 'smallint',
    generated: true,
  })
  state_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    default: '',
  })
  state_name: string;

  @OneToOne(() => moleculus_country)
  @JoinColumn()
  @Column({})
  state_country_id: string;

  @Column({
    type: 'enum',
    enum: state_status_Enum,
    default: state_status_Enum.Enable,
  })
  state_status: state_status_Enum;

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
